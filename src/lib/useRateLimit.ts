import { useState, useCallback } from "react";

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  cooldownMs: number;
}

interface RateLimitState {
  attempts: number;
  lastAttempt: number;
  isBlocked: boolean;
  remainingTime: number;
}

export function useRateLimit(
  config: RateLimitConfig = {
    maxAttempts: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
    cooldownMs: 5 * 60 * 1000, // 5 minutes de cooldown
  }
) {
  const [state, setState] = useState<RateLimitState>(() => {
    // Récupérer l'état depuis le localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("rateLimitState");
      if (saved) {
        const parsed = JSON.parse(saved);
        const now = Date.now();

        // Vérifier si la fenêtre de temps est expirée
        if (now - parsed.lastAttempt > config.windowMs) {
          return {
            attempts: 0,
            lastAttempt: 0,
            isBlocked: false,
            remainingTime: 0,
          };
        }

        // Vérifier si on est en cooldown
        if (parsed.isBlocked && now - parsed.lastAttempt < config.cooldownMs) {
          return {
            ...parsed,
            remainingTime: Math.ceil(
              (config.cooldownMs - (now - parsed.lastAttempt)) / 1000
            ),
          };
        }

        return parsed;
      }
    }
    return { attempts: 0, lastAttempt: 0, isBlocked: false, remainingTime: 0 };
  });

  const attempt = useCallback(() => {
    const now = Date.now();

    // Si on est en cooldown, vérifier si c'est terminé
    if (state.isBlocked) {
      if (now - state.lastAttempt < config.cooldownMs) {
        const remainingTime = Math.ceil(
          (config.cooldownMs - (now - state.lastAttempt)) / 1000
        );
        setState((prev) => ({ ...prev, remainingTime }));
        return false;
      } else {
        // Cooldown terminé, réinitialiser
        const newState = {
          attempts: 1,
          lastAttempt: now,
          isBlocked: false,
          remainingTime: 0,
        };
        setState(newState);
        localStorage.setItem("rateLimitState", JSON.stringify(newState));
        return true;
      }
    }

    // Vérifier si on est dans la même fenêtre de temps
    if (now - state.lastAttempt < config.windowMs) {
      const newAttempts = state.attempts + 1;

      if (newAttempts >= config.maxAttempts) {
        // Bloquer pour le cooldown
        const newState = {
          attempts: newAttempts,
          lastAttempt: now,
          isBlocked: true,
          remainingTime: Math.ceil(config.cooldownMs / 1000),
        };
        setState(newState);
        localStorage.setItem("rateLimitState", JSON.stringify(newState));
        return false;
      } else {
        // Incrémenter les tentatives
        const newState = { ...state, attempts: newAttempts, lastAttempt: now };
        setState(newState);
        localStorage.setItem("rateLimitState", JSON.stringify(newState));
        return true;
      }
    } else {
      // Nouvelle fenêtre de temps, réinitialiser
      const newState = {
        attempts: 1,
        lastAttempt: now,
        isBlocked: false,
        remainingTime: 0,
      };
      setState(newState);
      localStorage.setItem("rateLimitState", JSON.stringify(newState));
      return true;
    }
  }, [state, config]);

  const reset = useCallback(() => {
    const newState = {
      attempts: 0,
      lastAttempt: 0,
      isBlocked: false,
      remainingTime: 0,
    };
    setState(newState);
    localStorage.removeItem("rateLimitState");
  }, []);

  const getRemainingAttempts = useCallback(() => {
    return Math.max(0, config.maxAttempts - state.attempts);
  }, [state.attempts, config.maxAttempts]);

  const getTimeUntilReset = useCallback(() => {
    if (state.isBlocked) {
      return state.remainingTime;
    }

    const now = Date.now();
    const timeSinceLastAttempt = now - state.lastAttempt;
    const timeUntilWindowReset = Math.max(
      0,
      config.windowMs - timeSinceLastAttempt
    );

    return Math.ceil(timeUntilWindowReset / 1000);
  }, [state, config.windowMs]);

  return {
    attempt,
    reset,
    isBlocked: state.isBlocked,
    remainingAttempts: getRemainingAttempts(),
    timeUntilReset: getTimeUntilReset(),
    attempts: state.attempts,
  };
}

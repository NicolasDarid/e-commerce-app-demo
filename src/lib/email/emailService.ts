import { EmailService, EmailConfig } from "./types";
import { ResendAdapter } from "./adapters/resend";
import { ContactEmailTemplate } from "./templates/contact";
import { ContactRequest } from "./types";

export class EmailServiceManager {
  private emailService: EmailService | null = null;
  private template: ContactEmailTemplate;
  private config: EmailConfig | null = null;

  constructor() {
    this.template = new ContactEmailTemplate();
  }

  private getConfigInternal(): EmailConfig {
    if (!this.config) {
      this.config = {
        fromEmail: process.env.FROM_EMAIL || "noreply@petstore-demo.com",
        toEmail: process.env.CONTACT_EMAIL || "contact@petstore-demo.com",
        service: "resend",
        apiKey: process.env.RESEND_API_KEY || "",
      };
    }
    return this.config;
  }

  private getEmailService(): EmailService {
    if (!this.emailService) {
      const config = this.getConfigInternal();
      this.emailService = this.createEmailService(config);
    }
    return this.emailService;
  }

  private createEmailService(config: EmailConfig): EmailService {
    switch (config.service) {
      case "resend":
        return new ResendAdapter(config);
      // Ajouter d'autres services ici si nécessaire
      // case 'nodemailer':
      //   return new NodemailerAdapter(config);
      // case 'sendgrid':
      //   return new SendGridAdapter(config);
      default:
        throw new Error(`Service d'email non supporté: ${config.service}`);
    }
  }

  async sendContactEmail(
    data: ContactRequest
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // Générer l'email avec le template
      const emailData = this.template.generateContactEmail(data);

      // Envoyer l'email
      const result = await this.getEmailService().sendEmail(emailData);

      if (result.success) {
        console.log("Email de contact envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'email:", result.error);
      }

      return result;
    } catch (error) {
      console.error("Erreur dans sendContactEmail:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      };
    }
  }

  async sendTestEmail(): Promise<{ success: boolean; error?: string }> {
    try {
      const emailData = this.template.generateTestEmail();
      return await this.getEmailService().sendEmail(emailData);
    } catch (error) {
      console.error("Erreur dans sendTestEmail:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      };
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      return await this.getEmailService().verifyConnection();
    } catch (error) {
      console.error("Erreur lors de la vérification de connexion:", error);
      return false;
    }
  }

  getConfig(): EmailConfig {
    const config = this.getConfigInternal();
    return { ...config };
  }
}

// Instance singleton
export const emailService = new EmailServiceManager();

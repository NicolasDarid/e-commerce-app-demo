import { Resend } from "resend";
import { EmailService, EmailData, EmailConfig } from "../types";

export class ResendAdapter implements EmailService {
  private resend: Resend;
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
    this.resend = new Resend(config.apiKey);
  }

  async sendEmail(
    data: EmailData
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const result = await this.resend.emails.send({
        from: data.from || this.config.fromEmail,
        to: [data.to],
        subject: data.subject,
        html: data.html,
        text: data.text,
      });

      if (result.error) {
        console.error("Resend error:", result.error);
        return { success: false, error: result.error.message };
      }

      console.log("Email sent successfully via Resend:", result.data?.id);
      return { success: true };
    } catch (error) {
      console.error("Resend sendEmail error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      // Test simple en essayant de récupérer les domaines
      await this.resend.domains.list();
      return true;
    } catch (error) {
      console.error("Resend connection test failed:", error);
      return false;
    }
  }
}

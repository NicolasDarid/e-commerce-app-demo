// Types pour le système d'email modulaire

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  commentaire?: string;
  recaptcha: string;
}

export interface CartItem {
  id: number;
  name: string;
  image: string;
  category: string;
  quantity: number;
  price: number;
  poids?: string;
  selectedFormat?: {
    poids: string;
    price: number;
  };
}

export interface ContactRequest {
  formData: ContactFormData;
  cart: CartItem[];
  total: number;
  recaptchaToken: string;
}

export interface EmailService {
  sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }>;
  verifyConnection(): Promise<boolean>;
}

export interface EmailConfig {
  fromEmail: string;
  toEmail: string;
  service: "resend" | "nodemailer" | "sendgrid";
  apiKey: string;
  fallbackService?: string;
}

export interface EmailTemplate {
  generateContactEmail(data: ContactRequest): EmailData;
  generateTestEmail(): EmailData;
}

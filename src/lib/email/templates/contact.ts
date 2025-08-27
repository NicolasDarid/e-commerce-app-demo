import { EmailTemplate, ContactRequest, EmailData } from "../types";

export class ContactEmailTemplate implements EmailTemplate {
  generateContactEmail(data: ContactRequest): EmailData {
    const { formData, cart, total } = data;

    const cartItemsHtml = cart
      .map((item) => {
        const price = item.selectedFormat?.price ?? item.price;
        const poids = item.selectedFormat?.poids ?? item.poids;
        const itemTotal = price * item.quantity;

        return `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div>
                <div style="font-weight: 600; color: #1f2937;">${
                  item.name
                }</div>
                <div style="font-size: 14px; color: #6b7280;">${
                  item.category
                }</div>
                ${
                  poids
                    ? `<div style="font-size: 14px; color: #6b7280;">Format: ${poids}</div>`
                    : ""
                }
              </div>
            </div>
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
            ${item.quantity}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">
            €${price.toFixed(2)}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">
            €${itemTotal.toFixed(2)}
          </td>
        </tr>
      `;
      })
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle demande de commande - PetStore Demo</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        
        <!-- En-tête -->
        <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🐕 PetStore Demo</h1>
          <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Nouvelle demande de commande</p>
        </div>

        <!-- Informations client -->
        <div style="background: #f9fafb; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 20px;">👤 Informations client</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Nom :</td>
              <td style="padding: 8px 0; color: #1f2937;">${formData.nom} ${
      formData.prenom
    }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Téléphone :</td>
              <td style="padding: 8px 0; color: #1f2937;">${
                formData.telephone
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Adresse :</td>
              <td style="padding: 8px 0; color: #1f2937;">${
                formData.adresse
              }</td>
            </tr>
            ${
              formData.commentaire
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #374151;">Commentaire :</td>
              <td style="padding: 8px 0; color: #1f2937;">${formData.commentaire}</td>
            </tr>
            `
                : ""
            }
          </table>
        </div>

        <!-- Récapitulatif du panier -->
        <div style="background: #f9fafb; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 20px;">🛒 Récapitulatif du panier (${
            cart.length
          } articles)</h2>
          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 12px; text-align: left; font-weight: 600; color: #374151;">Produit</th>
                <th style="padding: 12px; text-align: center; font-weight: 600; color: #374151;">Qté</th>
                <th style="padding: 12px; text-align: right; font-weight: 600; color: #374151;">Prix unit.</th>
                <th style="padding: 12px; text-align: right; font-weight: 600; color: #374151;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
          </table>
          
          <!-- Total -->
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: right;">
            <div style="font-size: 18px; font-weight: 700; color: #1f2937;">
              Total : €${total.toFixed(2)}
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1e40af; margin-top: 0; font-size: 18px;">📞 Actions à effectuer</h3>
          <ol style="color: #1e40af; margin: 0; padding-left: 20px;">
            <li>Contacter le client au ${formData.telephone}</li>
            <li>Confirmer la commande et les modalités de livraison</li>
            <li>Organiser la préparation et l'expédition</li>
          </ol>
        </div>

        <!-- Pied de page -->
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
          <p>Cet email a été envoyé automatiquement depuis le site PetStore Demo</p>
          <p>Date : ${new Date().toLocaleString("fr-FR")}</p>
        </div>

      </body>
      </html>
    `;

    const text = `
Nouvelle demande de commande - PetStore Demo

INFORMATIONS CLIENT :
Nom : ${formData.nom} ${formData.prenom}
Téléphone : ${formData.telephone}
Adresse : ${formData.adresse}
${formData.commentaire ? `Commentaire : ${formData.commentaire}` : ""}

RÉCAPITULATIF DU PANIER (${cart.length} articles) :
${cart
  .map((item) => {
    const price = item.selectedFormat?.price ?? item.price;
    const poids = item.selectedFormat?.poids ?? item.poids;
    const itemTotal = price * item.quantity;
    return `- ${item.name} (${item.category})${poids ? ` - ${poids}` : ""} x${
      item.quantity
    } = €${itemTotal.toFixed(2)}`;
  })
  .join("\n")}

TOTAL : €${total.toFixed(2)}

ACTIONS À EFFECTUER :
1. Contacter le client au ${formData.telephone}
2. Confirmer la commande et les modalités de livraison
3. Organiser la préparation et l'expédition

Date : ${new Date().toLocaleString("fr-FR")}
    `;

    return {
      to: process.env.CONTACT_EMAIL || "contact@petstore-demo.com",
      subject: `🛒 Nouvelle commande - ${formData.nom} ${
        formData.prenom
      } (€${total.toFixed(2)})`,
      html,
      text,
    };
  }

  generateTestEmail(): EmailData {
    return {
      to: process.env.CONTACT_EMAIL || "contact@petstore-demo.com",
      subject: "🧪 Test email - PetStore Demo",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>Test de configuration email</h1>
          <p>Si vous recevez cet email, la configuration email fonctionne correctement !</p>
          <p>Date : ${new Date().toLocaleString("fr-FR")}</p>
        </div>
      `,
      text: `Test de configuration email - ${new Date().toLocaleString(
        "fr-FR"
      )}`,
    };
  }
}

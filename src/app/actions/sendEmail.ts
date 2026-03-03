"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: { name: string; email: string; message: string; company: string}) {
    
    if (formData.company) return;

    if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Missing required fields");
  }

    const {data, error} = await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
        to: "daniil.oliynyk@yahoo.ca",
        subject: `New email from ${formData.name}`,
        replyTo: formData.email,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}    

            ${formData.message}
        `,
    });

    if (error) {
        throw new Error(error.message);
    }

    return {success: true}

}
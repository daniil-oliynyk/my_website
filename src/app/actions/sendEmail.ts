"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: { name: string; email: string; message: string; company: string}) {
    
    if (data.company) return;

    await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
        to: "daniil.oliynyk@yahoo.ca",
        subject: `New email from ${data.name}`,
        replyTo: data.email,
        text: `
            Name: ${data.name}
            Email: ${data.email}

            ${data.message}
        `,
    });
}
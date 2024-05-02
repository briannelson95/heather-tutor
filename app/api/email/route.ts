import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
    try {
        const body = await request.json();
        const { emailData } = body;
        const { data, error } = await resend.emails.send({
            from: 'Website <hello@briannelson.dev>',
            to: 'dev.briannelson@gmail.com',
            subject: `New Message from Website`,
            // bcc: "breadbybrian95@gmail.com",
            reply_to: "dev.briannelson@gmail.com",
            react: EmailTemplate({ 
                firstName: emailData.firstName,
                lastName: emailData.lastName,
                email: emailData.email,
                phone: emailData.phone,
                subject: emailData.subject,
                message: emailData.message
            }) as React.ReactElement,
        });
    
        if (error) {
            return Response.json({ error });
        }
    
        return Response.json({ data });
    } catch (error) {
        return Response.json({ error });
    }
  }
'use server';
import nodemailer from 'nodemailer';
import { z } from 'zod'


const transporter = nodemailer.createTransport({
  host: 'mail.smtpbucket.com',
  port: 8025,
  secure: false,
});

{/*TODO terminar de pulir el envio de los mails */}
 
const schema = z.object({
  email: z.email(),
  name: z.string().min(2).max(100),
  message: z.string().min(10).max(1000),
})

export default async function sendEmail(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    message: formData.get('message'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 try {
   await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', error);
    return;
  }
  await transporter.sendMail({
    from: "emailcualquiera@example.com",
    to: "gonzaoca9@gmail.com",
    subject: "Contacto de " + validatedFields.data.name,
    text: validatedFields.data.message,
    html: '',
  });


  
  // Mutate data
}
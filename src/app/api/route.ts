import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: Request) {
  const body = await request.json();

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  const fromNumber = process.env.WHATSAPP_FORM_SUBMIT_FROM_NUMBER;
  const toPrimaryNumber = process.env.WHATSAPP_FORM_SUBMIT_TO_NUMBER;
  const toSecondaryNumber = process.env.WHATSAPP_FORM_SUBMIT_TO_SECONDARY_NUMBER;

  const sendMessage = async (toNumber: string) => await client.messages.create({
    body: `Новая заявка от ${body.name}:

Телефон: ${body.phone}
Почта: ${body.email || 'не указана'}

Дата и время заявки: ${new Date().toLocaleString("ru-RU", {timeZone: "Europe/Moscow", year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})} МСК     
    
Сообщение:

"${body.message}"
`,
      from: `whatsapp:${fromNumber}`,
      to: `whatsapp:${toNumber}`,
    });
  

  try {
    if (toPrimaryNumber) {
      const response = await sendMessage(toPrimaryNumber);
      console.log(`Message sent to whatsapp:${toPrimaryNumber}: ${response.sid}`);
    }
    if (toSecondaryNumber) {
      const response = await sendMessage(toSecondaryNumber);
      console.log(`Message sent to whatsapp:${toSecondaryNumber}: ${response.sid}`);
    }

    return NextResponse.json({ success: true, status: 200 });
   
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
    return NextResponse.json({ success: false, status: 500 });
  }

}

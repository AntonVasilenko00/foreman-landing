import { NextResponse } from 'next/server';
import axios from 'axios';

export const getFormSubmitBodyMessage = async (body: any) => `Новая заявка от ${body.name}:
Телефон: ${body.phone}
Почта: ${body.email || 'не указана'}

Дата и время заявки: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow", year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })} МСК     
    
Сообщение:
"${body.message}"
`

// Notify telegram bot to send a message to the chat
export async function POST(request: Request) {
  const body = await request.json();

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatIds = process.env.TELEGRAM_CHAT_IDS?.split(',')

  if (!chatIds) {
    console.error('No chat ids provided');
    return NextResponse.json({ success: false, status: 500 });
  }

  const message = await getFormSubmitBodyMessage(body);

  try {
    for (const chatId of chatIds) {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
    }
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
    return NextResponse.json({ success: false, status: 500 });
  }

  return NextResponse.json({ success: true, status: 200 });
}
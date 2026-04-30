import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { conversation, inputLanguage } = await req.json();

        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        const TEXT =
            (process.env.CHAT_BOT_TEXT1 || '') +
            (process.env.CHAT_BOT_TEXT2 || '');

        const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    {
                        role: 'user',
                        parts: [
                            {
                                text: `Стартирай на езика ${inputLanguage} и ако не е български преведи.
                                Ако е unknown преведи на езика от първата дума, също ако е число и няма текст пиши на английски, ако има текст пиши на езика на който е написан текста.
                                ${TEXT}`,
                            },
                        ],
                    },
                    ...conversation,
                ],
            }),
        });
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        );
    }
}

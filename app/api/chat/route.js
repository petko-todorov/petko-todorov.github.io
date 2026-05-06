// import { NextResponse } from 'next/server';

// export async function POST(req) {
//     try {
//         const { conversation, inputLanguage } = await req.json();

//         const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
//         const GEMINI_MODEL = process.env.GEMINI_MODEL;
//         const SYSTEM_PROMPT =
//             (process.env.CHAT_BOT_TEXT1 || '') +
//             (process.env.CHAT_BOT_TEXT2 || '') +
//             (process.env.CHAT_BOT_TEXT3 || '');

//         const FINAL_SYSTEM_INSTRUCTION = `
// ${SYSTEM_PROMPT}

// LANGUAGE LOGIC:
// - Detect input language: ${inputLanguage}.
// - If language is 'unknown', respond in the language of the first word.
// - If the input is just a number, respond in English.
// - Always match the user's language unless specified otherwise.
// `;

//         const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
//         const response = await fetch(GEMINI_URL, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 system_instruction: {
//                     parts: [{ text: FINAL_SYSTEM_INSTRUCTION }],
//                 },
//                 contents: conversation,
//             }),
//         });
//         const data = await response.json();

//         return NextResponse.json(data);
//     } catch (error) {
//         console.error('Server error:', error);
//         return NextResponse.json(
//             { error: 'Internal Server Error' },
//             { status: 500 },
//         );
//     }
// }

import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { conversation, inputLanguage } = await req.json();

        const API_KEY = process.env.GROQ_API_KEY;
        const MODEL = process.env.GROQ_MODEL;
        const SYSTEM_PROMPT =
            (process.env.CHAT_BOT_TEXT1 || '') +
            (process.env.CHAT_BOT_TEXT2 || '') +
            (process.env.CHAT_BOT_TEXT3 || '');

        const FINAL_SYSTEM_INSTRUCTION = `
${SYSTEM_PROMPT}

LANGUAGE LOGIC:
- Detect input language: ${inputLanguage}.
- If language is 'unknown', respond in the language of the first word.
- If the input is just a number, respond in English.
- Always match the user's language unless specified otherwise.
`;

        const formattedMessages = [
            { role: 'system', content: FINAL_SYSTEM_INSTRUCTION },
            ...conversation.map((msg) => ({
                role: msg.role === 'model' ? 'assistant' : 'user',
                content: msg.parts[0].text,
            })),
        ];

        const response = await fetch(
            'https://api.groq.com/openai/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: formattedMessages,
                    temperature: 0.7,
                    max_tokens: 1024,
                }),
            },
        );

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

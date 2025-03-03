import React, { useState, useEffect, useRef } from "react";
import Draggable from 'react-draggable';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const TEXT = import.meta.env.VITE_CHAT_BOT_TEXT1 + import.meta.env.VITE_CHAT_BOT_TEXT2;

function ChatBot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    const nodeRef = useRef(null);

    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const detectLanguage = (text) => {
        const englishRegex = /[a-zA-Z]/g;
        const bulgarianRegex = /[а-яА-Я]/g;

        const englishChars = (text.match(englishRegex) || []).length;
        const bulgarianChars = (text.match(bulgarianRegex) || []).length;

        if (englishChars === 0 && bulgarianChars === 0) {
            return "unknown";
        }
        return englishChars > bulgarianChars ? "english" : "bulgarian";
    };

    const formatUrls = (text) => {
        if (text.includes("<a href=")) {
            return text;
        }

        const urlRegex = /https?:\/\/[^\s<>'"()]+(?:\([^\s<>'"()]*\)|[^\s<>'"(),.]*)*/g;

        return text.replace(urlRegex, (url) => {
            const cleanUrl = url.replace(/[.,;:!?)]$/, '');
            const punctuation = url.length > cleanUrl.length ? url.slice(-1) : '';

            return `<a href='${cleanUrl}' target='_blank' class='text-blue-500 hover:text-red-500 hover:underline'>${cleanUrl}</a>${punctuation}`;
        });
    };

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        const inputLanguage = detectLanguage(input);

        const updatedConversation = [
            ...conversation,
            { role: "user", parts: [{ text: input }] }
        ];
        setConversation(updatedConversation);

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: "user",
                                parts: [{
                                    text: `Стартирай на езика ${inputLanguage} и ако не е български преведи.
                                    Ако е unknown преведи на езика от първата дума
                                    също ако е число пиши на английски
                                    ${TEXT}`
                                }]
                            },
                            ...updatedConversation
                        ]
                    })
                }
            );
            const data = await response.json();
            const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error processing request.";

            const formattedResponse = formatUrls(aiResponse);

            setConversation([
                ...updatedConversation,
                { role: "model", parts: [{ text: aiResponse }] }
            ]);

            setMessages([
                ...messages,
                userMessage,
                { sender: "bot", text: formattedResponse }
            ]);
        } catch (error) {
            console.error("API error:", error);
            const errorMessage = inputLanguage === "bulgarian"
                ? "Възникна грешка при обработката."
                : "An error occurred while processing your request."
            setMessages([...messages, userMessage, { sender: "bot", text: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Draggable nodeRef={nodeRef} handle=".drag-handle">
            <div
                ref={nodeRef}
                id="messages-container"
                className="mx-auto mt-0 flex flex-col fixed bottom-20 right-10 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md h-[500px] bg-white p-0 rounded-3xl shadow-lg z-50"
            >
                <div className="drag-handle cursor-pointer">
                    <h1 className="text-xl font-bold m-3 text-center select-none">
                        PersonalBot Chat
                    </h1>
                </div>
                <div className="overflow-y-auto flex-grow border p-2 rounded bg-gray-100">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-2 my-1 rounded ${msg.sender === "bot" ? "bg-blue-200 text-left" : "bg-green-200 text-left"}`}>
                            <div className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end items-center" : "items-center"}`}>
                                {msg.sender === "bot" ? (
                                    <>
                                        <img src="./src/assets/bot.jpg" alt="Bot" className="w-10 h-10 rounded-full select-none" />
                                        <div
                                            dangerouslySetInnerHTML={{ __html: msg.text }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span className="max-w-xs break-words">{msg.text}</span>
                                        <img src="./src/assets/user.jpg" alt="User" className="w-10 h-10 rounded-full select-none" />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                    {loading && <p className="flex items-center gap-1"><img src="./src/assets/loading.gif" alt="Loading" className="h-6 pb-0" /> Generating...</p>}
                    <div ref={messagesEndRef} />
                </div>

                <div className="m-2 flex">
                    <form
                        action=""
                        onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                        className="flex w-full"
                    >
                        <input
                            type="text"
                            className="flex-grow p-2 border rounded-xl"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button className="ml-0 px-4 py-2 text-white rounded" onClick={sendMessage}>
                            <img src="./src/assets/send.png" alt="" className="w-6" />
                        </button>
                    </form>
                </div>
            </div>
        </Draggable>
    );
}

export default ChatBot;
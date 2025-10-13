import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import botImage from '../assets/bot.jpg';
import userImage from '../assets/user.jpg';
import sendImage from '../assets/send.png';
import loadingGif from '../assets/loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const TEXT =
    import.meta.env.VITE_CHAT_BOT_TEXT1 + import.meta.env.VITE_CHAT_BOT_TEXT2;

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

function ChatBot({
    messages,
    setMessages,
    conversation,
    setConversation,
    setModalOpen,
    modalPosition,
    setModalPosition,
}) {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const nodeRef = useRef(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        inputRef.current?.focus();
    }, [modalPosition]);

    const detectLanguage = (text) => {
        const englishRegex = /[a-zA-Z]/g;
        const bulgarianRegex = /[а-яА-Я]/g;

        const englishChars = (text.match(englishRegex) || []).length;
        const bulgarianChars = (text.match(bulgarianRegex) || []).length;

        if (englishChars === 0 && bulgarianChars === 0) {
            return 'unknown';
        }
        return englishChars > bulgarianChars ? 'english' : 'bulgarian';
    };

    const formatUrls = (text) => {
        if (text.includes('<a href=')) {
            return text;
        }

        const urlRegex =
            /https?:\/\/[^\s<>'"()]+(?:\([^\s<>'"()]*\)|[^\s<>'"(),.]*)*/g;

        return text.replace(urlRegex, (url) => {
            const cleanUrl = url.replace(/[.,;:!?)]$/, '');
            const punctuation =
                url.length > cleanUrl.length ? url.slice(-1) : '';

            return `<a href='${cleanUrl}' target='_blank' class='text-blue-500 hover:text-red-500 hover:underline'>${cleanUrl}</a>${punctuation}`;
        });
    };

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');
        setLoading(true);

        const inputLanguage = detectLanguage(input);

        const updatedConversation = [
            ...conversation,
            { role: 'user', parts: [{ text: input }] },
        ];
        setConversation(updatedConversation);

        try {
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
                        ...updatedConversation,
                    ],
                }),
            });
            const data = await response.json();
            const aiResponse =
                data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                'Error processing request.';

            const formattedResponse = formatUrls(aiResponse);

            setConversation([
                ...updatedConversation,
                { role: 'model', parts: [{ text: aiResponse }] },
            ]);

            setMessages([
                ...messages,
                userMessage,
                { sender: 'bot', text: formattedResponse },
            ]);
        } catch (error) {
            console.error('API error:', error);
            const errorMessage =
                inputLanguage === 'bulgarian'
                    ? 'Възникна грешка при обработката.'
                    : 'An error occurred while processing your request.';
            setMessages([
                ...messages,
                userMessage,
                { sender: 'bot', text: errorMessage },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".drag-handle"
            position={{ x: modalPosition.x, y: modalPosition.y }}
            onDrag={(e, data) => setModalPosition({ x: data.x, y: data.y })}
        >
            <div
                ref={nodeRef}
                id="messages-container"
                className="mx-auto mt-0 flex flex-col fixed top-40 right-32 w-[90%] max-w-md h-[500px] bg-white rounded-3xl shadow-lg z-50 max-lg:top-28 max-lg:bottom-0 max-lg:left-0 max-lg:right-0"
            >
                <div className="drag-handle cursor-pointer flex justify-center items-center">
                    <h1 className="text-xl font-bold m-3 select-none flex-grow text-center">
                        PersonalBot Chat
                    </h1>
                    <FontAwesomeIcon
                        onClick={() => setModalOpen(false)}
                        onTouchStart={() => setModalOpen(false)}
                        icon={faCircleXmark}
                        className="text-red-500 text-3xl mr-6"
                    />
                </div>
                <div className="overflow-y-auto flex-grow border p-2 rounded bg-gray-100">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 my-1 rounded ${
                                msg.sender === 'bot'
                                    ? 'bg-blue-200 text-left'
                                    : 'bg-green-200 text-left'
                            }`}
                        >
                            <div
                                className={`flex items-start space-x-2 ${
                                    msg.sender === 'user'
                                        ? 'justify-end items-center'
                                        : 'items-center'
                                }`}
                            >
                                {msg.sender === 'bot' ? (
                                    <>
                                        <img
                                            src={botImage}
                                            alt="Bot"
                                            className="w-10 h-10 rounded-full select-none"
                                        />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: msg.text,
                                            }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span className="max-w-xs break-words">
                                            {msg.text}
                                        </span>
                                        <img
                                            src={userImage}
                                            alt="User"
                                            className="w-10 h-10 rounded-full select-none"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <p className="flex items-center gap-1">
                            <img
                                src={loadingGif}
                                alt="Loading"
                                className="h-6 pb-0"
                            />{' '}
                            Generating...
                        </p>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="m-2 flex">
                    <form
                        action=""
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage();
                        }}
                        className="flex w-full"
                    >
                        <input
                            type="text"
                            ref={inputRef}
                            className="flex-grow p-2 border rounded-xl"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button
                            className="ml-0 px-4 py-2 text-white rounded"
                            onClick={sendMessage}
                        >
                            <img src={sendImage} alt="" className="w-6" />
                        </button>
                    </form>
                </div>
            </div>
        </Draggable>
    );
}

export default ChatBot;

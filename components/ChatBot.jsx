'use client';

import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '@/store/useStore'; 

const botImage = '/bot.jpg';
const userImage = '/user.jpg';
const sendImage = '/send.png';
const loadingGif = '/loading.gif';

export default function ChatBot({ setModalOpen }) {
    const {
        messages,
        conversation,
        setConversation,
        modalPosition,
        setModalPosition,
        addMessage,
    } = useStore();

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const nodeRef = useRef(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        if (isMounted && messages.length > 0) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
        }
    }, [isMounted]);

    useEffect(() => {
        if (isMounted) {
            inputRef.current?.focus();
        }
    }, [modalPosition, isMounted]);

    const detectLanguage = (text) => {
        const englishRegex = /[a-zA-Z]/g;
        const bulgarianRegex = /[а-яА-Я]/g;

        const englishChars = (text.match(englishRegex) || []).length;
        const bulgarianChars = (text.match(bulgarianRegex) || []).length;

        if (englishChars === 0 && bulgarianChars === 0) return 'unknown';
        return englishChars > bulgarianChars ? 'english' : 'bulgarian';
    };

    const formatUrls = (text) => {
        if (text.includes('<a href=')) return text;

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
        if (!input.trim() || loading) return;

        const userMessage = { sender: 'user', text: input };
        const inputLanguage = detectLanguage(input);

        addMessage(userMessage);

        const updatedConversation = [
            ...conversation,
            { role: 'user', parts: [{ text: input }] },
        ];

        setInput('');
        setLoading(true);
        setConversation(updatedConversation);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversation: updatedConversation,
                    inputLanguage: inputLanguage,
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

            addMessage({ sender: 'bot', text: formattedResponse });
        } catch (error) {
            console.error('API error:', error);
            const errorMessage =
                inputLanguage === 'bulgarian'
                    ? 'Възникна грешка при обработката.'
                    : 'An error occurred while processing your request.';
            addMessage({ sender: 'bot', text: errorMessage });
        } finally {
            setLoading(false);
        }
    };

    if (!isMounted) return null;

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".drag-handle"
            position={modalPosition}
            onDrag={(e, data) => setModalPosition({ x: data.x, y: data.y })}
        >
            <div
                ref={nodeRef}
                id="messages-container"
                className="font-sans mx-auto mt-0 flex flex-col fixed top-20 right-32 w-[90%] max-w-md h-125 bg-white rounded-3xl shadow-2xl z-50 max-lg:top-13 max-lg:bottom-0 max-lg:left-0 max-lg:right-0"
            >
                <div className="drag-handle cursor-move flex justify-center items-center text-black bg-white rounded-t-xl border-b">
                    <h1 className="text-xl font-bold m-3 select-none grow text-center">
                        PersonalBot Chat
                    </h1>
                    <FontAwesomeIcon
                        onClick={() => setModalOpen(false)}
                        icon={faCircleXmark}
                        className="text-red-500 text-3xl mr-6 cursor-pointer hover:text-red-600 transition-colors"
                    />
                </div>

                <div className="overflow-y-auto grow p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className="shrink-0">
                                    <Image
                                        src={
                                            msg.sender === 'bot'
                                                ? botImage
                                                : userImage
                                        }
                                        alt={msg.sender}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full shadow-sm"
                                    />
                                </div>
                                <div
                                    className={`p-3 rounded-2xl text-sm ${
                                        msg.sender === 'bot'
                                            ? 'bg-blue-100 text-gray-800 rounded-bl-none'
                                            : 'bg-green-100 text-gray-800 rounded-br-none'
                                    }`}
                                    dangerouslySetInnerHTML={
                                        msg.sender === 'bot'
                                            ? { __html: msg.text }
                                            : undefined
                                    }
                                >
                                    {msg.sender === 'user' ? msg.text : null}
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start items-center gap-2">
                            <Image
                                src={loadingGif}
                                alt="Loading"
                                width={24}
                                height={24}
                                className="h-6 w-auto"
                            />
                            <span className="text-xs text-gray-500 italic">
                                Generating...
                            </span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 bg-white text-black border-t rounded-b-3xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage();
                        }}
                        className="flex gap-2"
                    >
                        <input
                            type="text"
                            ref={inputRef}
                            className="grow p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="p-2 hover:scale-110 transition-transform disabled:opacity-50"
                        >
                            <Image
                                src={sendImage}
                                alt="Send"
                                width={24}
                                height={24}
                                className="w-6 h-auto"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </Draggable>
    );
}

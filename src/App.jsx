import './App.css'
import { useEffect, useState, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot';


function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [conversation, setConversation] = useState([]);

    return (
        <>
            <Home />
            <NavBar />
            <AboutMe />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />

            <button
                className="fixed z-50 bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                onClick={() => setModalOpen(prev => !prev)}
            >
                💬 ChatBot
            </button>

            {modalOpen && (
                <ChatBot
                    messages={messages}
                    setMessages={setMessages}
                    conversation={conversation}
                    setConversation={setConversation}
                />
            )}
        </>
    )
}

export default App;

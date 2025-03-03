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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

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
                className="fixed z-50 top-5 right-2 max-lg:left-2 max-lg:right-auto bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                onClick={() => setModalOpen(prev => !prev)}
            >
                <span className='lg:block max-lg:hidden'>💬 ChatBot</span>
                <FontAwesomeIcon icon={faRobot} className="lg:hidden" />
            </button>

            {modalOpen && (
                <ChatBot
                    messages={messages}
                    setMessages={setMessages}
                    conversation={conversation}
                    setConversation={setConversation}
                    setModalOpen={setModalOpen}
                    modalPosition={modalPosition}
                    setModalPosition={setModalPosition}
                />
            )}
        </>
    )
}

export default App;

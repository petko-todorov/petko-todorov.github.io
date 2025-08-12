import './App.css';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

import chatBotGif from '../src/assets/chatbot.gif';

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
        {
            sender: 'bot',
            text: 'Hello! 👋 I’m Petko’s virtual assistant. What would you like to know about him?',
        },
    ]);
    const [conversation, setConversation] = useState([]);

    return (
        <>
            <Home />
            <NavBar
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                modalPosition={modalPosition}
                setModalPosition={setModalPosition}
                messages={messages}
                setMessages={setMessages}
                conversation={conversation}
                setConversation={setConversation}
            />
            <AboutMe />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
        </>
    );
}

export default App;

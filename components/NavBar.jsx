'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBolt,
    faLayerGroup,
    faCodeBranch,
    faCertificate,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import ChatBot from './ChatBot';

const chatBotImage = '/chatbot/chatbot.gif';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: [0.6] },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="sticky top-0 bg-[#002036] shadow-2x z-40">
                <div className="md:hidden flex justify-between p-4 text-[#00E5FF]">
                    <button
                        className="px-0 py-0 bg-transparent shadow-none select-none"
                        onClick={() => setModalOpen((prev) => !prev)}
                    >
                        <span className="lg:block text-wh">
                            <Image
                                src={chatBotImage}
                                alt="Test"
                                width={20}
                                height={20}
                                className="w-10"
                                unoptimized
                            />
                        </span>
                    </button>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                <div className="hidden md:flex uppercase font-bold flex-row justify-between items-center w-full h-20 px-10">
                    <ul className="flex flex-1 justify-center gap-7">
                        <li
                            className={`hover:cursor-pointer select-none ${
                                activeSection === 'home' ? 'text-[#00E5FF]' : ''
                            }`}
                        >
                            <Link
                                to="home"
                                smooth={true}
                                duration={700}
                                offset={-70}
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                                <span>Home</span>
                            </Link>
                        </li>

                        <li
                            className={`hover:cursor-pointer select-none ${
                                activeSection === 'skills'
                                    ? 'text-[#00E5FF]'
                                    : ''
                            }`}
                        >
                            <Link
                                to="skills"
                                smooth={true}
                                duration={700}
                                offset={-70}
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                </div>
                                Skills
                            </Link>
                        </li>

                        <li
                            className={`hover:cursor-pointer select-none ${
                                activeSection === 'projects'
                                    ? 'text-[#00E5FF]'
                                    : ''
                            }`}
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                duration={700}
                                offset={-70}
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                </div>
                                Projects
                            </Link>
                        </li>

                        <li
                            className={`hover:cursor-pointer select-none ${
                                activeSection === 'certificates'
                                    ? 'text-[#00E5FF]'
                                    : ''
                            }`}
                        >
                            <Link
                                to="certificates"
                                smooth={true}
                                duration={700}
                                offset={-70}
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faCertificate} />
                                </div>
                                Certificates
                            </Link>
                        </li>

                        <li
                            className={`hover:cursor-pointer select-none ${
                                activeSection === 'contact'
                                    ? 'text-[#00E5FF]'
                                    : ''
                            }`}
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                duration={700}
                                offset={-70}
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="ml-auto">
                        <button
                            className="text-white py-0 bg-transparent select-none"
                            onClick={() => setModalOpen((prev) => !prev)}
                        >
                            <span className="lg:block">
                                <Image
                                    src={chatBotImage}
                                    width={11}
                                    height={11}
                                    alt="Chatbot"
                                    className="w-11"
                                    unoptimized
                                />
                            </span>
                        </button>
                    </div>
                    <div className="bg-linear-to-r from-transparent via-[#00E5FF]/30 to-transparent h-px bottom-0 absolute left-0 w-full"></div>
                </div>

                {/* hamburger */}
                <ul
                    className={`md:hidden ${
                        isOpen ? 'flex' : 'hidden'
                    } flex-col items-end px-6 pb-5 gap-6 text-[#64748B] uppercase font-bold`}
                >
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={700}
                            offset={-320}
                            onClick={() => setOpen(false)}
                        >
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={700}
                            offset={-300}
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="certificates"
                            smooth={true}
                            duration={700}
                            offset={-350}
                            onClick={() => setOpen(false)}
                        >
                            Certificates
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={700}
                            offset={-300}
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {modalOpen && <ChatBot setModalOpen={setModalOpen} />}
        </>
    );
}

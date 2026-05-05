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
    const [isOpen, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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

                <div className="relative hidden md:flex uppercase font-bold flex-row justify-between items-center w-full h-20 px-10">
                    <div></div>

                    <ul className="flex flex-1 justify-center gap-7">
                        <li className="hover:cursor-pointer select-none text-white">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                // offset={-70}
                                duration={700}
                                activeClass="text-[#00E5FF]"
                                className="transition-colors"
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                                Home
                            </Link>
                        </li>

                        <li className="hover:cursor-pointer select-none text-white">
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                activeClass="text-[#00E5FF]"
                                className="transition-colors"
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                </div>
                                Skills
                            </Link>
                        </li>

                        <li className="hover:cursor-pointer select-none text-white">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                activeClass="text-[#00E5FF]" // Библиотеката сама ще сложи този цвят
                                className="transition-colors"
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                </div>
                                Projects
                            </Link>
                        </li>

                        <li className="hover:cursor-pointer select-none text-white">
                            <Link
                                to="certificates"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                activeClass="text-[#00E5FF]"
                                className="transition-colors"
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faCertificate} />
                                </div>
                                Certificates
                            </Link>
                        </li>

                        <li className="hover:cursor-pointer select-none text-white">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                activeClass="text-[#00E5FF]"
                                className="transition-colors"
                            >
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="absolute right-10 flex items-center gap-2">
                        <a
                            href="/petko_todorov_cv.pdf"
                            download="petko_todorov_cv.pdf"
                            className="text-white text-xl py-2 px-6 border border-white rounded-md shadow-[0_0_2em_transparent] hover:bg-transparent hover:shadow-[0_0_0_white] hover:transition-all hover:text-[#00C7E3] hover:border-[#00C7E3] hover:duration-700 hover:ease-in-out duration-300 ease-in-out"
                        >
                            Download CV
                        </a>

                        <div
                            className="cursor-pointer"
                            onClick={() => setModalOpen((prev) => !prev)}
                        >
                            <Image
                                src={chatBotImage}
                                width={44}
                                height={44}
                                alt="Chatbot"
                                className="w-11"
                                unoptimized
                            />
                        </div>
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

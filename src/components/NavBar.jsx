import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'

function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setOpen] = useState(false);

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
            { threshold: [0.6] }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="sticky top-0 bg-white z-40">
                <div className="md:hidden flex justify-end p-4 text-[#FFB21F]">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                {/* <ul className="hidden md:flex uppercase font-bold text-[#888888] flex flex-row justify-center items-center gap-10 mb-15 h-20"> */}
                <ul className="hidden md:flex uppercase font-bold text-[#888888] flex-row justify-center items-center gap-10 mb-15 h-20">
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'home' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'about-me' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="about-me"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            About me
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'skills' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="skills"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Skills
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'projects' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Projects
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'certificates' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="certificates"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Certificates
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'contact' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* hamburger */}
                <ul className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col items-end px-6 pb-5 gap-6 text-[#888888] uppercase font-bold`}>
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'home' ? 'text-[#FFB21F]' : ''}`}
                    >
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
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'about-me' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="about-me"
                            smooth={true}
                            duration={700}
                            offset={-300}
                            onClick={() => setOpen(false)}
                        >
                            About me
                        </Link>
                    </li>
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'skills' ? 'text-[#FFB21F]' : ''}`}
                    >
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
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'projects' ? 'text-[#FFB21F]' : ''}`}
                    >
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
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'certificates' ? 'text-[#FFB21F]' : ''}`}
                    >
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
                    <li
                    // className={`hover:cursor-pointer select-none ${activeSection === 'contact' ? 'text-[#FFB21F]' : ''}`}
                    >
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
        </>
    );
}

export default NavBar;

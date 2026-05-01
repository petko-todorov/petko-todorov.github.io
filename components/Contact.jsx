'use client';

import { useState } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faMobileScreen,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Social from './Social';

const footerImage = '/footer-burgas.png';

function Contact() {
    const [showPhone, setShowPhone] = useState(false);

    const handlePhoneClick = () => {
        setShowPhone(true);
        navigator.clipboard.writeText('+359 898 75 00 67');
    };

    const data = [
        {
            first_row: 'Petko Todorov',
            second_row: (
                <>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[#81ECFF] bg-[#001d25] py-2.5 px-2 rounded-xl mr-2"
                    />
                    Burgas, Bulgaria
                </>
            ),
        },
        {
            first_row: 'Phone',
            second_row: (
                <>
                    <FontAwesomeIcon
                        icon={faMobileScreen}
                        className="text-[#81ECFF] bg-[#001d25] py-2.5 px-2 rounded-xl mr-2"
                    />
                    <span className="pr-2">
                        {showPhone ? (
                            <a
                                href="tel:+359898750067"
                                className="border-b border-transparent hover:border-[#81ECFF] transition-colors duration-300"
                            >
                                +359 898 75 00 67
                            </a>
                        ) : (
                            '+359 *** ** ** **'
                        )}
                    </span>
                    {!showPhone && (
                        <button
                            onClick={handlePhoneClick}
                            className="border border-neutral-400 px-2 py-1 rounded-lg text-sm"
                        >
                            Show
                        </button>
                    )}
                </>
            ),
        },
        {
            first_row: 'Email',
            second_row: (
                <>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-[#81ECFF] bg-[#001d25] py-2.5 px-2 rounded-xl mr-2"
                    />
                    <a
                        href="mailto:p.todorov1015@gmail.com"
                        className="border-b border-transparent hover:border-[#81ECFF] transition-colors duration-300"
                    >
                        p.todorov1015@gmail.com
                    </a>
                </>
            ),
        },
    ];

    return (
        <>
            <section id="contact" className="bg-[#001016] overflow-hidden">
                <div className="flex justify-center">
                    <h1
                        data-aos="fade-down"
                        className="text-5xl text-center text-[#BCEDFF] pt-12"
                    >
                        Contact
                    </h1>
                </div>

                <h2
                    className="text-lg text-slate-300 text-center py-5 pb-8"
                    data-aos="fade-up"
                >
                    Feel free to drop me a message!
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-10 mx-5">
                    <div data-aos="fade-right" className="mb-10 text-xl flex-">
                        {data.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-[#80B3C4] pt-10">
                                    {item.first_row}
                                </h1>
                                <h2 className="text-[#BCEDFF] flex items-center">
                                    {item.second_row}
                                </h2>
                            </div>
                        ))}
                    </div>

                    <Image
                        src={footerImage}
                        alt="burgas"
                        width={300}
                        height={300}
                        loading="eager"
                        data-aos="zoom-in"
                        className="w-[22%] max-lg:w-[35%] max-sm:w-[70%] h-[70%] rounded-2xl"
                    />
                </div>

                <div className="pb-16 w-2/3 mx-auto text-white border-b-2 border-neutral-400 border-dashed">
                    <Social className="pt-0" />
                </div>

                <footer className="text-[#BCEDFF] text-center py-5">
                    © Petko Todorov &nbsp;
                    <a
                        href=""
                        onClick={() => {
                            window.location.reload();
                        }}
                        className="text-[#00e5ff]"
                    >
                        2026
                    </a>
                </footer>
            </section>
        </>
    );
}

export default Contact;

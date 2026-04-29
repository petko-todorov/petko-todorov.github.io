'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import VantaBackground from './VantaBackground';
import Social from './Social';

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="relative min-h-screen w-full overflow-hidden text-white"
            >
                <div className="absolute inset-0 -z-20">
                    <VantaBackground />
                </div>

                <div className="absolute inset-0 backdrop-blur-[2px] -z-10 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center pb-20">
                    <div className="space-y-5">
                        <h1
                            data-aos="fade-left"
                            className="text-4xl font-bold uppercase"
                        >
                            Hi, I am
                            <span className="pl-2 text-transparent text-l bg-clip-text bg-linear-to-r from-white to-[#00E5FF]">
                                PETKO
                            </span>
                        </h1>

                        <h2
                            data-aos="fade-right"
                            className="text-3xl font-bold text-[#00E5FF] uppercase [text-shadow:0_0_2px_#00E5FF,0_0_1px_#00E5FF,0_0_2px_#00E5FF,0_0_1px_rgba(0,229,255,0.5)]"
                        >
                            Software Developer
                        </h2>
                        <h3
                            data-aos="fade-left"
                            className="text-xl text-[#dcdcdc] mx-auto w-11/12 lg:w-2/3"
                        >
                            Turning complex ideas into elegant digital
                            solutions. Specialized in building robust backends
                            and intuitive user interfaces.
                        </h3>
                    </div>

                    <Social />

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl pb-10 max-md:pb-2">
                        <Link
                            to="about-me"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="cursor-pointer"
                        >
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                fade
                                style={{
                                    '--fa-animation-duration': '2s',
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

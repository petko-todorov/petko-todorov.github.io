'use client';

import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const diplomaPythonWeb = '/certificates/small/diploma python web.png';
const diplomaPythonWebFull =
    '/certificates/full/Diploma for Python Web Developer.jpeg';
const programmingBasics = '/certificates/small/basic.png';
const programmingBasicsFull =
    '/certificates/full/Programming Basics - May 2022 - Certificate.jpeg';
const programmingFundamentals = '/certificates/small/fundamentals.png';
const programmingFundamentalsFull =
    '/certificates/full/Programming Fundamentals with Python - September 2022 - Certificate.jpeg';
const pythonAdvanced = '/certificates/small/advanced.png';
const pythonAdvancedFull =
    '/certificates/full/Python Advanced - January 2023 - Certificate.jpeg';
const pythonOOP = '/certificates/small/oop.png';
const pythonOOPFull =
    '/certificates/full/Python OOP - February 2023 - Certificate.jpeg';
const pythonWebBasics = '/certificates/small/basic_web.png';
const pythonWebBasicsFull =
    '/certificates/full/Python Web Basics - May 2023 - Certificate.jpeg';
const pythonWebFramework = '/certificates/small/python web framework.png';
const pythonWebFrameworkFull =
    '/certificates/full/Python Web Framework - June 2023 - Certificate.jpeg';
const htmlCss = '/certificates/small/html_css.png';
const htmlCssFull =
    '/certificates/full/HTML & CSS - September 2023 - Certificate.jpeg';
const jsFrontEnd = '/certificates/small/js front end.png';
const jsFrontEndFull =
    '/certificates/full/JS Front-End - October 2023 - Certificate.jpeg';
const angular = '/certificates/small/angular.png';
const angularFull =
    '/certificates/full/Angular - February 2024 - Certificate.jpeg';
const itCareerBoost = '/certificates/small/it career boost.png';
const itCareerBoostFull =
    '/certificates/full/IT Career Booster - October 2023 - Certificate.jpeg';
// import BlurText from './effects/BlurText';

function Certificates() {
    const certificates = [
        {
            link: diplomaPythonWeb,
            imgSrc: diplomaPythonWebFull,
            alt: 'Petko Todorov',
        },
        {
            link: programmingBasics,
            imgSrc: programmingBasicsFull,
            alt: 'Petko Todorov',
        },
        {
            link: programmingFundamentals,
            imgSrc: programmingFundamentalsFull,
            alt: 'Petko Todorov',
        },
        {
            link: pythonAdvanced,
            imgSrc: pythonAdvancedFull,
            alt: 'Petko Todorov',
        },
        {
            link: pythonOOP,
            imgSrc: pythonOOPFull,
            alt: 'Petko Todorov',
        },
        {
            link: pythonWebBasics,
            imgSrc: pythonWebBasicsFull,
            alt: 'Petko Todorov',
        },
        {
            link: pythonWebFramework,
            imgSrc: pythonWebFrameworkFull,
            alt: 'Petko Todorov',
        },
        {
            link: htmlCss,
            imgSrc: htmlCssFull,
            alt: 'Petko Todorov',
        },
        {
            link: jsFrontEnd,
            imgSrc: jsFrontEndFull,
            alt: 'Petko Todorov',
        },
        {
            link: angular,
            imgSrc: angularFull,
            alt: 'Petko Todorov',
        },
        {
            link: itCareerBoost,
            imgSrc: itCareerBoostFull,
            alt: 'Petko Todorov',
        },
    ];

    const splideRef = useRef(null);

    useEffect(() => {
        if (!splideRef.current) return;

        const splide = new Splide(splideRef.current, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 5,
            gap: '2rem',
            pagination: true,
            arrows: false,
            autoScroll: {
                speed: 0.8,
                pauseOnHover: false,
            },
            breakpoints: {
                1200: {
                    perPage: 3,
                    gap: '1rem',
                    padding: { left: '20%', right: '20%' },
                },
                768: {
                    perPage: 1,
                    gap: '1rem',
                    padding: { left: '20%', right: '20%' },
                },
                480: {
                    perPage: 1,
                    gap: '1rem',
                    padding: { left: '20%', right: '20%' },
                },
            },
        });

        splide.mount({ AutoScroll });

        return () => splide.destroy();
    }, []);

    return (
        <section id="certificates" className="bg-[#00283c] overflow-hidden">
            <h1
                className="text-5xl text-center text-[#BCEDFF] pt-20 pb-12"
                data-aos="fade-down"
            >
                Certificates
            </h1>

            <div ref={splideRef} className="splide" data-aos="fade-up">
                <div className="splide__track">
                    <ul className="splide__list">
                        {certificates.map((cert, index) => (
                            <li className="splide__slide" key={index}>
                                <a
                                    href={cert.imgSrc}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={cert.link}
                                        alt={cert.alt}
                                        className="w-full h-auto rounded-2xl shadow-md border-2 border-[#BCEDFF] brightness-90"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-16"></div>
        </section>
    );
}

export default Certificates;

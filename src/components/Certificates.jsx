import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import { useEffect } from 'react';
import diplomaPythonWeb from '../assets/certificates/small/diploma python web.png';
import diplomaPythonWebFull from '../assets/certificates/full/Diploma for Python Web Developer.jpeg';
import programmingBasics from '../assets/certificates/small/basic.png';
import programmingBasicsFull from '../assets/certificates/full/Programming Basics - May 2022 - Certificate.jpeg';
import programmingFundamentals from '../assets/certificates/small/fundamentals.png';
import programmingFundamentalsFull from '../assets/certificates/full/Programming Fundamentals with Python - September 2022 - Certificate.jpeg';
import pythonAdvanced from '../assets/certificates/small/advanced.png';
import pythonAdvancedFull from '../assets/certificates/full/Python Advanced - January 2023 - Certificate.jpeg';
import pythonOOP from '../assets/certificates/small/oop.png';
import pythonOOPFull from '../assets/certificates/full/Python OOP - February 2023 - Certificate.jpeg';
import pythonWebBasics from '../assets/certificates/small/basic_web.png';
import pythonWebBasicsFull from '../assets/certificates/full/Python Web Basics - May 2023 - Certificate.jpeg';
import pythonWebFramework from '../assets/certificates/small/python web framework.png';
import pythonWebFrameworkFull from '../assets/certificates/full/Python Web Framework - June 2023 - Certificate.jpeg';
import htmlCss from '../assets/certificates/small/html_css.png';
import htmlCssFull from '../assets/certificates/full/HTML & CSS - September 2023 - Certificate.jpeg';
import jsFrontEnd from '../assets/certificates/small/js front end.png';
import jsFrontEndFull from '../assets/certificates/full/JS Front-End - October 2023 - Certificate.jpeg';
import angular from '../assets/certificates/small/angular.png';
import angularFull from '../assets/certificates/full/Angular - February 2024 - Certificate.jpeg';
import itCareerBoost from '../assets/certificates/small/it career boost.png';
import itCareerBoostFull from '../assets/certificates/full/IT Career Booster - October 2023 - Certificate.jpeg';
import BlurText from './effects/BlurText';

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

    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'loop',
            perPage: 1,
            pagination: true, // Ensure pagination is enabled
            autoScroll: {
                speed: 1,
            },
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                },
            },
        });

        splide.mount({ AutoScroll });

        return () => splide.destroy();
    }, []);

    return (
        <section id="certificates" className="bg-[#333333]">
            <div className="flex justify-center">
                <BlurText
                    text="Certificates"
                    animateBy="letters"
                    delay={50}
                    className="text-4xl text-white font-semibold text-center py-10 select-none"
                />
            </div>

            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list certifications w-[66%] max-lg:w-[75%] max-md:w[77%] max-sm:w-[90%]">
                        {certificates.map((certificate, index) => (
                            <li className="splide__slide" key={index}>
                                <a href={certificate.imgSrc} target="_blank">
                                    <img
                                        src={certificate.link}
                                        alt={certificate.alt}
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

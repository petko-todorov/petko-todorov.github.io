import aboutImage from '../assets/about1.gif';

function AboutMe() {
    return (
        <>
            <section id="about-me" className="bg-[#969696] py-[6rem] w-auto">
                <h1
                    className="text-[#222222] text-5xl text-center pb-10 select-none"
                    data-aos="fade-down"
                >
                    Who Am I
                </h1>

                <div className="max-sm:w-11/12 max-md:w-[90%] max-lg:w-[95%] max-xl:w-[90%] w-5/6 mx-auto flex max-lg:flex-wrap gap-5 justify-center">
                    <div className="w-1/2 max-md:w-11/12 max-lg:w-11/12">
                        <div data-aos="fade-right">
                            <h2 className="text-[#222222] text-2xl font-extrabold">
                                Exploring the World with Python
                            </h2>

                            <div className="text-white text-lg">
                                <p className="py-5 indent-3">
                                    My journey as a developer has equipped me
                                    with the skills to design and develop
                                    exceptional web applications that merge
                                    functionality with aesthetics. I bring a
                                    unique blend of technical expertise and
                                    creative vision to every project, ensuring
                                    innovative and user-focused solutions.
                                </p>
                                <p className="indent-3">
                                    As a certified Python and Django developer,
                                    with proficiency in JavaScript and React, I
                                    am passionate about crafting dynamic and
                                    interactive user experiences. My expertise
                                    extends to building visually captivating and
                                    responsive designs using HTML, CSS
                                    (Tailwind), and modern JavaScript frameworks
                                    like React. I strive to ensure every project
                                    not only performs flawlessly but also
                                    delivers a seamless and engaging user
                                    experience.
                                </p>
                            </div>
                            <a
                                href="/cv/petko_todorov_cv.pdf"
                                download="petko_todorov_cv.pdf"
                                className="flex justify-center pt-5"
                            >
                                <button className="text-white text-xl py-2 px-6 border border-white rounded-md shadow-[0_0_5em_transparent] hover:bg-transparent hover:shadow-[0_0_0_white] hover:transition-all hover:duration-1000 hover:ease-in-out">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <img
                            src={aboutImage}
                            className="w-full max-w-[500px] max-sm:hidden h-auto object-contain max-md:order-2 rounded-2xl"
                            alt="About Me"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;

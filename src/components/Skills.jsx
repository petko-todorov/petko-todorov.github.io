import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPython,
    faReact,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <>
            <section id="skills" className="bg-[#454C63]">
                <h1
                    className="text-5xl text-white text-center pt-16 pb-12 select-none"
                    data-aos="zoom-in"
                >
                    Skills
                </h1>

                <div className="flex justify-center space-x-32 text-white max-lg:flex-col max-lg:items-center max-lg:space-x-0 max-lg:space-y-12">
                    <div className="flex flex-col items-center w-1/3 max-lg:w-[70%]">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <span className="text-5xl border-dashed border-b-2 border-yellow-500 w-[80px] flex justify-center pb-5">
                                <FontAwesomeIcon icon={faPython} />
                            </span>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-xl font-bold pt-8 pb-3">
                                Python
                            </h2>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="150"
                        >
                            <p className="text-center">
                                Experienced in Python and Django, building
                                scalable web applications and dynamic backends.
                                Proficient in crafting efficient solutions for
                                various needs.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/3 max-lg:w-[70%]">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <span className="text-5xl border-dashed border-b-2 border-yellow-500 w-[80px] flex justify-center pb-5">
                                <FontAwesomeIcon icon={faReact} />
                            </span>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-xl font-bold pt-8 pb-3">
                                React
                            </h2>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="150"
                        >
                            <p className="text-center">
                                Skilled in React, creating dynamic and
                                responsive UIs with reusable components for
                                seamless user experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-32 pt-12 pb-24 text-white max-lg:flex-col max-lg:items-center max-lg:space-x-0 max-lg:space-y-12">
                    <div className="flex flex-col items-center w-1/3 max-lg:w-[70%]">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <span className="text-5xl border-dashed border-b-2 border-yellow-500 w-[80px] flex justify-center pb-5">
                                <FontAwesomeIcon icon={faCode} />
                            </span>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-xl font-bold pt-8 pb-3">
                                Coding
                            </h2>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="150"
                        >
                            <p className="text-center">
                                Proficient in web development, combining backend
                                expertise with frontend skills in HTML, CSS, and
                                JavaScript to build robust, user-friendly
                                applications.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/3 max-lg:w-[70%]">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <span className="text-5xl border-dashed border-b-2 border-yellow-500 w-[80px] flex justify-center pb-5">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-xl font-bold pt-8 pb-3">
                                Git and Github
                            </h2>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="150"
                        >
                            <p className="text-center">
                                Experienced with Git and GitHub for version
                                control and efficient team collaboration,
                                ensuring clean and organized code management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;

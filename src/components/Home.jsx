import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Social from './Social';

function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('/src/assets/home.jpg')] h-screen w-auto bg-cover bg-center bg-no-repeat flex-col items-center justify-center text-center text-white pt-[16vh]"
            >
                <div data-aos="zoom-in">
                    <h1 className="text-3xl font-bold uppercase pb-5">
                        I am Petko
                    </h1>
                    <h2 className="text-3xl font-bold text-[#FFB21F] uppercase pb-7">
                        Junior Software Developer
                    </h2>
                    <h3 className="text-xl text-[#dcdcdc] mx-auto w-11/12 lg:w-2/3 pb-10">
                        I am Petko Todorov, certified Python and Django
                        developer and creative designer. Passionate about
                        design, code, and innovation. Crafting dynamic
                        experiences with an eye for aesthetics.
                    </h3>

                    <Social />
                </div>

                <div className="absolute bottom-0 left-1/2 transform text-4xl pb-10 max-md:pb-2">
                    <Link
                        to="about-me"
                        smooth={true}
                        duration={700}
                        offset={-70}
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
            </section>
        </>
    );
}

export default Home;

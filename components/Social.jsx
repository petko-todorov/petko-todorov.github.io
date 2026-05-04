import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function Social() {
    return (
        <section className="pt-14 text-2xl flex justify-center">
            <ul className="flex justify-center space-x-3">
                <li data-aos="zoom-in" data-aos-delay="100">
                    <a
                        href="https://www.facebook.com/petko0/"
                        target="_blank"
                        className="hover:text-[#1F91FF] duration-300 border-2 border-[#BCEDFF] w-15 h-12 rounded-xl flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>

                <li data-aos="zoom-in" data-aos-delay="300">
                    <a
                        href="https://github.com/petko-todorov/"
                        target="_blank"
                        className="hover:text-[#181717] duration-300 border-2 border-[#BCEDFF] w-15 h-12 rounded-xl flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>

                <li data-aos="zoom-in" data-aos-delay="500">
                    <a
                        href="https://www.linkedin.com/in/petko0/"
                        target="_blank"
                        className="hover:text-[#0A66C2] duration-300 border-2 border-[#BCEDFF] w-15 h-12 rounded-xl flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>

                <li data-aos="zoom-in" data-aos-delay="700">
                    <a
                        href="https://discordapp.com/users/petko007/"
                        target="_blank"
                        className="hover:text-[#5662EC] duration-300 border-2 border-[#BCEDFF] w-15 h-12 rounded-xl flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </li>
            </ul>
        </section>
    );
}

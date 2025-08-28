import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faDiscord,
} from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <div className="pt-14 text-2xl flex justify-center">
            <ul className="flex justify-center space-x-3">
                <a
                    href="https://www.facebook.com/petko0/"
                    target="_blank"
                    className="hover:text-[#1F91FF] duration-300 cursor-target p-1"
                >
                    <div data-aos="zoom-in" data-aos-delay="100">
                        <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </li>
                    </div>
                </a>

                <a
                    href="https://github.com/petko-todorov/"
                    target="_blank"
                    className="hover:text-[#181717] duration-300 cursor-target p-1"
                >
                    <div data-aos="zoom-in" data-aos-delay="300">
                        <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faGithub} />
                        </li>
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/petko0/"
                    target="_blank"
                    className="hover:text-[#0A66C2] duration-300 cursor-target p-1"
                >
                    <div data-aos="zoom-in" data-aos-delay="500">
                        <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                    </div>
                </a>

                <a
                    href="https://discordapp.com/users/zenox#4522/"
                    target="_blank"
                    className="hover:text-[#5662EC] duration-300 cursor-target p-1"
                >
                    <div data-aos="zoom-in" data-aos-delay="700">
                        <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faDiscord} />
                        </li>
                    </div>
                </a>
            </ul>
        </div>
    );
}

export default Social;

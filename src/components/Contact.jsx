import footerGif from '../assets/footer_gif.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Social from './Social';

function Contact() {
    const data = [
        {
            first_row: 'Petko Todorov',
            second_row: (
                <>
                    <FontAwesomeIcon icon={faLocationDot} /> Burgas, Bulgaria
                </>
            ),
        },
        {
            first_row: 'Phone',
            second_row: (
                <>
                    <FontAwesomeIcon icon={faMobileScreen} /> +359 898 75 00 67
                </>
            )
        },
        {
            first_row: 'Email',
            second_row: (
                <>
                    <FontAwesomeIcon icon={faEnvelope} /> p.todorov1015@gmail.com
                </>
            )
        },
    ]

    return (
        <>
            <section
                id="contact"
                className="bg-[#2D2D2D] pt-16"
            >


                <div data-aos="fade-down">
                    <h1 className="text-4xl text-white text-center gap-8">
                        Contact
                    </h1>

                    <h2 className="text-lg text-slate-300 text-center py-5 pb-8">
                        Feel free to drop me a message!
                    </h2>
                </div>

                <div className='flex justify-center flex-wrap gap-10 mx-5'>
                    <div data-aos="fade-right" className='py-3 text-xl'>
                        {data.map((item, index) => (
                            <div key={index}>
                                <h1 className='text-neutral-400 pt-10'>
                                    {item.first_row}
                                </h1>
                                <h2 className='text-white'>
                                    {item.second_row}
                                </h2>
                            </div>
                        ))}
                    </div>

                    <img
                        src={footerGif}
                        alt=""
                        data-aos="fade-left"
                        className='w-[35%] max-sm:w-[70%] h-auto rounded-2xl'
                    />
                </div>

                <div className='pb-16 w-2/3 mx-auto text-white border-b-2 border-neutral-400 border-dashed'>
                    <Social className='pt-0' />
                </div>

                <footer className='text-neutral-300 text-center py-5'>
                    © Petko Todorov &nbsp;
                    <a href="#" class="reload" title="Reload" className='text-[#FDB01D]'>
                        2025
                    </a>
                </footer>
            </section>
        </>
    )
};

export default Contact;
import chatAppProject from '../assets/projects/chat_app_react_preview.png';
import angularProject from '../assets/projects/angular_project.png';
import quizWebProject from '../assets/projects/quiz_web_project.png';
import tetrisProject from '../assets/projects/tetris_project.png';
import fishermanProject from '../assets/projects/fisherman_project.png';
import basicRpgGameProject from '../assets/projects/basic_rpg_game_project.png';
import weatherPythonProject from '../assets/projects/weather_python_project.png';
import createNewPyJsFilesProject from '../assets/projects/make_new_file_project.png';
import bullsAndCowsProject from '../assets/projects/bulls_and_cows_project.png';
import BlurText from './effects/BlurText';

function Projects() {
    const projects = [
        {
            src: chatAppProject,
            title: 'ChatApp React',
            githubLink: 'https://github.com/petko-todorov/ChatApp-React',
        },
        {
            src: angularProject,
            title: 'Destination Spots',
            githubLink: 'https://github.com/petko-todorov/Destinations-spots',
        },
        {
            src: quizWebProject,
            title: 'Quiz App',
            githubLink: 'https://github.com/petko-todorov/Quiz-web-app',
        },
        {
            src: tetrisProject,
            title: 'Tetris',
            githubLink: 'https://github.com/petko-todorov/Tetris',
        },
        {
            src: fishermanProject,
            title: 'Fisherman Game',
            githubLink: 'https://github.com/petko-todorov/Fisherman-Game',
        },
        {
            src: basicRpgGameProject,
            title: 'Basic RPG',
            githubLink: 'https://github.com/petko-todorov/basic-rpg-game',
        },
        {
            src: weatherPythonProject,
            title: 'Weather',
            githubLink:
                'https://github.com/petko-todorov/Weather-python-project',
        },
        {
            src: createNewPyJsFilesProject,
            title: 'Create New PY/JS Files',
            githubLink: 'https://github.com/petko-todorov/make-new-py-js-files',
        },
        {
            src: bullsAndCowsProject,
            title: 'Bulls and Cows',
            githubLink: 'https://github.com/petko-todorov/Bulls-and-Cows',
        },
    ];

    return (
        <>
            <section id="projects">
                <div className="flex justify-center bg-white py-10">
                    <BlurText
                        text="Projects"
                        animateBy="letters"
                        delay={50}
                        className="text-4xl text-black text-center select-none cursor-target p-2"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden aspect-w-16 aspect-h-9"
                            data-aos="zoom-in"
                        >
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="w-full h-full object-cover brightness-[50%] group-hover:brightness-75 transition-all duration-300"
                            />
                            <div className="absolute inset-x-12 inset-y-8 hover:border-2 hover:border-[#FFB21F] duration-75 rounded-xl">
                                <a href={project.githubLink} target="_blank">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-white text-3xl max-md:text-5xl max-md:group-hover:text-6xl text-center brightness-125 font-semibold transition-all duration-300 transform translate-y-6 group-hover:translate-y-2 group-hover:text-[#FFB21F] group-hover:text-5xl relative">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-medium">
                                        Click to visit the project on GitHub.
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pb-6 bg-white"></div>
            </section>
        </>
    );
}

export default Projects;

import chatAppProject from '../assets/projects/chat_app_react_preview.png'
import angularProject from '../assets/projects/angular_project.png'
import quizWebProject from '../assets/projects/quiz_web_project.png'
import tetrisProject from '../assets/projects/tetris_project.png'
import fishermanProject from '../assets/projects/fisherman_project.png'
import basicRpgGameProject from '../assets/projects/basic_rpg_game_project.png'
import weatherPythonProject from '../assets/projects/weather_python_project.png'
import createNewPyJsFilesProject from '../assets/projects/make_new_file_project.png'
import bullsAndCowsProject from '../assets/projects/bulls_and_cows_project.png'

function Projects() {
    const projects = [
        { src: chatAppProject, title: 'ChatApp React', githubLink: 'https://github.com/petko940/ChatApp-React' },
        { src: angularProject, title: 'Destination Spots', githubLink: 'https://github.com/petko940/Destinations-spots' },
        { src: quizWebProject, title: 'Quiz App', githubLink: 'https://github.com/petko940/Quiz-web-app' },
        { src: tetrisProject, title: 'Tetris', githubLink: 'https://github.com/petko940/Tetris' },
        { src: fishermanProject, title: 'Fisherman Game', githubLink: 'https://github.com/petko940/Fisherman-Game' },
        { src: basicRpgGameProject, title: 'Basic RPG', githubLink: 'https://github.com/petko940/basic-rpg-game' },
        { src: weatherPythonProject, title: 'Weather', githubLink: 'https://github.com/petko940/Weather-python-project' },
        { src: createNewPyJsFilesProject, title: 'Create New PY/JS Files', githubLink: 'https://github.com/petko940/make-new-py-js-files' },
        { src: bullsAndCowsProject, title: 'Bulls and Cows', githubLink: 'https://github.com/petko940/Bulls-and-Cows' },
    ];

    return (
        <>
            <section id='projects'>

                <h1 className='text-4xl text-black text-center py-12 select-none'
                    data-aos="zoom-in"
                >
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden aspect-w-16 aspect-h-9"
                        >
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="w-full h-full object-cover brightness-[70%] group-hover:brightness-50 transition-all duration-300"
                            />
                            <a
                                href={project.githubLink}
                                target="_blank"
                            >
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
                    ))}
                </div>
                <div className="pb-6"></div>
            </section>
        </>
    );

};

export default Projects;

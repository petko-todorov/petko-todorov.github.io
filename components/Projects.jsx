'use client';

const chatAppProject = '/projects/chat_app_react_preview.png';
const angularProject = '/projects/angular_project.png';
const quizWebProject = '/projects/quiz_web_project.png';
const tetrisProject = '/projects/tetris_project.png';
const fishermanProject = '/projects/fisherman_project.png';
const basicRpgGameProject = '/projects/basic_rpg_game_project.png';
const weatherPythonProject = '/projects/weather_python_project.png';
const pyImageToolsProject = '/projects/py_image_tools_project.png';
const characterCounterProject = '/projects/charcter_counter_project.png';

function Projects() {
    const projects = [
        {
            src: chatAppProject,
            title: 'ChatApp React',
            githubLink: 'https://github.com/petko-todorov/ChatApp-React',
            description:
                'Real-time communication platform built with React and Socket.io.',
        },
        {
            src: quizWebProject,
            title: 'Quiz App',
            githubLink: 'https://github.com/petko-todorov/Quiz-web-app',
            description:
                'Test your knowledge in Python, JavaScript & HTML/CSS with a leaderboard and user profiles.',
        },
        {
            src: angularProject,
            title: 'Destination Spots',
            githubLink: 'https://github.com/petko-todorov/Destinations-spots',
            description: 'Location discovery web app developed using Angular.',
        },
        {
            src: pyImageToolsProject,
            title: 'Py Image Tools',
            githubLink: 'https://github.com/petko-todorov/py-image-tools',
            description:
                'Python desktop app for resizing, converting and optimizing images — single file or batch, with a live preview GUI.',
        },
        {
            src: characterCounterProject,
            title: 'Character Counter',
            githubLink: 'https://github.com/petko-todorov/character-counter',
            description:
                'React web app for instant text analysis — counts characters, words and sentences with a clean responsive UI.',
        },
        {
            src: tetrisProject,
            title: 'Tetris',
            githubLink: 'https://github.com/petko-todorov/Tetris',
            description:
                'Classic Tetris game built with Python and pygame, featuring a menu and high score tracking.',
        },
        {
            src: basicRpgGameProject,
            title: 'Basic RPG',
            githubLink: 'https://github.com/petko-todorov/basic-rpg-game',
            description:
                'Basic RPG game in Python with animated skills, damage indicators and a menu system.',
        },
        {
            src: fishermanProject,
            title: 'Fisherman Game',
            githubLink: 'https://github.com/petko-todorov/Fisherman-Game',
            description:
                'Python pygame fishing game — steer your boat, drop the hook and catch as many fish as you can.',
        },
        {
            src: weatherPythonProject,
            title: 'Weather',
            githubLink:
                'https://github.com/petko-todorov/Weather-python-project',
            description:
                'Desktop weather app written in Python with CustomTkinter, displaying live weather info for any city.',
        },
    ];

    return (
        <>
            <section id="projects" className="bg-[#001b25]">
                <h1
                    data-aos="fade-down"
                    className="text-5xl text-center text-[#BCEDFF] pt-16 pb-12"
                >
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-3 mx-auto px-4 lg:gap-3">
                    {projects.map((project, index) => (
                        <article
                            className="bg-[#122131] rounded-2xl overflow-hidden border border-gray-700"
                            key={index}
                            data-aos="fade-up"
                        >
                            <div className="aspect-16/10 relative overflow-hidden cursor-pointer group">
                                <img
                                    className="w-full h-full brightness-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50 "
                                    alt={project.alt}
                                    src={project.src}
                                />
                                <a
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-4 pb-2"
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-white text-2xl font-semibold tracking-tighter">
                                        Click to visit the project on GitHub
                                    </span>
                                </a>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg text-[#BCEDFF] font-headline font-bold mb-2">
                                    {project.title}
                                </h5>
                                <p className="text-on-surface-variant text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="h-9" />
            </section>
        </>
    );
}

export default Projects;

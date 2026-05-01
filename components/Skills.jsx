function Skills() {
    const skillGroups = [
        {
            title: 'Backend',
            description:
                'Focusing on server-side logic, database management and API development.',
            skills: [
                { name: 'Python', icon: 'python' },
                { name: 'Django', icon: 'django' },
                { name: 'NodeJS', icon: 'nodejs' },
                { name: 'NextJS', icon: 'nextjs' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'SQLite', icon: 'sqlite' },
            ],
        },
        {
            title: 'Frontend',
            description:
                'Building responsive and interactive user interfaces with a focus on modern design.',
            skills: [
                { name: 'JavaScript', icon: 'js' },
                { name: 'React', icon: 'react' },
                { name: 'HTML', icon: 'html' },
                { name: 'CSS', icon: 'css' },
                { name: 'Tailwind', icon: 'tailwindcss' },
                { name: 'MUI', icon: 'materialui' },
            ],
        },
        {
            title: 'Tools',
            description:
                'Streamlining development with professional tools for version control and efficiency.',
            skills: [
                { name: 'Git', icon: 'git' },
                { name: 'GitHub', icon: 'github' },
                { name: 'VSCode', icon: 'vscode' },
                { name: 'Docker', icon: 'docker' },
                { name: 'Postman', icon: 'postman' },
                { name: 'Linux', icon: 'linux' },
            ],
        },
    ];
    const backEndSkills = skillGroups[0];
    const frontEndSkills = skillGroups[1];
    const tools = skillGroups[2];

    return (
        <>
            <section id="skills" className="bg-[#00161D] overflow-hidden">
                <h1
                    data-aos="fade-down"
                    className="text-5xl text-center text-[#BCEDFF] pt-16 pb-12"
                >
                    My Skills
                </h1>

                <div className="flex flex-wrap justify-center mx-auto gap-7 text-center text-white">
                    <article
                        className="flex flex-col bg-[#122131] space-y-6 border-2 border-gray-700 py-8 px-10 rounded-xl md:w-2/5 lg:w-1/4 max-sm:w-2/3"
                        data-aos="fade-right"
                    >
                        <h2 className="text-[#00E5FF] text-2xl font-bold mb-2">
                            {backEndSkills.title}
                        </h2>
                        <p className="text-[#80B3C4] text-s mb-6 grow">
                            {backEndSkills.description}
                        </p>

                        <ul className="grid grid-cols-3 gap-8">
                            {backEndSkills.skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        className="w-11 h-11 mb-2"
                                        alt={skill.name}
                                    />
                                    <span className="text-sm font-semibold">
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article
                        className="flex flex-col bg-[#122131] space-y-6 border-2 border-gray-700 py-8 px-10 rounded-xl md:w-2/5 lg:w-1/4 max-sm:w-2/3"
                        data-aos="fade-up"
                    >
                        <h2 className="text-[#00E5FF] text-2xl font-bold mb-2">
                            {frontEndSkills.title}
                        </h2>
                        <p className="text-gray-400 text-sm mb-6 grow">
                            {frontEndSkills.description}
                        </p>

                        <ul className="grid grid-cols-3 gap-8">
                            {frontEndSkills.skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        className="w-11 h-11 mb-2"
                                        alt={skill.name}
                                    />
                                    <span className="text-sm font-semibold">
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article
                        className="flex flex-col bg-[#122131] space-y-6 border-2 border-gray-700 py-8 px-10 rounded-xl md:w-2/5 lg:w-1/4 max-sm:w-2/3"
                        data-aos="fade-left"
                    >
                        <h2 className="text-[#00E5FF] text-2xl font-bold mb-2">
                            {tools.title}
                        </h2>
                        <p className="text-gray-400 text-sm mb-6 grow">
                            {tools.description}
                        </p>

                        <ul className="grid grid-cols-3 gap-8">
                            {tools.skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        className="w-11 h-11 mb-2"
                                        alt={skill.name}
                                    />
                                    <span className="text-sm font-semibold">
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

                <div className="mb-35"></div>
            </section>
        </>
    );
}

export default Skills;

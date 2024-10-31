function Showcase() {
    const projects = [
        {
            title: "E-commerce App",
            description: "An interactive e-commerce app with secure checkout and real-time inventory updates.",
            image: "https://placehold.co/500x500",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            keyFeatures: [
                "Mobile responsiveness",
                "Real-time product updates",
                "Payment integration"
            ],
            liveLink: "https://your-live-demo-link.com",
            repoLink: "https://github.com/your-repo-link",
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio to showcase my skills, built with React and Tailwind CSS.",
            image: "https://placehold.co/500x500",
            techStack: ["React", "Tailwind CSS"],
            keyFeatures: [
                "Responsive design",
                "Dynamic project showcase"
            ],
            liveLink: "https://your-portfolio-link.com",
            repoLink: "https://github.com/your-portfolio-repo",
        },
        // Add more projects as needed
    ];

    return (
        <section className="projects-section py-10 px-4 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Projects</h2>
            <p className="text-gray-700 text-lg md:text-2xl mb-8">
                A selection of my work, highlighting practical solutions and creative problem-solving across web and mobile development.
            </p>
            {projects.map((project, index) => (
                <div key={index} className={`flex flex-col md:flex-row  justify-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-8`}>
                    {/* Project Image */}
                    <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/5 rounded-xl overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover" // Added classes for height and object fit
                        />
                    </div>
                    {/* Project Text */}
                    <div className={` md:w-1/2 px-4 md:flex flex-col ${index % 2 === 0 ? "items-start" : "items-end  md:text-end"}`}>
                        <h3 className="text-4xl font-black mb-2">{project.title}</h3>
                        <p className="mb-4 font-bold text-2xl text-gray-700">{project.description}</p>
                        <p className="text-lg font-semibold mb-1">Tech Stack: {project.techStack.join(", ")}</p>
                        <ul className="list-disc list-inside mb-4">
                            {project.keyFeatures.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <div>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a> |
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> GitHub Repo</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Showcase;

import { FaGamepad, FaLaptop, FaMusic } from "react-icons/fa";

function AboutMe() {
    return (
        <section className=" py-10 px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">🌟 About Me</h2>
            <p className="text-gray-700 text-lg md:text-xl mb-4">
                I'm a passionate <span className="font-semibold">Web and Mobile Developer</span> dedicated to crafting intuitive applications that deliver exceptional user experiences.
                My journey in technology drives me to explore various frameworks and tools, continuously enhancing my skills to create impactful projects.
            </p>

            <h3 className="text-2xl md:text-4xl font-bold mb-4">🎨 Hobbies & Interests</h3>
            <div className="flex flex-col  mb-6 pl-4 md:pl-12">
                <div className="flex items-center mb-2 md:mr-4">
                    <FaGamepad className="text-xl  mr-2" />
                    <div>

                        <p className="text-lg font-semibold">Gaming</p>
                        <p className="text-gray-700">A passion for exploring new worlds and understanding game mechanics.</p>

                    </div>
                </div>
                <div className="flex items-center mb-2 md:mr-4">
                    <FaLaptop className="text-xl  mr-2" />
                    <div>

                        <p className="text-lg font-semibold">Computers</p>
                        <p className="text-gray-700">A fascination with how software and hardware work together.</p>

                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <FaMusic className="text-xl  mr-2" />
                    <div>

                        <p className="text-lg font-semibold">Music</p>
                        <p className="text-gray-700">The perfect companion during coding sessions, sparking creativity!</p>

                    </div>
                </div>
            </div>

            <hr/>

            <div className="w-full flex items-center justify-center pt-10">
                <p className="w3/4 md:w-3/5 text-center text-3xl md:text-6xl font-extrabold">{"Tell me About your next project :)"}</p>
            </div>

        </section>
    );
}

export default AboutMe;

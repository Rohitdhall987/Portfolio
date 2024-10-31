import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiFlutter } from 'react-icons/si';

function Skills() {

    const skills = [
      { name: "Flutter", icon: <SiFlutter className="icon text-sky-400" />, level: "90%" }, // Changed to green
      { name: "HTML", icon: <FaHtml5 className="icon text-orange-600" />, level: "90%" },
      { name: "CSS", icon: <FaCss3Alt className="icon text-blue-500" />, level: "90%" },
      { name: "JavaScript", icon: <FaJs className="icon text-yellow-500" />, level: "90%" },
      { name: "React", icon: <FaReact className="icon text-sky-300" />, level: "60%" },
      { name: "Node.js", icon: <FaNodeJs className="icon text-green-600" />, level: "60%" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="icon text-sky-400" />, level: "60%" },
      { name: "Bootstrap", icon: <SiBootstrap className="icon text-purple-500" />, level: "70%" },
    ];
    



  return (
    <section className="skills-section  py-10 px-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 ">🚀 Skills & Expertise</h2>
      {/* <p className="text-gray-700 text-lg md:text-2xl mb-8">I’m skilled in some areas and familiar with others, ready to work across different tools and technologies</p> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center  bg-white hover:shadow-lg shadow-sm rounded-2xl text-center p-4 transition-all ">

              {skill.icon}
              <span className="text-xl font-semibold mt-2">{skill.name}</span>
              {/* <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`bg-blue-500 h-2 rounded-full`}
                  style={{
                    width: skill.level,
                  }}
                ></div> 
              </div>*/}

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import {
  Code2,
  FunctionSquare,
  Sigma,
  BarChart,
  Cpu,
  ClipboardList,
  Handshake,
  Trophy,
  Binary
} from "lucide-react";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const SkillsSection = () => {
  const skills: Record<string, Skill[]> = {
    "Programming Languages": [
      { name: "R Programming Language", icon: <FunctionSquare className="w-8 h-8" /> },
      { name: "Python Programming Experience", icon: <Code2 className="w-8 h-8" /> },
      { name: "SAS Programming Proficiency", icon: <Binary className="w-8 h-8" /> },
    ],
    "Mathematical Competencies": [
      { name: "Algebra and Geometry Proficiency", icon: <Sigma className="w-8 h-8" /> },
      { name: "Mathematical Modelling Expertise", icon: <BarChart className="w-8 h-8" /> },
    ],
    "Additional Skills": [
      { name: "Effective Multitasking Abilities", icon: <Cpu className="w-8 h-8" /> },
      { name: "Sales Negotiation Acumen", icon: <Handshake className="w-8 h-8" /> },
      { name: "Data Entry Proficiency", icon: <ClipboardList className="w-8 h-8" /> },
      { name: "Competitive Tennis Player", icon: <Trophy className="w-8 h-8" /> },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-600 drop-shadow-lg">
          Skills & Competencies
        </h2>

        <div className="space-y-20">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category}>
              <h3 className="text-3xl font-semibold text-center text-white mb-10 border-b-4 border-blue-600 inline-block pb-2 tracking-wide">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
                {skillsList.map((skill) => (
                  <div
                    key={skill.name}
                    className="w-full max-w-[180px] bg-gray-800 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition duration-300 rounded-xl p-6 text-center flex flex-col items-center space-y-4"
                  >
                    <div className="text-blue-600">{skill.icon}</div>
                    <span className="text-base font-medium leading-relaxed">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

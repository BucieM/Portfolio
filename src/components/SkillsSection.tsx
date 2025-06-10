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
      { name: "R", icon: <FunctionSquare className="w-8 h-8" /> },
      { name: "Python", icon: <Code2 className="w-8 h-8" /> },
      { name: "SAS", icon: <Binary className="w-8 h-8" /> },
    ],
    "Mathematical Skills": [
      { name: "Algebra & Geometry", icon: <Sigma className="w-8 h-8" /> },
      { name: "Mathematical Modelling", icon: <BarChart className="w-8 h-8" /> },
    ],
    "Soft Skills & Other": [
      { name: "Effective Multitasking", icon: <Cpu className="w-8 h-8" /> },
      { name: "Sales Negotiation", icon: <Handshake className="w-8 h-8" /> },
      { name: "Data Entry", icon: <ClipboardList className="w-8 h-8" /> },
      { name: "Tennis Player", icon: <Trophy className="w-8 h-8" /> },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-400 drop-shadow-md">
          Skills & Technologies
        </h2>

        <div className="space-y-20">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category}>
              <h3 className="text-3xl font-semibold text-center text-white mb-10 underline decoration-blue-400 decoration-4 underline-offset-8">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                {skillsList.map((skill) => (
                  <div
                    key={skill.name}
                    className="w-full max-w-[160px] bg-gray-800 border border-gray-700 hover:border-blue-500 hover:shadow-xl transition duration-300 rounded-2xl p-5 text-center flex flex-col items-center space-y-3"
                  >
                    <div className="text-blue-400">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
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

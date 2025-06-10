import {
  Code2,
  Database,
  GitBranch,
  Github,
  Globe,
  Layout,
  Server,
  Terminal,
  Cloud,
  Cpu,
  Shield,
  Binary
} from "lucide-react";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const SkillsSection = () => {
  const skills: Record<string, Skill[]> = {
    "Programming Languages": [
      { name: "Python", icon: <Code2 className="w-8 h-8" /> },
      { name: "JavaScript", icon: <Binary className="w-8 h-8" /> },
      { name: "Java", icon: <Terminal className="w-8 h-8" /> },
      { name: "C/C++", icon: <Cpu className="w-8 h-8" /> },
      { name: "SQL", icon: <Database className="w-8 h-8" /> },
      { name: "HTML/CSS", icon: <Layout className="w-8 h-8" /> },
    ],
    "Technologies & Tools": [
      { name: "Git/GitHub", icon: <Github className="w-8 h-8" /> },
      { name: "Cloud Computing", icon: <Cloud className="w-8 h-8" /> },
      { name: "Web Development", icon: <Globe className="w-8 h-8" /> },
      { name: "Cybersecurity", icon: <Shield className="w-8 h-8" /> },
      { name: "Database Systems", icon: <Server className="w-8 h-8" /> },
      { name: "Version Control", icon: <GitBranch className="w-8 h-8" /> },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skillsList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <div className="text-blue-400 mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

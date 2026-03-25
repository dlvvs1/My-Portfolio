import { Code2, Globe, Layout, Cpu, GitBranch, Terminal } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      category: "Programming Languages",
      icon: <Terminal className="text-blue-400" />,
      skills: [
        { name: "Python", level: "Advanced", desc: "OOP, Mini-projects" },
        { name: "C++", level: "Intermediate", desc: "Problem Solving" },
        { name: "C", level: "Intermediate", desc: "Core Logic" },
      ],
    },
    {
      category: "Web Development",
      icon: <Globe className="text-emerald-400" />,
      skills: [
        { name: "HTML5", level: "Advanced", desc: "Semantic Structure" },
        { name: "CSS3", level: "Advanced", desc: "Responsive Layouts" },
        { name: "JavaScript", level: "Advanced", desc: "DOM & Logic" },
      ],
    },
    {
      category: "Frontend & Tools",
      icon: <Layout className="text-purple-400" />,
      skills: [
        { name: "React.js", level: "Intermediate", desc: "Component Architecture" },
        { name: "Tailwind CSS", level: "Intermediate", desc: "Utility-first Design" },
        { name: "Vite", level: "Intermediate", desc: "Build Tooling" },
      ],
    },
    {
      category: "Core Concepts",
      icon: <Cpu className="text-amber-400" />,
      skills: [
        { name: "OOP", level: "Expert", desc: "Python-based logic" },
        { name: "DOM Manipulation", level: "Intermediate", desc: "JS Interactions" },
        { name: "UI Design", level: "Intermediate", desc: "Clean Layouts" },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <GitBranch className="text-pink-400" />,
      skills: [
        { name: "Git & GitHub", level: "Expert", desc: "Repo Management" },
        { name: "VS Code", level: "Expert", desc: "Primary Editor" },
        { name: "PostgreSQL", level: "Intermediate", desc: "Database" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      {/* Header */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-white">
          Technical <span className="text-blue-400">Toolkit</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my programming languages, frameworks, and core engineering concepts.
        </p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-3xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-900/50 rounded-xl group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
            </div>

            <div className="space-y-5">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{skill.name}</p>
                      <p className="text-[10px] text-slate-500 italic">{skill.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                      {skill.level}
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-900/50 rounded-full overflow-hidden border border-slate-700/30">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '80%' : '60%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
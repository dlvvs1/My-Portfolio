import { ExternalLink, Github, Code, Terminal, Layers, ArrowLeft } from "lucide-react";

export default function Projects({ scrollToHome }) {
  const projectData = [
    {
      title: "Personal Portfolio Website",
      tech: ["React", "Tailwind CSS", "Vite"],
      description: "A professional single-page application to showcase my technical journey.",
      features: ["Component-based structure", "Responsive design", "Smooth Navigation"],
      icon: <Layers className="text-blue-400" />,
      github: "https://github.com/dlvvs1/My-Portfolio",
      live: "https://dlvvs1.github.io/My-Portfolio/" // Your main portfolio live link
    },
    {
      title: "Calculator Web App(mini-project)",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A functional web application built with a focus on clean UI and JavaScript logic.",
      features: ["Basic Arithmetic", "Button-based input", "Clean UI"],
      icon: <Code className="text-emerald-400" />,
      github: "https://github.com/dlvvs1/Calculator",
      live: "https://dlvvs1.github.io/Calculator/" // The link we just fixed!
    },
    {
      title: "Age Calculator(mini-project)",
      tech: ["Python"],
      description: "Calculates exact age from a date of birth using the Python datetime module.",
      features: ["Leap year handling", "Date logic", "Precise output"],
      icon: <Terminal className="text-purple-400" />,
      github: "https://github.com/dlvvs1/mini-projects-python/blob/main/Calculate_Your_Age.py",
    },
    {
      title: "Until You Die(mini-project)",
      tech: ["Python"],
      description: "A console program estimating remaining lifetime based on age and assumed lifespan.",
      features: ["Console-based output", "Time calculation", "User interaction logic"],
      icon: <Terminal className="text-red-400" />,
      github: "https://github.com/dlvvs1/mini-projects-python/blob/main/until_u_die.py",
    },
    {
      title: "OOP Concepts",
      tech: ["Python"],
      description: "Implementation of Object-Oriented Programming principles like classes and attributes.",
      features: ["Encapsulation", "Method simulation", "Real-world concepts"],
      icon: <Code className="text-amber-400" />,
      github: "https://github.com/dlvvs1/OOPS",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Back to Home Button */}
      <div className="flex justify-start">
        <button 
          onClick={scrollToHome}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
      </div>

      <section className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-white">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-slate-400">Technical solutions ranging from web apps to Python logic tools.</p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="group p-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:border-blue-500/50 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-900/50 rounded-2xl">
                {project.icon}
              </div>
              <div className="flex gap-3">
                {/* GitHub Source Code Link */}
                <a href={project.github} target="_blank" rel="noreferrer" title="View Source Code" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                {/* Live Demo Link */}
                <a href={project.live} target="_blank" rel="noreferrer" title="View Live Demo" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-1 border-t border-slate-700/50 pt-4">
              {project.features.map((f, i) => (
                <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                  <div className="h-1 w-1 bg-blue-500 rounded-full" /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
import { User, Code2, GraduationCap, Github, FileText, MapPin, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-slate-400 flex items-center justify-center gap-2">
          <MapPin size={16} /> Dharmavaram, India 
        </p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Bio Card */}
        <div className="md:col-span-2 p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 text-blue-400">
            <User size={24} />
            <h3 className="text-xl font-semibold">Profile</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            I am a motivated second-year B.Tech student specializing in 
            <span className="text-white font-medium"> AI & ML</span>. 
            I am passionate about coding and continuously improving my problem-solving 
            skills through regular practice.
          </p>
          <p className="text-slate-400 leading-relaxed">
            With proficiency in Python, C, and C++, I have developed several 
            hands-on projects, ranging from logic-based Python games to structured 
            web layouts.
          </p>
        </div>

        {/* Quick Info Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-2 text-blue-400">
              <GraduationCap size={20} />
              <h4 className="font-bold">Education</h4>
            </div>
            <p className="text-sm text-slate-300 font-medium">B.Tech - CSE (AIML)</p>
            <p className="text-xs text-slate-500">CGPA: 9.39 (Sem 3)</p>
            <p className="text-xs text-slate-500 mt-2 italic">Sandip University </p>
          </div>

          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-2 text-indigo-400">
              <Code2 size={20} />
              <h4 className="font-bold">Core Skills</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "SQL", "HTML", "React"].map((skill) => (
                <span key={skill} className="text-xs bg-slate-900/50 px-2 py-1 rounded border border-slate-700 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Area: Professional Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
        {/* Resume Link */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <FileText size={20} /> Resume
        </a>

        {/* GitHub Link */}
        <a 
          href="https://github.com/dlvvs1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Github size={20} /> GitHub
        </a>

        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/dandu-leela-770a36352/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#0077b5] hover:bg-[#00669c] text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-blue-900/20"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>

    </div>
  );
}
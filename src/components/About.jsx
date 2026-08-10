import { User, Code2, GraduationCap, Github, FileText, MapPin, Linkedin, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-slate-400 flex items-center justify-center gap-2">
          <MapPin size={16} className="text-indigo-400" /> Dharmavaram, India 
        </p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Profile Photo Card */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="relative group p-2 rounded-3xl bg-gradient-to-br from-blue-500/30 via-slate-800/60 to-indigo-500/30 border border-slate-700/60 backdrop-blur-md shadow-2xl space-y-4 text-center">
            
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl aspect-square border border-slate-700/80 bg-slate-900">
              <img 
                src="./profile.jpg?v=1" 
                alt="Dandu Leela Vara Venkata Sai" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Profile Info Below Photo */}
            <div className="p-3 pt-0 space-y-1">
              <h3 className="text-lg font-bold text-white tracking-wide">
                Dandu Leela Vara Venkata Sai
              </h3>
              <p className="text-xs text-blue-400 font-semibold flex items-center justify-center gap-1">
                <Sparkles size={14} /> AI & ML Specialist
              </p>
            </div>

          </div>
        </div>

        {/* Bio Card & Details */}
        <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
          
          {/* Bio Card */}
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <User size={24} />
              <h3 className="text-xl font-bold text-white">Personal Profile</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-base">
              I am a motivated B.Tech student specializing in 
              <span className="text-white font-semibold"> Artificial Intelligence & Machine Learning</span> at Sandip University. 
              I am passionate about software engineering, frontend development, and continuously improving my problem-solving 
              skills through regular practice.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              With proficiency in Python, React, C++, and Web Technologies, I have developed hands-on projects ranging from 
              full-stack web applications to OpenCV computer vision simulations.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-1">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <GraduationCap size={20} />
                <h4 className="font-bold text-white text-sm">Education</h4>
              </div>
              <p className="text-sm text-slate-200 font-medium">B.Tech - CSE (AI & ML)</p>
              <p className="text-xs text-slate-400">CGPA: <strong className="text-emerald-400 font-bold">9.33</strong> (Sem 4)</p>
              <p className="text-xs text-slate-500 italic pt-1">Sandip University</p>
            </div>

            {/* Core Skills Card */}
            <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-2">
              <div className="flex items-center gap-3 text-indigo-400 mb-2">
                <Code2 size={20} />
                <h4 className="font-bold text-white text-sm">Core Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "React.js", "C++", "JavaScript", "Tailwind CSS", "OpenCV"].map((skill) => (
                  <span key={skill} className="text-xs font-medium bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Action Area: Professional Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
        {/* Resume Link */}
        <a 
          href="./resume.pdf" 
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
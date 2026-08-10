import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, ExternalLink, CheckCircle2, Eye, X, Download, Building2, Sparkles, UserCheck, FileText, Code2, Layers, BookOpen } from "lucide-react";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("certificate"); // "certificate" | "appreciation"

  const experienceData = {
    role: "Frontend Developer Intern",
    company: "Conquerors Software Technologies Pvt. Ltd.",
    location: "Hitech City, Hyderabad, India",
    duration: "9th Mar 2026 – 27th Mar 2026",
    type: "1 Month Paid Internship",
    academicYear: "2025-2026",
    mentors: "Emmanuel Suhas Sir & Gangadhar Reddy Kondappagari Sir",
    ceo: "Samson Sudhakar (Founder & CEO)",
    description: "Completed an intensive 1-month offline software development internship at Conquerors Software Technologies, gaining practical exposure to modern front-end development technologies, Agile methodologies, and industry workflows.",
    highlights: [
      "Built responsive, component-driven web interfaces using React.js, JSX, JavaScript (ES6+), and Tailwind CSS.",
      "Developed key internship projects including a Personal Portfolio Website, interactive Calculator Web App, and structured Timetable UI.",
      "Practiced Agile & Scrum frameworks for project tracking and learned industry software engineering standards.",
      "Mastered Git & GitHub version control workflows, repository management, branch operations (merge/rebase), and live deployment."
    ],
    skills: ["React.js", "JSX", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Git & GitHub", "Agile/Scrum"],
    projectsBuilt: [
      { name: "Personal Portfolio Website", tech: "React.js, Tailwind CSS, Vite, GitHub Pages" },
      { name: "Interactive Calculator Web App", tech: "HTML5, CSS Grid/Flexbox, JS Logic & Loops" },
      { name: "Timetable Layout Project", tech: "HTML5, CSS Layouts & Alignment" }
    ],
    documents: {
      certificate: {
        title: "Official Internship Certificate",
        subtitle: "Issued by Conquerors Software Technologies (27-03-2026)",
        url: "./internship-certificate.jpg?v=2",
        downloadName: "Conquerors_Software_Internship_Certificate.jpg"
      },
      appreciation: {
        title: "Letter of Appreciation",
        subtitle: "Issued by Samson Sudhakar, Founder & CEO (27-03-2026)",
        url: "./appreciation-letter.jpg?v=2",
        downloadName: "Conquerors_Software_Letter_of_Appreciation.jpg"
      }
    }
  };

  const openDocumentModal = (tabName) => {
    setActiveTab(tabName);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Briefcase size={14} /> Industrial Training & Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Work <span className="text-blue-400">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Practical industry experience gained through offline software development internship at Conquerors Software Technologies, Hyderabad.
        </p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      {/* Main Experience Card */}
      <div className="relative group p-8 md:p-10 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 shadow-2xl">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700/50">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-blue-500/30 rounded-2xl text-blue-400 shrink-0 shadow-inner">
              <Building2 size={36} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{experienceData.role}</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {experienceData.type}
                </span>
              </div>
              <p className="text-lg font-semibold text-blue-400 mt-1">
                {experienceData.company}
              </p>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                <MapPin size={12} className="text-indigo-400" /> {experienceData.location}
              </p>
            </div>
          </div>

          {/* Meta Info Badges */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 bg-slate-900/70 px-3 py-1.5 rounded-xl border border-slate-700/60">
              <Calendar size={14} className="text-blue-400" /> {experienceData.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/70 px-3 py-1.5 rounded-xl border border-slate-700/60">
              <UserCheck size={14} className="text-emerald-400" /> Mentors: {experienceData.mentors}
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 pt-6">
          
          {/* Left Column: Responsibilities & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileText size={16} className="text-blue-400" /> Overview & Objectives
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {experienceData.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400" /> Key Accomplishments & Learning
              </h4>
              <ul className="space-y-2.5">
                {experienceData.highlights.map((point, index) => (
                  <li key={index} className="text-xs md:text-sm text-slate-300 flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Projects Developed During Internship */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Code2 size={16} className="text-purple-400" /> Internship Projects Built
              </h4>
              <div className="grid gap-2">
                {experienceData.projectsBuilt.map((proj, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/30">
                    <span className="font-semibold text-white">{proj.name}</span>
                    <span className="text-[10px] text-blue-400 font-mono">{proj.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {experienceData.skills.map((skill) => (
                  <span key={skill} className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dual Certificate Showcase Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            
            {/* Certificate Card 1: Internship Certificate */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/70 space-y-3 hover:border-blue-500/50 transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400">
                  <Award size={18} />
                  <h4 className="font-bold text-xs md:text-sm text-white">Internship Certificate</h4>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>

              {/* Certificate Image Preview */}
              <div 
                onClick={() => openDocumentModal("certificate")}
                className="relative group/cert cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-slate-950 aspect-[16/11] flex items-center justify-center"
              >
                <img 
                  src={experienceData.documents.certificate.url} 
                  alt="Conquerors Software Internship Certificate" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover/cert:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                  <Eye size={24} className="text-blue-400 animate-pulse" />
                  <span className="text-xs font-bold">Click to View Certificate</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openDocumentModal("certificate")}
                  className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20"
                >
                  <Eye size={14} /> View Certificate
                </button>
                <a
                  href={experienceData.documents.certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs transition-colors border border-slate-700"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Certificate Card 2: Letter of Appreciation */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/70 space-y-3 hover:border-indigo-500/50 transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-400">
                  <FileText size={18} />
                  <h4 className="font-bold text-xs md:text-sm text-white">Letter of Appreciation</h4>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  CEO Recommendation
                </span>
              </div>

              {/* Letter Image Preview */}
              <div 
                onClick={() => openDocumentModal("appreciation")}
                className="relative group/cert cursor-pointer overflow-hidden rounded-xl border border-slate-700 bg-slate-950 aspect-[16/11] flex items-center justify-center"
              >
                <img 
                  src={experienceData.documents.appreciation.url} 
                  alt="Conquerors Software Letter of Appreciation" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover/cert:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                  <Eye size={24} className="text-indigo-400 animate-pulse" />
                  <span className="text-xs font-bold">Click to View Letter</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openDocumentModal("appreciation")}
                  className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20"
                >
                  <Eye size={14} /> View Letter
                </button>
                <a
                  href={experienceData.documents.appreciation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs transition-colors border border-slate-700"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Certificate & Document Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Document Switcher Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {experienceData.documents[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {experienceData.documents[activeTab].subtitle}
                  </p>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab("certificate")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "certificate"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Certificate
                </button>
                <button
                  onClick={() => setActiveTab("appreciation")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "appreciation"
                      ? "bg-indigo-600 text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Appreciation Letter
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 ml-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Image Display Container */}
            <div className="relative overflow-auto rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center max-h-[68vh] p-2">
              <img 
                src={experienceData.documents[activeTab].url} 
                alt={experienceData.documents[activeTab].title} 
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                Awarded to: <strong className="text-white">Dandu Leela Vara Venkata Sai</strong>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={experienceData.documents[activeTab].url}
                  download={experienceData.documents[activeTab].downloadName}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/20"
                >
                  <Download size={14} /> Download Document
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-colors border border-slate-700"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

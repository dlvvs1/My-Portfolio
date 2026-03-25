import { GraduationCap, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function Academics() {
  const btechStats = [
    { sem: "Semester 1", gpa: "7.95", status: "Completed" },
    { sem: "Semester 2", gpa: "8.04", status: "Completed" },
    { sem: "Semester 3", gpa: "9.39", status: "Completed" },
    { sem: "Semester 4", gpa: "Active", status: "In Progress" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Page Header */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-white">
          Academic <span className="text-blue-400">Timeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A detailed look at my educational journey and performance metrics across different levels of study.
        </p>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </section>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* Left Column: B.Tech Progress */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Bachelor of Technology</h3>
                <p className="text-blue-400 font-medium">CSE (AI & ML) • SNADIP University</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {btechStats.map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 group hover:border-blue-500/50 transition-colors">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.sem}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl font-bold text-white">{item.gpa}</span>
                    <span className="text-xs text-slate-400">SGPA</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className={`h-1.5 w-1.5 rounded-full ${item.status === 'In Progress' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                    <span className="text-[10px] text-slate-400">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-3">
              <Award className="text-blue-400 shrink-0" size={20} />
              <p className="text-sm text-slate-300 italic">
                Currently maintaining a strong upward trend in academic performance with a focus on AI technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Past Education */}
        <div className="md:col-span-5 space-y-6">
          {/* PUC Card */}
          <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-400">
                <BookOpen size={20} />
              </div>
              <span className="text-2xl font-black text-white">93.5%</span>
            </div>
            <h4 className="text-lg font-bold text-white">Pre-University (PUC)</h4>
            <p className="text-sm text-slate-400 mt-1">Narayana PU College</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 w-fit px-2 py-1 rounded-full">
              <CheckCircle2 size={12} /> Completed 2024
            </div>
          </div>

          {/* SSC Card */}
          <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400">
                <BookOpen size={20} />
              </div>
              <span className="text-2xl font-black text-white">79%</span>
            </div>
            <h4 className="text-lg font-bold text-white">Secondary School (SSC)</h4>
            <p className="text-sm text-slate-400 mt-1">Jeevan Jyothi High School</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 w-fit px-2 py-1 rounded-full">
              <CheckCircle2 size={12} /> Completed 2022
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
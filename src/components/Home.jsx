import { ArrowRight } from "lucide-react";

export default function Home({ scrollToProjects }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6 animate-in fade-in duration-1000">
      
      <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
        DANDU LEELA <span className="text-blue-400 font-extrabold">VARA VENKATA SAI</span>
      </h1>

      <p className="max-w-2xl text-slate-300 text-lg mb-4 leading-relaxed">
        I am a motivated second-year B.Tech student at <span className="text-white font-semibold">Sandip University</span>. 
        I specialize in <span className="text-blue-400 font-semibold">Artificial Intelligence and Machine Learning</span>.
      </p>

      <p className="max-w-xl text-slate-400 mb-8">
        I focus on building clean, responsive user interfaces and improving problem-solving skills through Python and React projects.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={scrollToProjects}
          className="group px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 transform hover:scale-105"
        >
          View Projects 
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
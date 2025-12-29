import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ArrowUpRight, Sun, Moon,
  Cpu, Database, Globe, Layers, Activity, 
  Cloud, Smartphone, PenTool, Code2, Server, Terminal, Box
} from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const experiences = [
    {
      company: "UnQue",
      role: "Backend Full-Stack Intern",
      period: "Present",
      icon: <Server className={isDark ? "text-neon" : "text-blue-600"} />,
      description: "Engineering secure role-based access control and scalable backend architectures."
    },
    {
      company: "Hacktoberfest 2025",
      role: "Contributor",
      period: "2025",
      icon: <Code2 className="text-purple-400" />,
      description: "Optimizing Golang backend services through advanced unit testing and CI/CD refinements."
    }
  ];

  const techStack = ["Node.js", "React Native", "AWS Cloud", "Docker", "Golang", "PostgreSQL", "MongoDB", "GitHub Actions"];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#020202] text-white" : "bg-white text-black"}`}>
      
      {isDark && (
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      )}

      <nav className={`p-6 fixed top-0 w-full z-50 flex justify-between items-center backdrop-blur-xl border-b ${isDark ? "border-white/5 bg-black/40" : "border-black/5 bg-white/40"}`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center font-black transition-all ${isDark ? "bg-black border-neon text-neon shadow-[0_0_15px_rgba(0,243,255,0.2)]" : "bg-white border-black text-black"}`}>
              S
            </div>
            <span className="font-mono text-sm tracking-tighter font-bold">Sidharth.sys</span>
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full border transition-all ${isDark ? "border-white/10 bg-white/5 text-yellow-400" : "border-black/10 bg-black/5 text-blue-600"}`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className="flex gap-6 items-center">
          <a href="https://linkedin.com/in/sidharth-chauhan" target="_blank" className="hover:opacity-70 transition-all text-current"><Linkedin size={18} /></a>
          <a href="https://github.com/sidharth-chauhan" target="_blank" className="hover:opacity-70 transition-all text-current"><Github size={18} /></a>
          <a href="mailto:chauhansiddharth71@gmail.com" className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${isDark ? "bg-white text-black hover:bg-neon" : "bg-black text-white hover:bg-blue-600"}`}>Connect</a>
        </div>
      </nav>

      <section className="pt-40 md:pt-60 pb-20 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8">
            <h1 className="text-7xl md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
              Backend <br /> 
              <span className={`text-transparent bg-clip-text ${isDark ? "bg-gradient-to-r from-neon via-blue-500 to-purple-600" : "bg-gradient-to-r from-blue-700 to-indigo-900"}`}>
                Architect.
              </span>
            </h1>
            <p className={`text-xl md:text-3xl max-w-2xl font-light leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Engineering <span className={`font-normal underline underline-offset-8 decoration-2 ${isDark ? "text-white decoration-neon" : "text-black decoration-blue-600"}`}>Full-Stack Ecosystems</span> and backend logic. Currently at <span className="italic font-bold">UnQue</span>.
            </p>
          </motion.div>
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
              <div className={`absolute inset-0 rounded-[3rem] blur-3xl transition-all duration-500 ${isDark ? "bg-neon/10" : "bg-blue-600/10"}`} />
              <img 
                src="https://github.com/sidharth-chauhan.png" 
                alt="Sidharth" 
                className={`relative z-10 w-full rounded-[2.5rem] border transition-all duration-700 ${isDark ? "border-white/10 grayscale hover:grayscale-0" : "border-black/10"}`} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className={`py-12 border-y overflow-hidden whitespace-nowrap transition-colors ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/5"}`}>
        <div className="flex animate-marquee gap-20">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className={`text-4xl md:text-7xl font-black uppercase tracking-tighter opacity-10 hover:opacity-100 transition-opacity cursor-default`}>{tech}</span>
          ))}
        </div>
      </div>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
           <div className={`p-8 rounded-[2rem] border ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
              <Terminal className="mx-auto mb-4 text-cyan-400" />
              <h3 className="font-mono text-[10px] uppercase mb-2 opacity-50">Backend</h3>
              <p className="font-bold">Node, Go, SQL</p>
           </div>
           <div className={`p-8 rounded-[2rem] border ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
              <Box className="mx-auto mb-4 text-purple-400" />
              <h3 className="font-mono text-[10px] uppercase mb-2 opacity-50">Cloud</h3>
              <p className="font-bold">AWS, Docker</p>
           </div>
           <div className={`p-8 rounded-[2rem] border ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
              <Smartphone className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-mono text-[10px] uppercase mb-2 opacity-50">Mobile</h3>
              <p className="font-bold">React Native</p>
           </div>
           <div className={`p-8 rounded-[2rem] border ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
              <Activity className="mx-auto mb-4 text-emerald-400" />
              <h3 className="font-mono text-[10px] uppercase mb-2 opacity-50">DevOps</h3>
              <p className="font-bold">GitHub Actions</p>
           </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className={`p-8 md:p-12 border rounded-[3rem] transition-all flex flex-col md:flex-row gap-10 ${isDark ? "border-white/5 bg-white/5 hover:bg-white/10" : "border-black/5 bg-black/[0.02] hover:bg-black/[0.05]"}`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border shadow-xl transition-colors ${isDark ? "bg-black border-neon/20" : "bg-white border-black/10"}`}>{exp.icon}</div>
              <div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">{exp.company}</h3>
                <p className={`font-mono text-[10px] uppercase tracking-[0.5em] mb-6 ${isDark ? "text-neon" : "text-blue-600"}`}>{exp.role} // {exp.period}</p>
                <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl font-light ${isDark ? "text-gray-400" : "text-gray-600"}`}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`py-32 px-6 border-t ${isDark ? "border-white/5 bg-black" : "border-black/5 bg-white"}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase text-gray-500 mb-6 tracking-[0.5em]">Education</h3>
            <p className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              NIT <br /> Agartala
            </p>
          </div>
          <div className={`font-mono text-sm md:text-right border-r-2 pr-6 ${isDark ? "text-gray-400 border-neon" : "text-gray-600 border-black"}`}>
            <p className={`font-bold uppercase ${isDark ? "text-white" : "text-black"}`}>Bachelor of Tech</p>
            <p>2023 — 2027</p>
          </div>
        </div>
      </section>

      <footer className={`py-40 px-6 transition-colors ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-8xl md:text-[15vw] font-black tracking-tighter leading-[0.7] mb-20 uppercase text-center md:text-left">Sidharth.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 font-black uppercase text-[10px] tracking-widest italic text-center md:text-left">
            <a href="https://linkedin.com/in/sidharth-chauhan" target="_blank" className="flex items-center gap-2 justify-center md:justify-start text-current">LinkedIn <ArrowUpRight size={14}/></a>
            <a href="https://github.com/sidharth-chauhan" target="_blank" className="flex items-center gap-2 justify-center md:justify-start text-current">GitHub <ArrowUpRight size={14}/></a>
            <a href="https://hashnode.com/@sidharth01" target="_blank" className="flex items-center gap-2 justify-center md:justify-start text-current">Hashnode <ArrowUpRight size={14}/></a>
            <a href="mailto:chauhansiddharth71@gmail.com" className="flex items-center gap-2 font-bold justify-center md:justify-start text-current">Email <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
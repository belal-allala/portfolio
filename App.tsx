
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Terminal, 
  Layout, 
  Database, 
  ShieldCheck, 
  BookOpen, 
  MessageSquare, 
  Send,
  User,
  Calendar,
  X,
  Briefcase,
  Code2,
  Cpu,
  Globe,
  Award,
  ChevronRight,
  Heart,
  Users,
  Zap,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Section } from './components/Section';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILLS, 
  EDUCATION, 
  LANGUAGES, 
  INTERESTS,
  SOFT_SKILLS 
} from './constants';

const TechLogo = ({ name }: { name: string }) => {
  const slugMap: Record<string, string> = {
    "Java": "java",
    "Spring Boot": "springboot",
    "Spring Security": "springsecurity",
    "PHP": "php",
    "Laravel": "laravel",
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "Angular": "angular",
    "React": "react",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Tailwind CSS": "tailwindcss",
    "HTML5": "html5",
    "CSS3": "css3",
    "Docker": "docker",
    "Jenkins": "jenkins",
    "SonarQube": "sonarqube",
    "JUnit 5": "junit5",
    "Mockito": "mockito",
    "Cypress": "cypress",
    "Git": "git",
    "Jira": "jira",
    "Postman": "postman",
    "Swagger": "swagger",
    "Vercel": "vercel",
    "Linux": "linux",
    "Python": "python",
    "Jakarta EE": "jakartaee",
    "Hibernate": "hibernate",
    "Maven": "apachemaven"
  };
  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '');
  return (
    <div className="flex flex-col items-center gap-2 group/logo p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300">
      <img 
        src={`https://cdn.simpleicons.org/${slug}`} 
        alt={name}
        className="w-8 h-8 filter brightness-90 group-hover/logo:brightness-110 group-hover/logo:scale-110 transition-all grayscale group-hover/logo:grayscale-0"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${name[0]}&background=1e293b&color=60a5fa&bold=true`;
        }}
      />
      <span className="text-[10px] font-medium text-slate-400 group-hover/logo:text-white transition-colors text-center">{name}</span>
    </div>
  );
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Bonjour ! Je suis l'assistant de Belal. Je peux vous parler de ses projets Full-Stack ou de sa recherche d'opportunité professionnelle. Comment puis-je vous aider ?" }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isThinking]);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput;
    setChatInput("");
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        Tu es l'assistant de Belal Allala. Belal est un Développeur Full-Stack (Java/Angular) formé à YouCode.
        Il est maintenant en RECHERCHE D'OPPORTUNITÉ PROFESSIONNELLE (Premier emploi).
        Il possède des soft skills solides comme l'intelligence collective et l'autonomie.
        Détails : ${JSON.stringify({SKILLS, PROJECTS, SOFT_SKILLS, PERSONAL_INFO})}
        Réponds de manière professionnelle, convaincante et concise.
      `;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: { systemInstruction, temperature: 0.7 }
      });
      setChatHistory(prev => [...prev, { role: 'bot', text: response.text || "Erreur technique." }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'bot', text: "Erreur de connexion." }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-400 bg-[#0f172a] selection:bg-blue-500/30 font-inter">
      <nav className="fixed top-0 w-full z-40 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="doc/youcode.png" 
              alt="YouCode" 
              className="h-6 opacity-90 brightness-150"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="h-6 w-px bg-slate-700 mx-2"></div>
            <span className="text-xl font-black text-white tracking-tighter uppercase italic">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-400 transition-colors">Profil</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#soft-skills" className="hover:text-blue-400 transition-colors">Soft Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a>
          </div>
          <a
            href={`https://wa.me/212689948144?text=Bonjour%20Belal,%20je%20souhaite%20vous%20contacter.`}
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Embaucher
          </a>
        </div>
      </nav>

      <section id="about" className="pt-48 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-widest uppercase shadow-lg shadow-emerald-500/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            Disponible pour opportunités
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            FULL-STACK <br/>
            <span className="text-gradient italic">ENGINEER.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex gap-4">
              <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" className="p-5 rounded-3xl bg-slate-800/50 hover:bg-slate-700 transition-all border border-slate-700 shadow-xl group">
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="p-5 rounded-3xl bg-slate-800/50 hover:bg-slate-700 transition-all border border-slate-700 shadow-xl group">
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Contact direct</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white font-black text-lg hover:text-blue-400 transition-colors tracking-tight">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="relative group lg:ml-auto animate-in fade-in zoom-in duration-1000">
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 opacity-20 blur-[100px] group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-80 h-80 md:w-[450px] md:h-[550px] rounded-[60px] overflow-hidden border-4 border-slate-800 p-2 bg-slate-900 shadow-3xl">
             <img 
              src="doc/Generated Image March 16, 2025 - 10_43PM.png.jpeg" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-[52px] group-hover:scale-105 transition-all duration-1000 ease-out"
              onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/belal-pro/800/1000"; }}
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-3xl border-white/5 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-all">
              <p className="text-white font-black text-xl mb-1 uppercase tracking-tighter">Belal Allala</p>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Ready for Professional Insertion</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="skills" title="Technical Expertise">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="space-y-8 animate-in fade-in duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.2em]">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full shadow-lg shadow-blue-500/40"></div>
                {cat.name}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {cat.skills.map((skill, i) => (
                  <TechLogo key={i} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="soft-skills" title="Soft Skills" className="bg-slate-900/40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOFT_SKILLS.map((skill, idx) => (
            <div key={idx} className="p-8 rounded-[40px] bg-slate-800/20 border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800/40 transition-all group">
              <div className="mb-6 p-4 rounded-2xl bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform h-fit w-fit">
                {idx === 0 && <Users className="w-6 h-6" />}
                {idx === 1 && <Zap className="w-6 h-6" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                {idx === 3 && <Lightbulb className="w-6 h-6" />}
                {idx === 4 && <Cpu className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter italic">{skill.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Professional Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group glass-card rounded-[48px] p-10 hover:bg-slate-800 transition-all duration-700 border-slate-800/50 flex flex-col h-full relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="mb-10 flex justify-between items-start">
                <div className="p-5 rounded-[24px] bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                  <Terminal className="w-8 h-8" />
                </div>
                <div className="flex gap-3">
                  <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" className="p-3 rounded-xl hover:bg-slate-700 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform italic">{project.title}</h3>
              <p className="text-slate-400 text-base mb-10 leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="mt-auto pt-8 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-black text-blue-500 bg-blue-500/5 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-500/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-24">
        <div className="space-y-16">
          <div className="flex items-center gap-6">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic">Career</h2>
            <div className="h-px flex-grow bg-slate-800 opacity-50"></div>
          </div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l-4 border-slate-800 hover:border-blue-600 transition-all group">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-slate-900 border-4 border-slate-700 group-hover:border-blue-600 group-hover:scale-125 transition-all shadow-xl shadow-blue-500/0 group-hover:shadow-blue-500/20"></div>
                <div className="flex items-center gap-3 text-blue-500 font-black text-[11px] uppercase tracking-[0.2em] mb-4">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{exp.role}</h3>
                <p className="text-slate-500 text-sm font-black mb-6 flex items-center gap-2 uppercase tracking-widest"><Globe className="w-4 h-4 text-blue-600"/> {exp.company}</p>
                <p className="text-slate-400 text-base leading-relaxed font-medium">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          <div className="flex items-center gap-6">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic">Education</h2>
            <div className="h-px flex-grow bg-slate-800 opacity-50"></div>
          </div>
          <div className="space-y-10">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-10 rounded-[50px] bg-slate-800/10 border border-slate-800 hover:border-blue-500/20 transition-all group shadow-xl">
                <div className="flex gap-8">
                  <div className="p-5 rounded-[30px] bg-blue-600/10 group-hover:bg-blue-600/20 transition-all h-fit shadow-lg shadow-blue-500/5">
                    <BookOpen className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{edu.institution}</h3>
                    <p className="text-blue-500 font-black text-sm mb-4 uppercase tracking-widest">{edu.degree}</p>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase tracking-tighter">{edu.period} • {edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section id="info" title="Languages & Background">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h3 className="text-3xl font-black text-white flex items-center gap-4 uppercase tracking-tighter italic"><Globe className="w-8 h-8 text-blue-600 shadow-xl"/> Mastered Languages</h3>
            <div className="space-y-8">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-white font-black uppercase tracking-widest text-sm">{lang.name}</span>
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">{lang.level}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800/50 rounded-full overflow-hidden p-1 border border-slate-700">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg shadow-blue-500/20 transition-all duration-1000"
                      style={{ width: lang.level === 'Langue maternelle' ? '100%' : '65%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="text-3xl font-black text-white flex items-center gap-4 uppercase tracking-tighter italic"><Heart className="w-8 h-8 text-pink-600 shadow-xl"/> Personal Interests</h3>
            <div className="flex flex-wrap gap-4">
              {INTERESTS.map((interest, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group cursor-default shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-black text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-900 border-t border-slate-800 py-32 px-6 mt-40">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase italic">LET'S BUILD <br/> THE NEXT BIG THING.</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`} className="px-12 py-5 rounded-[30px] bg-blue-600 text-white font-black uppercase tracking-widest text-sm hover:bg-blue-500 transition-all flex items-center gap-4 shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95">
              <Mail className="w-6 h-6" /> START CONVERSATION
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="px-12 py-5 rounded-[30px] bg-slate-800 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-700 transition-all border-2 border-slate-700 flex items-center gap-4 shadow-2xl">
              <Phone className="w-6 h-6" /> {PERSONAL_INFO.phone}
            </a>
          </div>
          <div className="w-full h-px bg-slate-800 mb-16 opacity-30"></div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <span>© 2025 BELAL ALLALA — YOUCODE ELITE TALENT</span>
            <div className="flex gap-12">
              <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" className="hover:text-blue-500 transition-colors">GITHUB</a>
              <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="hover:text-blue-500 transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-10 right-10 z-50">
        {!isChatOpen ? (
          <button onClick={() => setIsChatOpen(true)} className="w-20 h-20 rounded-[30px] bg-blue-600 text-white flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-110 transition-all border-4 border-[#0f172a] active:scale-90 group relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <MessageSquare className="w-10 h-10 relative z-10" />
          </button>
        ) : (
          <div className="w-[90vw] md:w-[450px] h-[650px] bg-slate-900 rounded-[50px] flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-800 animate-in slide-in-from-bottom-20 duration-500">
            <div className="p-8 bg-blue-600 text-white flex justify-between items-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-[20px] bg-white/20 flex items-center justify-center font-black text-xl border border-white/30 backdrop-blur-md italic">B</div>
                <div>
                  <p className="font-black text-base uppercase tracking-widest italic">Belal's AI agent</p>
                  <p className="text-[10px] opacity-90 font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50"></span> Recruiter mode active
                  </p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-3 hover:bg-white/10 rounded-2xl relative z-10 transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-900/50">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[28px] font-bold text-sm leading-relaxed shadow-xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-300 rounded-tl-none border border-slate-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-5 rounded-[28px] rounded-tl-none flex gap-2 items-center border border-slate-700 shadow-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="p-8 bg-slate-900 border-t border-slate-800 shadow-2xl">
              <div className="flex gap-4">
                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Ask about his insertion..." className="flex-grow bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-600 shadow-inner"/>
                <button onClick={handleSendMessage} disabled={!chatInput.trim() || isThinking} className="p-4 rounded-2xl bg-blue-600 text-white disabled:opacity-50 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 transition-all"><Send className="w-7 h-7" /></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

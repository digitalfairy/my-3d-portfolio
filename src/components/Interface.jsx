import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start ${mobileTop ? "justify-start md:justify-center" : "justify-center"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <div className="max-w-2xl">
        <motion.h1 
          className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          CREATIVE <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-900">
            DEVELOPER
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-slate-900 mt-8 font-normal leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Turning complex <span className="font-extrabold">3D visions</span> into <br /> high-performance web realities. 
          <span className="block text-indigo-500 font-medium mt-2">
            Next.js | Three.js | GSAP | Headless CMS
          </span>
        </motion.p>
        
        <motion.button
          onClick={() => setSection(3)}
          className="mt-7 bg-indigo-950 text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-indigo-900 transition-all border border-indigo-800 shadow-[0_0_20px_rgba(49,46,129,0.5)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          Let's Build Something
        </motion.button>
      </div>
    </Section>
  );
};

const skills = [
  { title: "React / Next.js 15", level: 95 },
  { title: "Three.js / R3F", level: 90 },
  { title: "GSAP Animation", level: 85 },
  { title: "Node.js", level: 80 },
  { title: "Tailwind CSS", level: 90 },
  { title: "TypeScript", level: 75 },
];
const languages = [
  { title: "🇷🇸 Serbian", level: 100 },
  { title: "🇺🇸 English", level: 90 },
  { title: "🇪🇸 Spanish", level: 60 },
];

const SkillsSection = () => {
  return (
    <Section>
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-widest text-center">
          Tech Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills Card */}
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-indigo-900/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xl mb-2 text-slate-300">
                    <span>{skill.title}</span>
                    <span className="font-bold text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-800"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.1 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-indigo-950/70 p-8 rounded-3xl border border-indigo-800/30">
            <h3 className="md:flex md:justify-end text-2xl font-bold text-indigo-300 mb-8">Languages</h3>
            <div className="space-y-6">
              {languages.map((lng, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xl mb-2 text-slate-200">
                    <span>{lng.title}</span>
                    <span className="font-bold text-indigo-300">{lng.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lng.level}%` }}
                      transition={{ duration: 1.5, delay: 0.1 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const nextProject = () => setCurrentProject((currentProject + 1) % projects.length);
  const previousProject = () => setCurrentProject((currentProject - 1 + projects.length) % projects.length);

  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full mt-70">
        {/* Decorative Header */}
        <h2 className="text-3xl font-black text-white mt-20 mb-6 uppercase tracking-widest ml-32 md:ml-0">
          Showcase
        </h2>

        {/* Floating Navigation Console */}
        <div className="flex items-center gap-6 md:p-6 p-3 bg-slate-900/60 backdrop-blur-xl border border-indigo-900/50 rounded-full shadow-2xl">
          <button 
            className="px-6 py-2 text-sm font-bold text-indigo-300 hover:text-white uppercase tracking-widest transition-all" 
            onClick={previousProject}
          >
            ← Prev
          </button>
          
          <div className="w-px h-8 bg-indigo-900/50" /> {/* Divider */}
          <div className="text-indigo-500 font-mono font-bold flex justify-between text-xl">
          <span>
            0{currentProject + 1}
          </span>
          <span>
            /
          </span>
          <span>
            0{projects.length}
          </span>
          </div>
          
          <div className="w-px h-8 bg-indigo-900/50" /> {/* Divider */}
          
          <button 
            className="px-6 py-2 text-sm font-bold text-indigo-300 hover:text-white uppercase tracking-widest transition-all" 
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvzbynkl");
  return (
    <Section>
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-widest">
          Get in touch
        </h2>
        
        {/* Narrowed Container */}
        <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/40 border border-indigo-900/30 backdrop-blur-md shadow-2xl">
          {state.succeeded ? (
            <div className="text-center py-12">
              <p className="text-xl text-blue-400 font-bold">Message Sent!</p>
              <p className="text-slate-400 mt-2 text-sm">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-lg bg-slate-950 border border-indigo-900/50 text-white p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
              
              <div>
                <label htmlFor="email" className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-lg bg-slate-950 border border-indigo-900/50 text-white p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Message</label>
                <textarea name="message" id="message" required className="mt-1 h-24 block w-full rounded-lg bg-slate-950 border border-indigo-900/50 text-white p-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>

              <button 
                disabled={state.submitting} 
                className="w-full bg-indigo-950 text-white py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all border border-indigo-900/50 shadow-lg"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};


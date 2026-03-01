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
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Anita Jelic</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }} // Changed to animate for consistent entry
        transition={{ duration: 1, delay: 0.8 }}
      >
       I specialize in building immersive 3D web experiences.
        <br />
       I bridge the gap between creative design <br />and performant web architecture.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }} // Changed to animate for consistent entry
        transition={{ duration: 1, delay: 1.2 }}
      >
        Work with me
      </motion.button>
    </Section>
  );
};

const skills = [
  { title: "React / Next.js 15", level: 95 },
  { title: "Three.js / R3F", level: 90 },
  { title: "GSAP Animation", level: 85 },
  { title: "Headless CMS (Prismic)", level: 80 },
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
      <div className="w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <h3 className="text-lg md:text-xl font-bold text-gray-100">
                {skill.title}
              </h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1, transition: { duration: 1, delay: 0.5 + index * 0.2 } }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <h3 className="text-lg md:text-xl font-bold text-gray-100">
                  {lng.title}
                </h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${lng.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1, transition: { duration: 1, delay: 1 + index * 0.2 } }}
                  />
                </div>
              </div>
            ))}
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
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button className="hover:text-indigo-600 transition-colors" onClick={previousProject}>← Previous</button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button className="hover:text-indigo-600 transition-colors" onClick={nextProject}>Next →</button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvzbynkl");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">Name</label>
            <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-3" />
            <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">Email</label>
            <input type="email" name="email" id="email" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-3" />
            <ValidationError className="mt-1 text-red-500" prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className="font-medium text-gray-900 block mb-1 mt-8">Message</label>
            <textarea name="message" id="message" className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-3" />
            <ValidationError className="mt-1 text-red-500" errors={state.errors} />
            <button disabled={state.submitting} className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">Submit</button>
          </form>
        )}
      </div>
    </Section>
  );
};
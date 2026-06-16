import { useState, useEffect} from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";

import CertDatabases from "./assets/cert-databases.png";
import CertJava from "./assets/cert-java.png";



// bro stop changing home to hero. dont be stupiddddddddddddddddddddd
const NAV_LINKS = ["home", "about", "projects", "contact"];

const PROJECTS = [
  {
    title: "Hardware Management System",
    desc: "Full-stack web app for tracking and managing hardware inventory. Built with Laravel, Blade templating, and SQLite.",
    tags: ["Laravel", "Blade", "SQLite", "PHP"],
    link: "https://github.com/robroi-neo/Hardware-Management-System",
  },
  {
    title: "DQN Snake Agent",
    desc: "Trained a Deep Q-Network to play Snake from scratch using reinforcement learning. The agent learns purely through reward signals.",
    tags: ["Python", "Reinforcement Learning"],
    link: "https://github.com/robroi-neo/Snake_DeepQ_RL",
  },
  {
    title: "Facial Emotion Recognition",
    desc: "CNN-based model that detects and classifies human emotions from facial expressions in real time.",
    tags: ["CNN", "Python", "Computer Vision"],
    link: "https://github.com/robroi-neo/Facial-Emotion-Recognition",
  },
  {
    title: "Agentic ROG Terraria Wrapper",
    desc: "An LLM Model that uses the terraria wiki as context through word embeddings to answer Terraria Progression Queries.",
    tags: ["Python", "Streamlit", "GROQ"],
    link: "https://github.com/robroi-neo/terraria-agentic",
  },
];


// Deprecated
// const TECH_LIST = ["Laravel", "PHP", "HTML/CSS", "SQL", "Python",];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0f1c] min-h-screen text-slate-400 font-sans">
      <NavBar active={activeSection} />

      <Hero id="home" />

      <Section id="about" heading={<SectionHeading label="about me" />}>
        <AboutMe />
      </Section>

      <Section id="projects" heading={<SectionHeading label="projects" />}>
        <Projects projects={PROJECTS} />
      </Section>
      
      <Section id="certs" heading={<SectionHeading label="certs" />}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4 bg-[#071022]/40 p-4 rounded border border-teal-400/5">
            <img src={CertJava} alt="Certificate - Java" className="w-36 h-auto rounded-md shadow-sm" />
            <div>
              <h3 className="text-slate-200 font-semibold">IT Specialist - Java</h3>
              <p className="text-sm text-teal-400 font-mono mt-1">Certiport - A Pearson VUE Business</p>
              <p className="text-sm text-slate-400 mt-2">Issued Mar 2024</p>
              <p className="text-xs text-slate-500 font-mono mt-1 break-words">Credential ID 430ce1cd-c6c1-4280-8980-545f84763f60</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#071022]/40 p-4 rounded border border-teal-400/5">
            <img src={CertDatabases} alt="Certificate - Databases" className="w-36 h-auto rounded-md shadow-sm" />
            <div>
              <h3 className="text-slate-200 font-semibold">IT Specialist - Databases</h3>
              <p className="text-sm text-teal-400 font-mono mt-1">Certiport - A Pearson VUE Business</p>
              <p className="text-sm text-slate-400 mt-2">Issued Mar 2025</p>
              <p className="text-xs text-slate-500 font-mono mt-1 break-words">Credential ID 21b20f2a-481d-4abb-82b1-a0e51e8585f9</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" heading={<SectionHeading label="contact" />} minHeight="min-h-[70vh]">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <p className="text-teal-400 font-mono text-sm mb-3">what's next?</p>
          <h2 className="flex text-slate-200 text-4xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-center mb-8 px-40">
            I'm currently looking for internship and freelance opportunities. 
            Whether you have a question, a project, or just want to say hi — my inbox is open.
          </p>
          <a
            href="mailto:robroineo2@gmail.com"
            className="inline-block px-8 py-3.5 border border-teal-400 text-teal-400 no-underline rounded font-mono text-sm hover:bg-teal-400/10 transition-colors duration-200"
          >
            Say hello ✉
          </a>
        </div>
      </Section>



      <Footer />
    </div>
  );
}
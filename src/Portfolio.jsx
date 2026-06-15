import { useState, useEffect} from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import Section from "./components/Section.jsx";

const NAV_LINKS = ["hero", "about", "projects", "skills", "contact"];

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
    desc: "AI agent built with LangChain and LangGraph that wraps Terraria gameplay — an experiment in agentic AI for game interaction.",
    tags: ["Python", "Streamlit", "GROQ"],
    link: "https://github.com/robroi-neo/terraria-agentic",
  },
];

const SKILLS = [
  { category: "Web", items: ["Laravel", "Blade", "HTML", "CSS", "MySQL", "SQLite"] },
  { category: "AI / ML", items: ["TensorFlow", "CNN", "DQN", "LangChain", "LangGraph"] },
  { category: "Languages", items: ["Python", "PHP", "JavaScript"] },
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

      <Hero id="hero"/>

      <Section id="about" heading={<SectionHeading label="about me" />}>
        <AboutMe />
      </Section>

      <Section id="projects" heading={<SectionHeading label="projects" />}>
        <Projects projects={PROJECTS} />
      </Section>

      <Section id="skills" heading={<SectionHeading label="skills" />}>
        <Skills groups={SKILLS} />
      </Section>

      <Section id="contact" heading={<SectionHeading label="contact" />} minHeight="min-h-[60vh]">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-teal-400 font-mono text-sm mb-3">what's next?</p>
          <h2 className="text-slate-200 text-4xl font-semibold mb-4">Get In Touch</h2>
          <p className="leading-relaxed mb-8">
            I'm currently looking for internship and freelance opportunities. Whether you have a question, a project, or just want to say hi — my inbox is open.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-8 py-3.5 border border-teal-400 text-teal-400 no-underline rounded font-mono text-sm hover:bg-teal-400/10 transition-colors duration-200"
          >
            Say hello ✉
          </a>
        </div>
      </Section>

      <footer className="text-center py-8 text-xs text-slate-500 font-mono">
        built by Robroi ·{" "}
        <a href="https://github.com/robroi-neo" className="text-teal-400 no-underline hover:underline">
          robroi-neo
        </a>
      </footer>
    </div>
  );
}
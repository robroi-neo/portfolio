import githubLogo from "../assets/github-logo.svg";

const NAV_LINKS = ["about", "projects", "contact"];

export default function NavBar({ active }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="mx-auto fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] bg-[#0a0f1c]/90 backdrop-blur border-b border-teal-400/10 max-w-5xl">
      <span className="text-teal-200 font-bold text-lg tracking-wide font-mono px-4">rob.dev</span>
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`font-mono text-sm tracking-wide bg-transparent border-none cursor-pointer transition-colors duration-200 ${
              active === link ? "text-teal-400" : "text-slate-400 hover:text-teal-400"
            }`}
          >
            {link}
          </button>
        ))}
        <a
          href="https://github.com/robroi-neo"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-teal-400 text-sm no-underline transition-colors duration-200"
        >
          <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}

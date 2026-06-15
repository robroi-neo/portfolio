import HeroImage from "./HeroImage.jsx";
const heroAsciiArt = new URL("../assets/hero.html", import.meta.url).href;

export default function Hero({ id }) {
  return (
    <div id={id} className="min-h-screen flex items-center justify-center gap-16 max-w-5xl mx-auto">
      <HeroImage alt="Rob portrait" src={heroAsciiArt} />
      <div>
        <h1 className="text-slate-200 font-bold leading-tight m-0 text-5xl md:text-6xl">Hi, <span className="text-teal-400">Rob</span> here!</h1>
        <p className="max-w-md leading-relaxed text-[15px] mb-7">
          CS student in the Philippines — I build full-stack web apps with Laravel and experiment with AI and Machine learning. Currently on the lookout for internship and freelance opportunities.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/robroi-neo"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-teal-400 text-teal-400 no-underline rounded font-mono text-sm hover:bg-teal-400/10 transition-colors duration-200"
          >
            View GitHub ↗
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-transparent border border-[#1e3a5f] text-slate-400 rounded font-mono text-sm cursor-pointer hover:border-slate-400 transition-colors duration-200"
          >
            See my work
          </button>
        </div>
      </div>
    </div>
  );
}

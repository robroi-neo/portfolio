function Tag({ label }) {
  return (
    <span className="font-mono text-lg px-2.5 py-0.5 border border-teal-400/30 rounded text-teal-400 tracking-wide">
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-lg border bg-[#0d1b2e] border-[#1e3a5f]">
      <div className="flex justify-between items-start">
        <span className="text-xl text-slate-300">⬡</span>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-teal-400 text-lg no-underline leading-none transition-colors"
        >
          ↗
        </a>
      </div>
      <div>
        <h3 className="text-slate-200 font-semibold text-[17px] mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed m-0">{project.desc}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags?.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}

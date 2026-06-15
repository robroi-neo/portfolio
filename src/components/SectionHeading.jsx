export default function SectionHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="text-teal-400 font-mono text-4xl"># </span>
      <h2 className="text-slate-200 text-4xl font-semibold m-0">{label}</h2>
      <div className="flex-1 h-px bg-[#1e3a5f]" />
    </div>
  );
}
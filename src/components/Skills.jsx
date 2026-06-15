export default function Skills({ groups }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {groups.map((group) => (
        <div key={group.category} className="bg-[#0d1b2e] border border-[#1e3a5f] rounded-lg p-6">
          <p className="text-teal-400 font-mono text-xs mb-4 mt-0">{group.category}</p>
          <div className="flex flex-col gap-2">
            {group.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-teal-400 text-[10px]">◆</span> {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

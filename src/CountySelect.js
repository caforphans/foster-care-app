import React, { useMemo, useState, useEffect, useRef } from "react";

/**
 * CountySelect
 * props:
 * - options: Array<{ id: string, label: string, data?: any }>
 * - placeholder?: string
 * - onChange?: (selectedOption) => void
 * - containerClassName?, controlClassName?, menuClassName?, optionClassName?, inputClassName?
 */
export default function CountySelect({
  options = [],
  placeholder = "Select a county",
  onChange,
  containerClassName = "",
  controlClassName = "",
  menuClassName = "",
  optionClassName = "",
  inputClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const rootRef = useRef(null);

  // close on click outside
  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return options;
    const q = query.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  const handlePick = (opt) => {
    setSelected(opt);
    setOpen(false);
    onChange?.(opt);
  };

  return (
    <div ref={rootRef} className={`relative w-full ${containerClassName}`}>
      {/* trigger (translucent so it sits on the map) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full rounded-xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 text-left text-slate-700 shadow-sm hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-[#02ADEE] ${controlClassName}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between">
          <span className={selected ? "text-slate-900" : "text-slate-400"}>
            {selected ? selected.label : placeholder}
          </span>
          <svg className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {open && (
        <div
          className={`absolute z-20 mt-2 w-full rounded-xl border border-black/10 bg-white/95 p-2 shadow-xl ${menuClassName}`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search county…"
            className={`mb-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#02ADEE] ${inputClassName}`}
          />
          <ul role="listbox" className="max-h-64 overflow-auto rounded-lg">
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-sm text-slate-500">No matches</li>
            )}
            {filtered.map((opt) => {
              const isSel = selected?.id === opt.id;
              return (
                <li
                  key={opt.id}
                  role="option"
                  aria-selected={isSel}
                  onClick={() => handlePick(opt)}
                  className={[
                    "cursor-pointer select-none rounded-md px-3 py-2 text-sm",
                    isSel
                      ? "bg-[#02ADEE] text-white"
                      : "text-slate-800 hover:bg-[#1C6DD0] hover:text-white", // darker blue on hover
                    optionClassName,
                  ].join(" ")}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

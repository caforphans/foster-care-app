import React, { useMemo } from "react";
import MTELogo from "./assets/MTE_Logo.png";
import USMap from "./assets/United_States.png";
import MapPin from "./assets/Map_Pin_icon.png";
import CountySelect from "./CountySelect";
import { countyData } from "./mock-data";

const STATE_ABBR = { Alabama: "AL", "New York": "NY" };

export default function LandingPage({ onSelectRegion, onExploreMap }) {
  const countyOptions = useMemo(() => {
    return Object.entries(countyData)
      .map(([id, c]) => {
        const abbr = STATE_ABBR[c.state] ?? c.state;
        const base = c.name.includes(",") ? c.name.split(",")[0].trim() : c.name;
        return { id, label: `${base}, ${abbr}`, data: c };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const handleCountyChange = (opt) => {
    onSelectRegion?.({ type: "county", id: opt.id, label: opt.label, data: opt.data });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden font-lato"
      style={{ backgroundColor: "rgba(2,173,238,0.16)" }}
    >
      {/* MAP (slightly smaller + whiter) */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={USMap}
          alt="US map background"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          style={{
            width: "115%",          // slightly smaller visual footprint than full cover
            height: "115%",
            transform: "translate(-50%, -50%) scale(0.92)", // shrink a touch
            opacity: 0.99,
            filter: "grayscale(100%) brightness(1.45) contrast(0.85)",
          }}
        />
        {/* white wash */}
        <div className="absolute inset-0 bg-white/45" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 pb-28 pt-8">
        {/* Logo (slightly smaller) */}
        <img src={MTELogo} alt="More Than Enough logo" className="h-14 w-auto object-contain" />

        {/* Heading (bolder) */}
        <h1 className="mt-6 text-center text-[2.9rem] font-extrabold tracking-tight leading-tight text-gray-900">
          Foster Care{" "}
          <span className="text-[#02ADEE] no-underline">Where You Live</span>
        </h1>

        {/* Subhead (bigger) */}
        <p className="mt-3 text-center text-lg sm:text-xl text-gray-800">
          Explore the data and connect to local organizations
        </p>

        {/* County prompt + select (no big white box) */}
        <div className="mt-10 w-full max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            {/* single larger pin to the LEFT of the prompt */}
            <img src={MapPin} alt="" className="h-7 w-7 opacity-90" aria-hidden />
            <div className="text-[1.5rem] font-semibold text-gray-900">
              What county do you live in?
            </div>
          </div>

          {/* label ABOVE and aligned with the select box */}
          <div className="mb-1 text-xs text-gray-600 pl-0">County or county equivalent</div>

          <CountySelect
            options={countyOptions}
            placeholder="Select a county"
            onChange={handleCountyChange}
            containerClassName="w-full"
            controlClassName="w-full rounded-xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#02ADEE]"
            menuClassName="rounded-xl border border-black/10 bg-white/95 shadow-lg overflow-hidden"
            optionClassName="px-4 py-2 hover:bg-[#1C6DD0] hover:text-white"
          />
        </div>

        {/* Floating CTA */}
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex justify-center px-4">
          <div className="pointer-events-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-2xl bg-white/90 backdrop-blur p-4 shadow-lg ring-1 ring-black/5">
            <div className="flex items-center gap-3 text-gray-800">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fill="currentColor" d="M9 3 4 5v16l5-2 6 2 5-2V3l-5 2-6-2ZM9 5l6 2v12l-6-2V5Z" />
              </svg>
              <span className="text-sm sm:text-base">
                Want to explore multiple counties or states?
              </span>
            </div>
            <button
              type="button"
              onClick={() => onExploreMap?.()}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: "#02ADEE" }}
            >
              Explore the map <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* small fallback if your CountySelect didn’t take the className props */}
      <style>{`
        .CountySelect .Select__option:hover { background:#1C6DD0; color:#fff; }
      `}</style>
    </div>
  );
}

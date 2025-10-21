import React, { useMemo } from "react";
import MTELogo from "./assets/MTE_Logo.png";
import USMap from "./assets/United_States.png";
import MapPin from "./assets/Map_Pin_icon.png";
import CountySelect from "./CountySelect";
import { countyData } from "./mock-data";

// optional: state abbreviations
const STATE_ABBR = { Alabama: "AL", "New York": "NY" };

export default function LandingPage({ onSelectRegion, onExploreMap }) {
  // Build options like "Nassau County, NY"
  const countyOptions = useMemo(() => {
    return Object.entries(countyData)
      .map(([id, c]) => {
        const abbr = STATE_ABBR[c.state] ?? c.state;
        let label = c.name;
        if (label.includes(",")) {
          const [left] = label.split(",");
          label = `${left.trim()}, ${abbr}`;
        } else {
          label = `${c.name}, ${abbr}`;
        }
        return { id, label, data: c };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const handleCountyChange = (opt) => {
    onSelectRegion?.({ type: "county", id: opt.id, label: opt.label, data: opt.data });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden font-lato"
      style={{ backgroundColor: "rgba(2, 173, 238, 0.16)" }} // blue wash @ 16%
    >
      {/* Visible, light US map */}
      <img
  src={USMap}
  alt="US map background"
  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
  style={{
    // stronger presence
    opacity: 0.57,                               // try 0.48–0.56 if you want even more/less
    filter: "grayscale(100%) brightness(1.05) contrast(1.25)"
    // optional extra edge definition:
    // filter: "grayscale(100%) brightness(1.02) contrast(1.35) drop-shadow(0 0 2px rgba(0,0,0,0.18))"
  }}
/>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 pb-24 pt-10">
        {/* Logo */}
        <img src={MTELogo} alt="More Than Enough logo" className="h-16 w-auto object-contain" />

        {/* Heading */}
        <h1 className="mt-6 text-center text-[2.75rem] font-semibold leading-tight text-gray-900">
          Foster Care{" "}
          <span className="underline underline-offset-4" style={{ color: "#02ADEE" }}>
            Where You Live
          </span>
        </h1>

        <p className="mt-3 text-center text-base text-gray-800 sm:text-lg">
          Explore the data and connect to local organizations
        </p>

        {/* COUNTY SELECT CARD */}
        <div className="mt-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
          <div className="mb-3 flex items-center gap-3">
            <img src={MapPin} alt="Map pin icon" className="h-6 w-6" />
            <div>
              <div className="text-lg font-semibold text-gray-900">What county do you live in?</div>
              <div className="text-xs text-gray-500">County or county equivalent</div>
            </div>
          </div>

          <CountySelect
            options={countyOptions}
            placeholder="Select a county"
            onChange={handleCountyChange}
          />
        </div>

        {/* FLOATING CTA */}
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex justify-center px-4">
          <div className="pointer-events-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5">
            <div className="flex items-center gap-3 text-gray-800">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M9 3 4 5v16l5-2 6 2 5-2V3l-5 2-6-2ZM9 5l6 2v12l-6-2V5Z"
                />
              </svg>
              <span className="text-sm sm:text-base font-normal">
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
    </div>
  );
}

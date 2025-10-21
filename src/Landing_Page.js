import React from "react";
import Region_Menu from "./Region_Menu";
import MTELogo from "./assets/MTE_Logo.png";
import USMap from "./assets/United_States.png";
import MapPin from "./assets/Map_Pin_icon.png";

export default function LandingPage({ onSelectRegion, onExploreMap }) {
  const handleSwitchRegion = (regionObj) => onSelectRegion?.(regionObj);
  const handleSwitchView = () => {};

  return (
    <div
      className="relative min-h-screen overflow-hidden font-[Lato]"
      style={{ backgroundColor: "rgba(2, 173, 238, 0.16)" }}
    >
      {/* Faint US map background */}
      <img
        src={USMap}
        alt="US map background"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45" // increased from 25% to 45%
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 pb-24 pt-10">
        {/* Logo */}
        <img
          src={MTELogo}
          alt="More Than Enough logo"
          className="h-16 sm:h-18 md:h-20 w-auto object-contain"
        />

        {/* Heading */}
        <h1
          className="mt-6 text-center font-semibold leading-tight text-gray-900"
          style={{
            fontSize: "2.75rem",
            lineHeight: "1.2",
          }}
        >
          Foster Care{" "}
          <span
            className="underline underline-offset-4"
            style={{ color: "#02ADEE" }}
          >
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
              <div className="text-lg font-semibold text-gray-900">
                What county do you live in?
              </div>
              <div className="text-xs text-gray-500">
                County or county equivalent
              </div>
            </div>
          </div>
          <Region_Menu
            onSelectRegion={handleSwitchRegion}
            onSwitchView={handleSwitchView}
            className="w-full"
            placeholder="Select a county"
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
              Explore the map
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Region_Menu from "./Region_Menu";
import MTELogo from "./assets/MTE_Logo.png";
import USMap from "./assets/United_States.png";

export default function LandingPage({ onSelectRegion }) {
  // Just forward Region_Menu's object to App.js
  const handleSwitchRegion = (regionObj) => {
    onSelectRegion(regionObj);
  };

  const handleSwitchView = () => {
    // For landing page, always default to metric (no need to override here)
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden">
      {/* Faint US map background */}
      <img
        src={USMap}
        alt="US map background"
        className="absolute inset-0 w-full h-full object-contain opacity-100 pointer-events-none"
      />

      {/* Logo/Header */}
      <div className="mt-8 mb-6 relative z-10">
        <img
          src={MTELogo}
          alt="More Than Enough logo"
          className="h-12 sm:h-14 mx-auto object-contain"
        />
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 relative z-10">
        Foster Care <span className="text-blue-600">Where You Live</span>
      </h2>
      <p className="text-gray-600 mb-6 relative z-10">
        Explore the data and connect to local organizations
      </p>

      {/* Reusable Cascading Menu */}
      <div className="relative z-10">
        <Region_Menu
          onSelectRegion={handleSwitchRegion}
          onSwitchView={handleSwitchView}
        />
      </div>
    </div>
  );
}

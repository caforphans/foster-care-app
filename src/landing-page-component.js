import React from 'react';
import MTELogo from './assets/MTE_Logo.png';
import MapIcon from './assets/Map_icon.png';
import USMap from './assets/United_States.png';

export default function LandingPage({ onSelectCounty, onExploreMap }) {
  return (
    <div className="relative min-h-screen bg-blue-50 flex flex-col items-center text-center px-4 overflow-hidden">
      {/* Faint US map background */}
      <img
        src={USMap}
        alt="US map background"
        className="absolute inset-0 w-full h-full object-contain opacity-100 pointer-events-none" 
        // ↑ increased opacity from 10 → 25 and changed object-cover → object-contain
      />

      {/* Logo/Header */}
      <div className="mt-8 mb-6 relative z-10">
        <img
          src={MTELogo}
          alt="More Than Enough logo"
          className="h-12 sm:h-14 mx-auto object-contain" // slightly smaller
        />
      </div>

      {/* Title + Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 relative z-10">
        Foster Care <span className="text-blue-600">Where You Live</span>
      </h2>
      <p className="text-gray-600 mb-6 relative z-10">
        Explore the data and connect to local organizations
      </p>

      {/* Dropdown */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-left relative z-10">
        <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
          <span role="img" aria-label="map-pin" className="text-lg">📍</span>
          What county do you live in?
        </label>
        <p className="text-xs text-gray-500 mb-2">County or county equivalent</p>
        <select
          onChange={(e) => onSelectCounty(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a county</option>
          <option value="butler-al">Butler County, AL</option>
          <option value="nassau-ny">Nassau County, NY</option>
        </select>
      </div>

      {/* Explore multiple */}
      <div className="mt-6 flex items-center bg-white shadow rounded-lg p-4 max-w-md w-full relative z-10">
        <img src={MapIcon} alt="Map icon" className="w-6 h-6 mr-2" />
        <p className="text-gray-700 flex-1">
          Want to explore multiple counties or states?
        </p>
        <button
          onClick={onExploreMap}
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Explore the map →
        </button>
      </div>
    </div>
  );
}

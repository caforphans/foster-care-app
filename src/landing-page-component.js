import React from 'react';

export default function LandingPage({ onSelectCounty, onExploreMap }) {
  return (

    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
      {/* Logo/Header */}
      <h1 className="text-3xl font-bold tracking-wide text-gray-900 mb-6">
        <span className="text-black">MORE TH</span>
        <span className="text-blue-600">&gt;</span>
        <span className="text-black">N ENOUGH</span>
      </h1>

      {/* Title + Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Foster Care <span className="text-blue-600">Where You Live</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Explore the data and connect to local organizations
      </p>

      {/* Dropdown */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">
          What county do you live in?
        </label>
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
      <div className="mt-6 flex items-center bg-white shadow rounded-lg p-4 max-w-md w-full">
        <span className="text-blue-600 text-2xl mr-2">🗺️</span>
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
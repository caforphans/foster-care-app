import React from "react";
import Region_Menu from "./Region_Menu";

export default function TopNav({ currentView, onSelectRegion, onSwitchView }) {
  return (
    <div className="bg-blue-50 border-b shadow-sm py-3 px-4 flex justify-between items-center relative">
      {/* Region Menu */}
      <Region_Menu onSelectRegion={onSelectRegion} onSwitchView={onSwitchView} />

      {/* Switch View Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onSwitchView("metric")}
          className={`px-3 py-1 rounded ${
            currentView === "metric" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Metric
        </button>
        <button
          onClick={() => onSwitchView("organizational")}
          className={`px-3 py-1 rounded ${
            currentView === "organizational"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Organizational
        </button>
        <button
          onClick={() => onSwitchView("historic")}
          className={`px-3 py-1 rounded ${
            currentView === "historic"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Historic
        </button>
      </div>
    </div>
  );
}

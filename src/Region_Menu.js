import React, { useState, useRef, useEffect } from "react";
import { stateData, countyData } from "./mock-data";

export default function Region_Menu({ onSelectRegion, onSwitchView }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCountry, setOpenCountry] = useState(null);
  const [openState, setOpenState] = useState(null);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenCountry(null);
        setOpenState(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFinalSelect = (level, id) => {
    onSelectRegion({ level, id });
    onSwitchView("metric");
    setMenuOpen(false);
    setOpenCountry(null);
    setOpenState(null);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="px-3 py-2 bg-white border rounded shadow-sm hover:bg-gray-50"
      >
        Choose Region
      </button>

      {menuOpen && (
        <ul className="absolute mt-2 bg-white border rounded shadow-lg z-20 min-w-[220px]">
          {/* Country */}
          <li>
            <div
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 flex justify-between items-center"
              onClick={() =>
                setOpenCountry(openCountry === "usa" ? null : "usa")
              }
            >
              United States of America
              <span
                className={`ml-2 text-gray-500 transform transition-transform ${
                  openCountry === "usa" ? "rotate-90" : ""
                }`}
              >
                ›
              </span>
            </div>

            {openCountry === "usa" && (
              <ul className="bg-white border-t border-gray-200">
                {/* All States */}
                <li
                  className="px-6 py-2 cursor-pointer hover:bg-blue-100"
                  onClick={() => handleFinalSelect("national", "usa")}
                >
                  All States
                </li>

                {/* Generate states dynamically */}
                {Object.entries(stateData).map(([stateId, state]) => (
                  <li key={stateId}>
                    <div
                      className="px-6 py-2 cursor-pointer hover:bg-blue-100 flex justify-between items-center"
                      onClick={() =>
                        setOpenState(openState === stateId ? null : stateId)
                      }
                    >
                      {state.name}
                      <span
                        className={`ml-2 text-gray-500 transform transition-transform ${
                          openState === stateId ? "rotate-90" : ""
                        }`}
                      >
                        ›
                      </span>
                    </div>

                    {/* County submenu */}
                    {openState === stateId && (
                      <ul className="bg-white border-t border-gray-200">
                        <li
                          className="px-8 py-2 cursor-pointer hover:bg-blue-100"
                          onClick={() => handleFinalSelect("state", stateId)}
                        >
                          All Counties
                        </li>
                        {Object.entries(countyData)
                          .filter(
                            ([, county]) => county.state === state.name
                          )
                          .map(([countyId, county]) => (
                            <li
                              key={countyId}
                              className="px-8 py-2 cursor-pointer hover:bg-blue-100"
                              onClick={() =>
                                handleFinalSelect("county", countyId)
                              }
                            >
                              {county.name}
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}

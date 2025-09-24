import React from "react";

// Assets
import CountyMapPlaceholder from "./assets/CountyMapPlaceHolder.png";
import MTELogo from "./assets/MTE_Logo.png";

// Impact Area Icons
import FosterKinshipIcon from "./assets/FosterKinship_icon.png";
import AdoptiveFamilyIcon from "./assets/Adoptive_family_icon.png";
import BiologicalFamilyIcon from "./assets/BiologicalFamily_icon.png";
import WrapAroundIcon from "./assets/WrapAround_icon.png";

// Example organization data
const orgData = [
  {
    name: "Bridge Ministry",
    category: "Bridge Ministry",
    categoryColor: "bg-yellow-200 text-yellow-800",
    description:
      "Supporting foster families through faith-based community connections and practical assistance.",
    focus: ["Foster and Kinship Families", "Wraparound"],
    location: "Nassau County - 10100",
    phone: "516-456-7891",
    email: "info@nassaubridgeministry.org",
  },
  {
    name: "Hope Family Services",
    category: "Service Organization",
    categoryColor: "bg-green-200 text-green-800",
    description:
      "Supporting foster families through faith-based community connections and practical assistance.",
    focus: ["Adoptive", "Wraparound", "Biological"],
    location: "Nassau County - 10100",
    phone: "516-456-7891",
    email: "info@nassauhope.org",
  },
  {
    name: "Community Support Network",
    category: "Government",
    categoryColor: "bg-red-200 text-red-800",
    description:
      "Supporting foster families through faith-based community connections and practical assistance.",
    focus: ["Foster and Kinship Families", "Wraparound"],
    location: "Nassau County - 10100",
    phone: "516-456-7891",
    email: "info@nassaucommunity.org",
  },
];

export default function County_Organizational_View({ countyName = "Nassau County, New York" }) {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1
            className="text-3xl sm:text-4xl text-gray-900"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            {countyName}
          </h1>
          <p className="text-gray-700 mt-1">
            Explore local organizations and connections near you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6 flex-grow">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Organization Categories */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Organization Categories</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>Bridge Ministry</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>Service Organization</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>Church Ministry</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>Government</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>Placement Agency</span>
              </label>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Impact Areas</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col items-center">
                <img src={FosterKinshipIcon} alt="Foster Kinship" className="w-10 h-10 mb-1" />
                <span className="text-center">Foster & Kinship</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={AdoptiveFamilyIcon} alt="Adoptive" className="w-10 h-10 mb-1" />
                <span className="text-center">Adoptive</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={BiologicalFamilyIcon} alt="Biological" className="w-10 h-10 mb-1" />
                <span className="text-center">Biological</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={WrapAroundIcon} alt="Wraparound" className="w-10 h-10 mb-1" />
                <span className="text-center">Wraparound</span>
              </div>
            </div>
          </div>

          {/* Relationships */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Relationships</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>View Connection Lines</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> <span>View Local Networks</span>
              </label>
            </div>
          </div>
        </div>

        {/* Map + Organizations */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* Map Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <img
              src={CountyMapPlaceholder}
              alt="County Map Placeholder"
              className="w-full rounded"
            />
          </div>

          {/* Organization Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {orgData.map((org) => (
              <div key={org.name} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className={`font-semibold mb-1 ${org.categoryColor}`}>{org.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{org.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  <strong>Focus Areas:</strong> {org.focus.join(", ")}
                </div>
                <div className="text-xs text-gray-500">Location: {org.location}</div>
                <div className="text-xs text-gray-500">Phone: {org.phone}</div>
                <div className="text-xs text-gray-500">Email: {org.email}</div>
                <button className="mt-3 px-3 py-1 text-sm bg-blue-400 text-white rounded hover:bg-blue-500">
                  View Full Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-50 border-t py-4 text-right pr-6">
        <img src={MTELogo} alt="More Than Enough" className="h-8 inline-block" />
      </div>
    </div>
  );
}

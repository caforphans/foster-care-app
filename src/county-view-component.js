import React from "react";
import { countyData, stateData } from "./mock-data";

// Import icons from /assets
import ChurchIcon from "./assets/church_icon.png";
import FosterKinshipIcon from "./assets/FosterKinship_icon.png";
import AdoptiveFamilyIcon from "./assets/Adoptive_family_icon.png";
import BiologicalFamilyIcon from "./assets/BiologicalFamily_icon.png";
import WrapAroundIcon from "./assets/WrapAround_icon.png";
import DownloadIcon from "./assets/download_icon.png";
import MapIcon from "./assets/Map_icon.png";
import MTELogo from "./assets/MTE_Logo.png"; // consider renaming to remove the space

const CountyView = ({ county, onExploreMap }) => {
  const data = countyData[county];
  const state = stateData.alabama; // you can make this dynamic later

  if (!data) return null;

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-pacifico text-gray-800">{data.name}</h1>
            <p className="text-gray-600">
              Population: {data.population.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-lg text-sm">
              <img src={DownloadIcon} alt="Download" className="w-5 h-5" />
              Download Data
            </button>
            <button className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-lg text-sm">
              📊 View Historical Data
            </button>
            <button
              onClick={onExploreMap}
              className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-lg text-sm"
            >
              <img src={MapIcon} alt="Map" className="w-5 h-5" />
              Explore the Map
            </button>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="bg-white text-center py-6 shadow-md">
        <img src={ChurchIcon} alt="Church" className="mx-auto w-12 h-12 mb-2" />
        <p className="text-3xl font-bold text-blue-500">{data.totalChurches}</p>
        <p className="text-gray-700 text-sm">
          TOTAL CHURCHES IN {data.name.toUpperCase()}
        </p>
      </div>

      {/* Grid of cards */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Foster and Kinship */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={FosterKinshipIcon} alt="Foster Kinship" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Foster and Kinship Families</h3>
          </div>
          <p className="text-3xl font-bold text-blue-500 mb-2">{data.licensedHomesPerChild}</p>
          <p className="text-sm text-gray-600 mb-4">
            Licensed Homes Per Child in Care
          </p>
          <ul className="space-y-1 text-sm">
            <li>Children in Care: {data.childrenInCare}</li>
            <li>Children in Family: {data.childrenInFamily}</li>
            <li>Children in Kinship Care: {data.childrenInKinship}</li>
            <li>Children Out-of-County: {data.childrenOutOfCounty}</li>
            <li>Licensed Homes: {data.licensedHomes}</li>
          </ul>
        </div>

        {/* Adoptive Families */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={AdoptiveFamilyIcon} alt="Adoptive" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Adoptive Families</h3>
          </div>
          <p className="text-3xl font-bold text-blue-500 mb-2">{data.waitingForAdoption}</p>
          <p className="text-sm text-gray-600 mb-4">Children Waiting for Adoption</p>
          <ul className="space-y-1 text-sm">
            <li>Adopted in 2024: {data.childrenAdopted2024}</li>
            <li>Avg Months to Adoption: {data.avgMonthsToAdoption}</li>
          </ul>
        </div>

        {/* Support for Biological Families */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={BiologicalFamilyIcon} alt="Biological" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Support for Biological Families</h3>
          </div>
          <p className="text-3xl font-bold text-blue-500 mb-2">{data.familyPreservationCases}</p>
          <p className="text-sm text-gray-600">Family Preservation Cases</p>
          <p className="text-3xl font-bold text-blue-500 mb-2">{data.reunificationRate}%</p>
          <p className="text-sm text-gray-600">Reunification Rate</p>
        </div>

        {/* Wraparound Support */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={WrapAroundIcon} alt="Wraparound" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Wraparound Support</h3>
          </div>
          <p className="text-3xl font-bold text-blue-500 mb-2">{data.supportPercentage}%</p>
          <p className="text-sm text-gray-600">Churches Providing Support</p>
          <ul className="text-sm mt-2">
            <li>Churches Providing Support: {data.churchesProvidingSupport}</li>
            <li>Total Churches: {data.totalChurches}</li>
          </ul>
        </div>
      </div>

      {/* State summary */}
      <div className="bg-white max-w-7xl mx-auto px-4 py-6 mt-8 rounded-lg shadow flex justify-around text-center">
        <div>
          <p className="text-2xl font-bold text-blue-500">{state.totalChildren.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Children in Care</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-500">{state.licensedHomes}</p>
          <p className="text-sm text-gray-600">Licensed Homes</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-500">{state.waitingForAdoption}</p>
          <p className="text-sm text-gray-600">Children Waiting</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-500">{state.reunificationRate}%</p>
          <p className="text-sm text-gray-600">Reunification Rate</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-500">{state.familyPreservationCases}</p>
          <p className="text-sm text-gray-600">Preservation Cases</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <img src={MTELogo} alt="More Than Enough Logo" className="mx-auto h-8" />
      </div>
    </div>
  );
};

export default CountyView;

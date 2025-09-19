import React from 'react';
import { nationalStats } from './mock-data';

// Import asset icons
import BiologicalFamilyIcon from './assets/BiologicalFamily_icon.png';
import AdoptiveFamilyIcon from './assets/Adoptive_family_icon.png';
import ChurchIcon from './assets/church_icon.png';
import HandIcon from './assets/front_hand.png';
import PointerIcon from './assets/Mouse pointer.png';
import RecoloredMap from './assets/RecoloredMap.png';

const NationalView = ({ onSelectState }) => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header (no white box) */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center relative">
        <h1
          className="text-3xl sm:text-4xl text-gray-900"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          United States of America
        </h1>
        <p className="text-gray-700 mt-1">
          Understand foster care trends across the country
        </p>
        <div className="absolute right-4 top-6 flex gap-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm bg-white hover:bg-gray-50">
            Organization View
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            Metrics View
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 space-y-4">
          {/* Metrics */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Metrics</h3>
            <select className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Count of Family Preservation Cases</option>
              <option>Ratio of Licensed Homes to Children in Care</option>
              <option>Count of Children Waiting For Adoption</option>
              <option>Biological Family Reunification Rate</option>
            </select>
          </div>

          {/* Trends */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Trends</h3>
            <div className="flex items-center gap-2 mb-3">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Interpret This Trend</span>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-sm font-medium mb-2">
                Number of Family Preservation Cases in the U.S. (by 000s)
              </div>
              {/* Simple mock bar chart */}
              <div className="h-24 bg-white rounded flex items-end justify-between px-2 pb-2">
                <div className="bg-orange-500 w-8 h-20"></div>
                <div className="bg-orange-500 w-8 h-16"></div>
                <div className="bg-orange-500 w-8 h-12"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div className="col-span-9">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="bg-blue-50 text-blue-700 p-2 rounded mb-4 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={HandIcon} alt="Hover hand" className="w-5 h-5" />
                <span>Hover over a state to display the data</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={PointerIcon} alt="Click pointer" className="w-5 h-5" />
                <span>Click to deep-dive into a particular state</span>
              </div>
            </div>
            {/* Recolored map image (replace StaticMap for now) */}
            <img
              src={RecoloredMap}
              alt="Recolored US map"
              className="w-full rounded"
            />
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4">
            {/* Family/Kinship */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img src={BiologicalFamilyIcon} alt="Family" className="w-10 h-10 mx-auto mb-3" />
              <div className="text-2xl font-bold">{nationalStats.childrenInCare.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mb-3">Children in Out-of-Home Care</div>
              <div className="text-sm text-gray-600">
                {nationalStats.childrenInFamilyFoster.toLocaleString()} Children in Family-Like Foster Care
              </div>
              <div className="text-sm text-gray-600">
                {nationalStats.childrenInKinship.toLocaleString()} Children in Kinship Care
              </div>
            </div>

            {/* Adoption */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img src={AdoptiveFamilyIcon} alt="Adoption" className="w-10 h-10 mx-auto mb-3" />
              <div className="text-2xl font-bold">{nationalStats.childrenWaitingAdoption.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mb-3">Children Waiting For Adoption</div>
              <div className="text-sm text-gray-600">
                {nationalStats.childrenAdopted2023.toLocaleString()} Children Adopted FY 2023
              </div>
            </div>

            {/* Churches */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img src={ChurchIcon} alt="Churches" className="w-10 h-10 mx-auto mb-3" />
              <div className="text-2xl font-bold">{(nationalStats.totalChurches / 1000).toFixed(0)}K</div>
              <div className="text-sm text-gray-600 mb-3">Churches</div>
              <div className="text-sm text-gray-600">
                {(nationalStats.churchesWithMinistry / 1000).toFixed(0)}K Churches with a Foster Care Ministry
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalView;

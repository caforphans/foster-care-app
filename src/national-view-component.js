import React from 'react';
import { Users, Church } from 'lucide-react';
import StaticMap from './static-map-component';
import { nationalStats } from './mock-data';

const NationalView = ({ onSelectState, onSelectCounty }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">United States of America</h1>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Organization View</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Metrics View</button>
            </div>
          </div>
          <p className="text-gray-600 mt-1">Explore foster care data where you live</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Metrics</h3>
              <div className="space-y-2 text-sm">
                <div className="text-blue-600 bg-blue-50 px-2 py-1 rounded">Count of Family Preservation Cases</div>
                <div className="px-2 py-1 hover:bg-gray-50 cursor-pointer">Ratio of Licensed Homes to Children in Care</div>
                <div className="px-2 py-1 hover:bg-gray-50 cursor-pointer">Count of Children Waiting For Adoption</div>
                <div className="px-2 py-1 hover:bg-gray-50 cursor-pointer">Biological Family Reunification Rate</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Trends</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Interpret This Trend</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm font-medium mb-2">Number of Family Preservation Cases in the U.S. (by 000s)</div>
                  <div className="h-20 bg-orange-200 rounded flex items-end justify-between px-2 pb-2">
                    <div className="bg-orange-500 w-8 h-16"></div>
                    <div className="bg-orange-500 w-8 h-12"></div>
                    <div className="bg-orange-500 w-8 h-8"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <span>Hover over a state to display the data</span>
                <span>Click to deep-dive into a particular state</span>
              </div>
              <StaticMap currentView="national" onStateClick={onSelectState} />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-gray-600" />
                  <div>
                    <div className="text-2xl font-bold">{nationalStats.childrenInCare.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Children in Out-of-Home Care</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{nationalStats.childrenInFamilyFoster.toLocaleString()} Children in Family-Like Foster Care</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{nationalStats.childrenInKinship.toLocaleString()} Children in Kinship Care</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-gray-600" />
                  <div>
                    <div className="text-2xl font-bold">{nationalStats.childrenWaitingAdoption.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Children Waiting For Adoption</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {nationalStats.childrenAdopted2023.toLocaleString()} Children Adopted FY 2023
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Church className="w-8 h-8 text-gray-600" />
                  <div>
                    <div className="text-2xl font-bold">{(nationalStats.totalChurches / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600">Churches</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {(nationalStats.churchesWithMinistry / 1000).toFixed(0)}K Churches with a Foster Care Ministry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalView;
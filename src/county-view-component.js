import React from 'react';
import { ArrowLeft, Download, BarChart3, Map, Users, Heart, Church } from 'lucide-react';
import { countyData, stateData } from './mock-data';

const CountyView = ({ county, onBack, onExploreMap }) => {
  const data = countyData[county];
  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Population: {data.population.toLocaleString()}</span>
                <button
                  onClick={onExploreMap}
                  className="text-blue-600 hover:underline"
                >
                  Select a Different County
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 border rounded text-sm">
                <Download className="w-4 h-4" />
                Download Data
              </button>
              <button className="flex items-center gap-1 px-3 py-1 border rounded text-sm">
                <BarChart3 className="w-4 h-4" />
                View Historical Data
              </button>
              <button
                onClick={onExploreMap}
                className="flex items-center gap-1 px-3 py-1 border rounded text-sm"
              >
                <Map className="w-4 h-4" />
                Explore the Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Churches stat */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3">
            <Church className="w-8 h-8 text-gray-600" />
            <div>
              <div className="text-3xl font-bold text-blue-500">
                {data.totalChurches}
              </div>
              <div className="text-sm text-gray-600">
                TOTAL CHURCHES IN {data.name.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Foster and Kinship Families */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold">Foster and Kinship Families</h3>
            </div>
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {data.licensedHomesPerChild}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Licensed Homes Per Child in Care
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Children in Care</span>
                <span className="font-medium">{data.childrenInCare}</span>
              </div>
              <div className="flex justify-between">
                <span>Children in Family</span>
                <span className="font-medium">{data.childrenInFamily}</span>
              </div>
              <div className="flex justify-between">
                <span>Children in Kinship Care</span>
                <span className="font-medium">{data.childrenInKinship}</span>
              </div>
              <div className="flex justify-between">
                <span>Children Placed Out-of-County</span>
                <span className="font-medium">{data.childrenOutOfCounty}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Licensed Foster and Kinship Homes</span>
                <span className="font-medium">{data.licensedHomes}</span>
              </div>
            </div>
          </div>

          {/* Adoptive Families */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold">Adoptive Families</h3>
            </div>
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {data.waitingForAdoption}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Children Waiting For Adoption
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Children Adopted in 2024</span>
                <span className="font-medium">{data.childrenAdopted2024}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Months to Adoption</span>
                <span className="font-medium">{data.avgMonthsToAdoption}</span>
              </div>
            </div>
          </div>

          {/* Support for Biological Families */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold">Support for Biological Families</h3>
            </div>
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {data.familyPreservationCases}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Family Preservation Cases
            </div>
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {data.reunificationRate}%
            </div>
            <div className="text-sm text-gray-600">
              Biological Family Reunification Rate
            </div>
          </div>

          {/* Wraparound Support */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold">Wraparound Support</h3>
            </div>
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {data.supportPercentage}%
            </div>
            <div className="text-sm text-gray-600 mb-4">Churches Providing Support</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Churches Providing Support</span>
                <span className="font-medium">{data.churchesProvidingSupport}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Churches</span>
                <span className="font-medium">{data.totalChurches}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Changes */}
        {data.trends && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">
              Historical Change (2022 to 2024)
            </h3>
            <div className="grid grid-cols-5 gap-4 text-center">
              {Object.entries(data.trends).map(([key, value]) => (
                <div key={key}>
                  <div
                    className={`text-3xl font-bold ${
                      value > 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {value > 0 ? '+' : ''}
                    {value}%
                  </div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountyView;

import React, { useState } from 'react';
import { ChevronDown, Map } from 'lucide-react';

const LandingPage = ({ onSelectCounty }) => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const counties = [
    'Butler County, AL',
    'Nassau County, NY', 
    'Suffolk County, NY',
    'Greenville County, SC'
  ];

  const handleCountySelect = (county) => {
    setSelectedCounty(county);
    setShowDropdown(false);
  };

  const handleExploreMap = () => {
    if (selectedCounty) {
      const countyKey = selectedCounty.includes('Butler') ? 'butler-al' : 'nassau-ny';
      onSelectCounty(countyKey);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">
            MORE TH<span className="text-blue-500">></span>N ENOUGH
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Foster Care <span className="text-blue-500">Where You Live</span>
            </h1>
            <p className="text-gray-600">Explore the data and connect to local organizations</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-lg font-medium">What county do you live in?</span>
            </div>

            <div className="ml-11">
              <label className="block text-sm text-gray-600 mb-2">County or county equivalent</label>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:border-blue-500"
                >
                  <span className={selectedCounty ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedCounty || 'Select a county'}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
                
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {counties.map((county, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCountySelect(county)}
                        className={`w-full p-3 text-left hover:bg-blue-50 ${
                          idx === 0 ? 'rounded-t-lg' : ''
                        } ${idx === counties.length - 1 ? 'rounded-b-lg' : ''} ${
                          county.includes('Nassau') ? 'bg-blue-500 text-white' : ''
                        }`}
                      >
                        {county}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="ml-11 flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-700">Want to explore multiple counties or states?</span>
              </div>
              <button 
                onClick={handleExploreMap}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 flex items-center gap-2"
              >
                Explore the map
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
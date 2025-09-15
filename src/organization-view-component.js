import React from 'react';
import { ArrowLeft, Users, Heart, Plus, Minus, Maximize2 } from 'lucide-react';
import StaticMap from './static-map-component';
import { countyData, organizations } from './mock-data';

const OrganizationView = ({ county, onBack }) => {
  const data = countyData[county];
  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
          </div>
          <p className="text-gray-600">Explore local organizations and connections near you</p>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Organization View</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Metrics View</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Organization Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Organization Categories</h3>
              <div className="text-sm text-gray-600 mb-3">Check categories to explore who is working in your community</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="bg-yellow-200 px-2 py-1 rounded text-xs">Bridge Ministry</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="bg-green-200 px-2 py-1 rounded text-xs">Service Organization</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">Church Ministry</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="bg-orange-200 px-2 py-1 rounded text-xs">Government</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="bg-purple-200 px-2 py-1 rounded text-xs">Placement Agency</span>
                </label>
              </div>
            </div>

            {/* Impact Areas */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Impact Areas</h3>
              <div className="text-sm text-gray-600 mb-3">Check boxes to identify who is working in MTE's four impact areas</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">Foster and Kinship Families</span>
                  </div>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">Adoptive Families</span>
                  </div>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">Support for Biological Families</span>
                  </div>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">Wraparound Support</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Relationships */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Relationships</h3>
              <div className="text-sm text-gray-600 mb-3">Turn on collaborations to see how organizations work together</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-blue-600 text-xs">View Connection Lines</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View Local Networks</span>
                </label>
              </div>
            </div>
          </div>

          {/* Map and Organizations */}
          <div className="col-span-9">
            {/* Interactive Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="h-96 bg-blue-100 rounded-lg relative">
                <StaticMap currentView="organization" />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="bg-white shadow-sm p-2 rounded">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button className="bg-white shadow-sm p-2 rounded">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="bg-white shadow-sm p-2 rounded">
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
                {/* Faith Community Alliance info popup */}
                <div className="absolute top-1/2 right-8 bg-white p-3 rounded-lg shadow-lg max-w-xs">
                  <h4 className="font-semibold text-sm mb-1">Faith Community Alliance</h4>
                  <p className="text-xs text-gray-600 mb-2">Supporting foster families through faith-based community connections and practical assistance.</p>
                </div>
              </div>
            </div>

            {/* Organization Cards */}
            <div className="grid grid-cols-3 gap-4">
              {organizations.map((org, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{org.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${
                      org.type === 'Bridge Ministry' ? 'bg-yellow-200' :
                      org.type === 'Service Organization' ? 'bg-green-200' :
                      'bg-orange-200'
                    }`}>
                      {org.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{org.description}</p>
                  <div className="space-y-1 text-xs">
                    <div><strong>Focus Areas:</strong> {org.areas.join(', ')}</div>
                    <div><strong>Location:</strong> {org.county}</div>
                    <div><strong>Phone:</strong> {org.phone}</div>
                    <div><strong>Email:</strong> {org.email}</div>
                  </div>
                  <button className="mt-3 w-full bg-blue-500 text-white py-1 px-2 rounded text-xs hover:bg-blue-600">
                    View Full Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationView;
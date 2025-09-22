import React, { useState } from 'react';
import './App.css';

// Import components
import LandingPage from './landing-page-component';
import NationalView from './national-view-component';
import CountyView from './county-view-component';
import OrganizationView from './organization-view-component';

function App() {
  const [currentView, setCurrentView] = useState('landing'); 
  // possible views: 'landing', 'national', 'county', 'organization'
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Navigation handlers
  const handleSelectCounty = (county) => {
    setSelectedCounty(county);
    setCurrentView('county');
  };

  const handleSelectState = (state) => {
    setSelectedState(state);
    setCurrentView('national');
  };

  const handleBackToNational = () => {
    setCurrentView('national');
    setSelectedCounty('');
  };

  const handleBackToCounty = () => {
    setCurrentView('county');
  };

  const handleExploreMap = () => {
    setCurrentView('national');
  };

  const handleViewOrganizations = () => {
    setCurrentView('organization');
  };

  const handleViewMetrics = () => {
    setCurrentView('national');
  };

  return (
    <div className="App">
      {currentView === 'landing' && (
        <LandingPage 
          onSelectCounty={handleSelectCounty} 
          onExploreMap={handleExploreMap}
        />
      )}
      
      {currentView === 'national' && (
        <NationalView 
          onSelectState={handleSelectState}
          onSelectCounty={handleSelectCounty}
          onViewOrganizations={handleViewOrganizations}
          onViewMetrics={handleViewMetrics}
        />
      )}
      
      {currentView === 'county' && (
        <CountyView 
          county={selectedCounty}
          onBack={handleBackToNational}
          onExploreMap={handleExploreMap}
        />
      )}
      
      {currentView === 'organization' && (
        <OrganizationView 
          county={selectedCounty}
          onBack={handleBackToCounty}
          onViewMetrics={handleViewMetrics}
        />
      )}
    </div>
  );
}

export default App;

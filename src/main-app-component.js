import React, { useState } from 'react';
import './App.css';

// Import components
import LandingPage from './components/LandingPage';
import NationalView from './components/NationalView';
import CountyView from './components/CountyView';
import OrganizationView from './components/OrganizationView';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'national', 'county', 'organization'
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleSelectCounty = (county) => {
    setSelectedCounty(county);
    setCurrentView('county');
  };

  const handleSelectState = (state) => {
    setSelectedState(state);
    setCurrentView('national'); // Stay on national view when selecting state
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

  return (
    <div className="App">
      {currentView === 'landing' && (
        <LandingPage onSelectCounty={handleSelectCounty} />
      )}
      
      {currentView === 'national' && (
        <NationalView 
          onSelectState={handleSelectState}
          onSelectCounty={handleSelectCounty}
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
        />
      )}
    </div>
  );
}

export default App;
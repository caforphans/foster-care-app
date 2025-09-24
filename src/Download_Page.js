import React from "react";
import TopNav from "./TopNav";

export default function Download_Page({ onSelectRegion, onSwitchView }) {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
    

      {/* Page Content */}
      <div className="flex-grow flex items-center justify-center">
        <h1 
          className="text-4xl text-gray-900"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Download Data Page
        </h1>
      </div>
    </div>
  );
}

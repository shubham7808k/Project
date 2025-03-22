import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Work from './Components/Work';
import About from './Components/About';  // Import the About component

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>  
          {/* Route for Work page */}
          <Route path="/work" element={<Work />} />

          {/* Route for About page */}
          <Route path="/about" element={<About />} />  {/* Add About route here */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

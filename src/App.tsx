import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementHomePage } from "./screens/ElementHomePage/ElementHomePage";

function App(): React.ReactElement {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<ElementHomePage />} />
          {/* Add more routes here as needed */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

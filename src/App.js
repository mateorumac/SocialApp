import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';  // Import your routes

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Always visible */}
      <AppRoutes />  {/* Page rendering logic */}
    </Router>
  );
};

export default App;

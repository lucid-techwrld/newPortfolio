import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center text-black w-screen">
      <Router>
        <HomeLayout />
      </Router>
    </div>
  );
}

export default App;

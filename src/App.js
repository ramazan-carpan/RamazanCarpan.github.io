import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/style.css';
import Layout from './components/layout/layout'; // Contains Header, Footer, and Outlet
import Intro from './components/layout/Intro';
import About from './components/layout/About';
import Work from './components/layout/Work';
import Service from './components/layout/Services'
import ProjectDetails from './components/layout/ProjectDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main layout for the homepage */}
        <Route path="/" element={<Layout />}>
          <Route index element={<>
            <Intro />
            <Service/>
            <About />
            <Work />
          </>} />
        </Route>

        {/* Separate layout for project details */}
        <Route path="/project/:id" element={<Layout />}>
          <Route index element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

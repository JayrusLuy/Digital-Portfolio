import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';

function App() {
  return (
    <Router basename="/Digital-Portfolio/">
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
    </Router>
  );
}

export default App;

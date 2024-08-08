import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import UnderConstruction from './components/under-construction/UnderConstruction';
import Home from './pages/Home/Home';
import Primer from './pages/Primer/Primer';
import JS from './pages/JavaScript/JavaScript';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Primer />} path="/primer" />
          <Route element={<JS />} path="/javascript" />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

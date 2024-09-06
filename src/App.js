import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Register from './register';
import Home from './Home'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

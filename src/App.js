import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() { 
  return (
    <div className="App">
      <Routes>
        
        <Route exact path="/"
          element={<Dashboard/>} />

        <Route path="/login"
          element={<LoginPage />}
        />

        <Route path="/signup"
          element={<SignupPage />}
        />
      </Routes>
    </div>
  );
}

export default App;


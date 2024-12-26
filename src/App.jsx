import { useState } from 'react'
import './App.css'
import Landing from './pages/landing'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App

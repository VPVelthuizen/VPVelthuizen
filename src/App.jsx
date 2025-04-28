// This page is to set up the router to change pages when links are clicked, etc, and to designate the landing as the default page
import { useState } from 'react'
import './App.css'
import Landing from './pages/landing'
import About from './pages/about'
import Projects from './pages/projects'
import Resume from './pages/resume'
import Contact from './pages/contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

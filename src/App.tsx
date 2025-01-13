import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TestBooking from './pages/TestBooking';
import About from './pages/About';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/tests" element={<TestBooking />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
          </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
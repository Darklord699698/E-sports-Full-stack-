import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Footer from './components/Footer'; // Import the Footer component
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';


const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};

export default App;
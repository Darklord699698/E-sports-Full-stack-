import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Footer from './components/Footer';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import YourGames from './components/Yourgames';
import Rewards from './components/Rewards';
import Achievements from './components/Achievements';


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
          <Route path="/yourgames" element={<YourGames/>} />
          <Route path="/rewards" element={<Rewards/>} /> {/* Add this line */}
          <Route path="/achievements" element={<Achievements/>} /> {/* Add this line */}
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    const storedUserName = localStorage.getItem('userName');
    if (user && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogin = (name) => {
    localStorage.setItem('user', 'true');
    localStorage.setItem('userName', name);
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout} />
      <main className="flex-grow overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/yourgames" element={<YourGames />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

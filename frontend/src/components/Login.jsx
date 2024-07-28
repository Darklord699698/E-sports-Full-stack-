import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ onLogin, isLoggedIn, username, onLogout }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin); // Toggle between login and sign-up
    setMessage(''); // Clear any previous messages
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update checkbox state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? 'http://localhost:4000/api/login' : 'http://localhost:4000/api/register';
    const body = isLogin ? { email, password } : { name, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        if (isLogin) {
          // Save user info to local storage and update login state
          localStorage.setItem('user', JSON.stringify({ name: data.name })); // Adjust according to API response
          onLogin(data.name); // Call the onLogin function to update the login state
          navigate('/'); // Redirect to home page
        } else {
          // Handle successful registration, switch to login form
          setIsLogin(true);
        }
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: 'url("https://cdn.oneesports.gg/cdn-data/2024/04/Anime_OnePiece_Zoro_Sword_Attack.jpg")' }}
    >
      <button
        onClick={handleClose}
        className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-75 rounded-lg shadow-md">
        {isLoggedIn ? (
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Welcome, {username}!</h2>
            <button
              onClick={onLogout}
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        ) : isLogin ? (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="policy"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="policy" className="text-gray-600">
                  I agree to the <a href="/privacypolicy" className="text-blue-500 hover:underline">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={handleSwitchForm}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="policy"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="policy" className="text-gray-600">
                  I agree to the <a href="/privacypolicy" className="text-blue-500 hover:underline">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{' '}
              <button
                onClick={handleSwitchForm}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Auth;

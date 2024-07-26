import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import Lottie from 'lottie-react'; // Import Lottie
import animationData5 from '../assets/animationData5.json'; // Replace with your Lottie animation file

const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen text-gray-200 bg-gray-900">
      <header className="relative flex items-center justify-between p-6 text-white bg-gray-800">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-700 rounded-full top-5 right-5 hover:bg-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="max-w-4xl p-8 mx-auto space-y-8 bg-indigo-900 rounded-lg shadow-lg">
        
        <section>
          <h2 className="mb-4 text-3xl font-bold">Privacy Policy</h2>
          <p className="mb-6">
            At GameZone, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services.
          </p>
          <h3 className="mb-3 text-2xl font-semibold">Information We Collect</h3>
          <ul className="mb-6 list-disc list-inside">
            <li className="mb-3">Personal Information: We may collect personal information such as your name, email address, and contact details when you register or interact with our site.</li>
            <li className="mb-3">Usage Data: We collect information about your interaction with our site, including IP addresses, browser types, and pages visited.</li>
          </ul>
          <h3 className="mb-3 text-2xl font-semibold">How We Use Your Information</h3>
          <ul className="mb-6 list-disc list-inside">
            <li className="mb-3">To Provide Services: We use your information to provide and improve our services, including personalized content and customer support.</li>
            <li className="mb-3">To Communicate: We may use your contact information to send you updates, newsletters, and promotional materials.</li>
          </ul>
          <h3 className="mb-3 text-2xl font-semibold">Data Protection</h3>
          <p className="mb-6">
            We implement various security measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          <h3 className="mb-3 text-2xl font-semibold">Your Rights</h3>
          <p className="mb-6">
            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
          </p>
          <h3 className="mb-3 text-2xl font-semibold">Changes to This Policy</h3>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our site constitutes acceptance of those changes.
          </p>
          <h3 className="mb-3 text-2xl font-semibold">Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@gamezone.com" className="text-teal-400 hover:underline">support@gamezone.com</a>.
          </p>
        </section>
        <section className="text-center">
          <Lottie animationData={animationData5} loop={true} className="w-full max-w-md mx-auto mb-8" />
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

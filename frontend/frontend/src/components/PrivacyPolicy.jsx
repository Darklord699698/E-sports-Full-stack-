import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative flex items-center justify-between p-5 text-white bg-gray-800">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <button
          onClick={handleClose}
          className="absolute p-2 text-white bg-gray-800 rounded-full top-5 right-5 hover:bg-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main className="p-5">
        <h2 className="mb-4 text-2xl font-bold">Privacy Policy</h2>
        <p className="mb-4">
          At GameZone, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Information We Collect</h3>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">Personal Information: We may collect personal information such as your name, email address, and contact details when you register or interact with our site.</li>
          <li className="mb-2">Usage Data: We collect information about your interaction with our site, including IP addresses, browser types, and pages visited.</li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold">How We Use Your Information</h3>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">To Provide Services: We use your information to provide and improve our services, including personalized content and customer support.</li>
          <li className="mb-2">To Communicate: We may use your contact information to send you updates, newsletters, and promotional materials.</li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold">Data Protection</h3>
        <p className="mb-4">
          We implement various security measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Your Rights</h3>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Changes to This Policy</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our site constitutes acceptance of those changes.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@gamezone.com" className="text-blue-500">support@gamezone.com</a>.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

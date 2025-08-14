// src/pages/Support.jsx
import React from "react";

const Support = () => {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <p className="text-gray-700 mb-4">
        If you need help, please contact us via email or chat:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Email: support@example.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Live Chat: Available 9am - 6pm</li>
      </ul>
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <p>Q: How do I reset my password?</p>
        <p className="text-gray-600">A: Click on "Forgot Password" on the login page.</p>
      </div>
    </div>
  );
};

export default Support;

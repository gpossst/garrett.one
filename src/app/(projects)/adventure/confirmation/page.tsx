import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-700">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Adventure Awaits!
        </h1>
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Thank you for joining us! Your adventure has been confirmed.
          </p>
          <p className="text-gray-600">
            Your email has been confirmed and you can now log in to your
            account!
          </p>
        </div>
        <a
          href="/"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-200"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default ConfirmationPage;

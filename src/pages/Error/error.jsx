import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-red mb-4">
          Oops! An Error Occurred
        </h2>
        <p className="text-gray-700 mb-4">
          We apologize for the inconvenience. Something went wrong.
        </p>
        <button
          onClick={goBack}
          className="bg-red text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

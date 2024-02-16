import React from "react";
import { useNavigate } from "react-router-dom";

const BookingSuccessfulPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Booking Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Thank you for booking with us. Your reservation has been successfully
          confirmed.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Kindly check your Email for more Information.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={()=>navigate("/")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessfulPage;

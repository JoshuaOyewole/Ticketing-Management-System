import React from "react";
import { useNavigate } from "react-router-dom";


function ManageBooking() {
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('booking-status/AVLQ5P')
  };

  return (
    <form className="manage-booking-form mx-4 my-4 lg:mx-14" onSubmit={handleBooking}>
      <p className="message text-sm lg:text-base lg:mt-6 text-slate-800">
        Manage your upcoming trip.
      </p>
      <div className="lg:flex lg:justify-between lg:items-end mt-4 lg:mt-10"> 
        <div className="flex flex-col w-full lg:w-[40%]">
          <h4 className="font-bold">Reference Number</h4>
          <input
            type="text"
            name="bookingNo"
            placeholder={"Enter Booking Reference Number"}
            id="bookingNo"
            className="lg:border-b-2 lg:text-sm lg:mt-3 py-1 px-2 lg:py-2 lg:px-4"
            required
          />
        </div>
        <div className="flex flex-col mt-1 mb-3 lg:mt-0 lg:mb-0 lg:w-[40%]">
          <h4 className="font-bold">Surname</h4>
          <input
            type="text"
            name="bookingNo"
            id="bookingNo"
            placeholder={"Enter Surnmae"}
            className="lg:border-b-2 lg:text-sm lg:mt-3 lg:py-2 py-1 px-2 lg:px-4"
            required
          />
        </div>

        <div className="submitForm lg:justify-end lg:w-[15%]">
          <input
            type="submit"
            className="text-white active:border-none active:outline-0 focus:outline-0 focus:border-none bg-primary py-1 lg:py-3 px-6 lg:px-8 hover:bg-primary-200 hover:text-white rounded-full"
            value={"Search"}
          />
        </div>
      </div>
    </form>
  );
}

export default ManageBooking;

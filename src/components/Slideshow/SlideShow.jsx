import React, {useState} from "react";
import BookFlight from "../Tabs/BookFlight";
import { MdOutlineFlight, MdFlightTakeoff } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import {
  BsFillBagDashFill,
  BsFillCheckCircleFill,
  BsStarFill,
} from "react-icons/bs";

import ManageBooking from "../Tabs/ManageBooking";

function SlideShow() {
const [activeTab, setActiveTab] = useState(true);


  return (
    <div className="slideshow flex flex-col h-[95vh]  lg:h-[100vh] 1xl:h-[90vh]">
      {/* BG IMAGE */}
      <div className="h-3/5 bg-airport bg-no-repeat bg-center lg:bg-top-center bg-cover lg:h-1/2"></div>

      <div className="booking flex justify-center h-1/3 lg:h-1/2 bg-grey lg:rounded-2xl">
        <div className="booking-container rounded-lg -mt-8 w-[93%] bg-white xl:max-w-[85%] 1xl:max-w-[80%] min-h-[300px] lg:min-h-[340px]  1xl:h-full lg:-mt-10 lg:ml-auto lg:mr-auto">
          <div className="tabs grid grid-cols-2 lg:grid-cols-5">
            <button 
              className="flex font-bold text-left border-b-primary  py-3 border-b-2 lg:py-4 lg:px-5 items-center justify-center  lg:text-primary   lg:font-normal"
              onClick={()=>setActiveTab(false)}
            >
              <MdOutlineFlight className="mr-2 text-xl" />
              Book My Flight
            </button>
            <button 
              className="flex justify-center border-b-primary border-b-2 lg:py-4 lg:px-5 items-center lg:justify-center bg-primary focus:bg-white text-gray-50 focus:text-black hover:bg-primary-200"
              onClick={()=>setActiveTab(true)}
            >
              <BsFillBagDashFill className="mr-2 text-lg" />
              Manage My Bookings
            </button>
            <button className="hidden lg:border-b-primary lg:border-b-2 lg:py-4 lg:px-5 lg:items-center lg:justify-center lg:bg-primary lg:text-gray-50 hover:bg-primary-200">
              <BsFillCheckCircleFill className="lg:mr-2" />
              Check in
            </button>
            <button className="hidden lg:border-b-primary lg:border-b-2 lg:py-4 lg:px-5 lg:items-center lg:justify-center lg:bg-primary lg:text-gray-50 hover:bg-primary-200">
              <MdFlightTakeoff className="lg:mr-2" />
              Flight Status
            </button>
            <button className="hidden lg:border-b-primary lg:border-b-2 lg:py-4 lg:px-5 lg:items-center lg:justify-center lg:bg-primary lg:text-gray-50 hover:bg-primary-200 ">
              <BsStarFill className="lg:mr-2" />
              Check Best Price
            </button>
          </div>
          <div className="filter-content">
            {activeTab ? <ManageBooking /> : <BookFlight/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;

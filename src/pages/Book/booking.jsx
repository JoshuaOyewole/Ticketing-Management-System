import React, { useState } from "react";
import Logo from "../../assets/logo-big.png";
import { GrSelect } from "react-icons/gr";
import { BsFillInfoSquareFill, BsCreditCard } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { FcPaid } from "react-icons/fc";
import DatePicker from "react-datepicker";
import { Link, useNavigate,useParams } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const params = useParams();
  const [bookingDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());

  /* FUNCTIONS FOR HANDLING DEPARTURE AND ARRIVING DATE */
  const handleDepartureDate = (date) => setDepartureDate(date);
  const handleArrivalDate = (date) => setArrivalDate(date);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(params.id)
    navigate('/success');

  };

  return (
    <div className="relative">
      <nav className="bg-primary-300 text-white text-right py-2 px-3 lg:px-12 font-poppin">
        Your Safety is our Priority
      </nav>

      {/* HEADER */}
      <header className="px-3 py-2 lg:py-4 bg-white">
        <div className="md:max-w-[700px] lg:max-w-4xl 1xl:max-w-6xl mx-auto bg-white">
          <Link to={'/'}>
            <img src={Logo} alt="logo" className="w-[120px]" />
          </Link>
        </div>
      </header>

      <section className="stepsContainer px-3 py-2 lg:my-8">
        <div className=" wrapper md:max-w-[700px] lg:max-w-4xl 1xl:max-w-6xl mx-auto">
          <ol className="grid grid-cols-5 lg:grid-cols-5 items-center justify-center text-center">
            <li className="hidden lg:flex items-center flex-col">
              <span className="stepIcon text-2xl mb-2">
                <GrSelect />
              </span>
              <span className="stepTitle text-sm">Flight Selection</span>
            </li>
            <li className="flex items-center basis-8  lg:flex-col">
              <span className="stepIcon text-2xl lg:mb-2">
                <BsFillInfoSquareFill />
              </span>
              <span className="stepTitle pl-2 text-sm">
                Passenger Information
              </span>
            </li>
            <li className="hidden lg:flex items-center flex-col">
              <span className="stepIcon text-2xl mb-2">
                <GrAdd />
              </span>
              <span className="stepTitle text-sm">Additional Services</span>
            </li>
            <li className="hidden lg:flex items-center flex-col">
              <span className="stepIcon text-2xl mb-2">
                <BsCreditCard />
              </span>
              <span className="stepTitle text-sm">Payments</span>
            </li>
            <li className="hidden lg:flex items-center flex-col">
              <span className="stepIcon text-2xl mb-2">
                <FcPaid />
              </span>
              <span className="stepTitle text-sm">Confirmation</span>
            </li>
          </ol>
        </div>
      </section>

      {/* MAIN */}
      <div className=" wrapper md:max-w-[700px] lg:max-w-4xl 1xl:max-w-6xl mx-auto">
        <div className="flex justify-center flex-col lg:flex-row">
          <main className="flex flex-col left lg:w-[85%] justify-center">
            <div className="top mb-2 lg:mb-6 bg-white rounded-md py-2 lg:pt-6 lg:pb-1 ">
              <div className="header after:border-b-2 after:border-[#f60] after:border-solid after:flex">
                <h2 className="title text-center font-bold text-lg pb-2">
                  Passenger Information
                </h2>
              </div>
              <div className="py-3 px-3 md:px-4 lg:px-6">
                <h2>
                  <span className="font-bold">1. Passenger:</span> ADULT
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-col py-2 lg:py-4 w-full lg:w-[10%]">
                      <label
                        htmlFor="gender"
                        className="mb-2 font-semibold text-sm"
                      >
                        Gender
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        placeholder="Gender"
                        className="text-sm text-gray-600 outline-none   w-full border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                      >
                        <option value="Gender" disabled>
                          Gender
                        </option>
                        <option
                          label="Mr"
                          value="Mr"
                          className="text-xs text-gray-600"
                        >
                          Mr
                        </option>
                        <option
                          label="Mrs"
                          value="Mrs"
                          className="text-xs text-gray-600"
                        >
                          Mrs
                        </option>
                        <option
                          label="Miss"
                          value="Miss"
                          className="text-xs text-gray-600"
                        >
                          Miss
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col py-2 lg:py-4 w-full lg:w-[28%]">
                      <label
                        htmlFor="firstName"
                        className="mb-2 font-semibold text-sm"
                      >
                        First Name:
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                      />
                    </div>

                    <div className="flex flex-col py-2 lg:py-4 w-full lg:w-[28%]">
                      <label
                        htmlFor="lastName"
                        className="mb-2 font-semibold text-sm"
                      >
                        Last Name:
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                      />
                    </div>

                    <div className="flex flex-col py-2 lg:py-4 w-full lg:w-[28%]">
                      <label
                        htmlFor="otherName"
                        className="mb-2 font-semibold text-sm"
                      >
                        Other Name:
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="booking-date flex flex-col py-2">
                    <label
                      htmlFor="otherName"
                      className="mb-2 font-semibold text-sm"
                    >
                      Booking Date:
                    </label>
                    <DatePicker
                      selected={bookingDate}
                      className="text-sm text-gray-600 outline-none lg:w-1/5 border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                      name="travellingOn"
                      disabled
                    />
                  </div>

                  <div className="booking-date py-2">
                    <p className="text-sm  italic mb-1">
                      Special request is required for this passenger
                    </p>
                    <div>
                      <input
                        type="checkbox"
                        name="wheelChair"
                        id="wheelChair"
                      />
                      <label htmlFor="wheelChair" className="ml-2 text-sm ">
                        Wheel Chair
                      </label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        name="hearingImpaired"
                        id="hearingImpaired"
                      />
                      <label
                        htmlFor="hearingImpaired"
                        className="ml-2 text-sm "
                      >
                        Hearing Impaired Passenger
                      </label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        name="visuallyImpaired"
                        id="visuallyImpaired"
                      />
                      <label
                        htmlFor="visuallyImpaired"
                        className="ml-2 text-sm "
                      >
                        Visually Impaired Passenger
                      </label>
                    </div>
                  </div>

                  <div className="top mb-2 lg:mb-6 bg-white rounded-md py-2 lg:pt-6 lg:pb-1 ">
                    <div className="header after:border-b-2 after:border-[#f60] after:border-solid after:flex">
                      <h2 className="title text-center font-bold text-lg pb-2">
                        Flight Details
                      </h2>
                    </div>
                    <div className="flex items-center justify-between gap-x-8 py-3 px-0 lg:px-6">
                      <div className="flex flex-col w-[46%] lg:w-1/2">
                        <label
                          htmlFor="departure"
                          className="mb-2 font-semibold text-sm"
                        >
                          From:
                        </label>
                        <input
                          type="text"
                          name="departure"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[46%] lg:w-1/2">
                        <label
                          htmlFor="destination"
                          className="mb-2 font-semibold text-sm"
                        >
                          To:
                        </label>
                        <input
                          type="text"
                          name="destination"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap py-3 px-0 lg:px-6">
                      <div className="flex flex-col w-[48%] lg:w-[32%]">
                        <label
                          htmlFor="airline"
                          className="mb-2 font-semibold text-sm"
                        >
                          Airline
                        </label>
                        <input
                          type="text"
                          name="airline"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[48%] lg:w-[32%]">
                        <label
                          htmlFor="flightNo"
                          className="mb-2 font-semibold text-sm"
                        >
                          Flight Number:
                        </label>
                        <input
                          type="text"
                          name="flightNo"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>

                      <div className="booking-date flex flex-col mt-3 lg:mt-0 w-full lg:w-[32%]">
                        <label
                          htmlFor="depDate"
                          className="mb-2 font-semibold text-sm"
                        >
                          Departure Date:
                        </label>
                        <DatePicker
                          selected={departureDate}
                          onChange={handleDepartureDate}
                          className="text-sm text-gray-600  outline-none w-full border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                          name="depDate"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3 px-0 lg:px-6">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="depTerminal"
                          className="mb-2 font-semibold text-sm"
                        >
                          Departure Terminal
                        </label>
                        <input
                          type="text"
                          name="depTerminal"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-x-6 py-3 px-0 lg:px-6">
                      <div className="flex flex-col w-[47%] lg:w-3/5">
                        <label
                          htmlFor="arrTerminal"
                          className="mb-2 font-semibold text-sm"
                        >
                          Arrival Terminal
                        </label>
                        <input
                          type="text"
                          name="arrTerminal"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[47%] lg:w-2/4">
                        <label
                          htmlFor="arrDate"
                          className="mb-2 font-semibold text-sm"
                        >
                          Arrival Date
                        </label>
                        <DatePicker
                          selected={arrivalDate}
                          onChange={handleArrivalDate}
                          className="text-sm text-gray-600 outline-none w-[98%] lg:w-full border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                          name="arrDate"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap py-3 px-0 lg:px-6">
                      <div className="flex flex-col w-[47%] lg:w-[32%]">
                        <label
                          htmlFor="seatClass"
                          className="mb-2 font-semibold text-sm"
                        >
                          Seat Class
                        </label>
                        <select
                          name="gender"
                          id="gender"
                          placeholder="Gender"
                          className="text-sm text-gray-600 outline-none lg:w-full border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                        >
                          <option value="seatClass" disabled>
                            Seat Class
                          </option>
                          <option
                            label="Economy"
                            value="Economy"
                            className="text-xs text-gray-600"
                          >
                            Economy
                          </option>
                          <option
                            label="Premium Economy"
                            value="Premium Economy"
                            className="text-xs text-gray-600"
                          >
                            Premium Economy
                          </option>
                          <option
                            label="First Class"
                            value="First Class"
                            className="text-xs text-gray-600"
                          >
                            First Class
                          </option>
                          <option
                            label="Business Class"
                            value="Business Class"
                            className="text-xs text-gray-600"
                          >
                            Business Class
                          </option>
                        </select>
                      </div>
                      <div className="flex flex-col w-[47%] lg:w-[32%]">
                        <label
                          htmlFor="seatNumber"
                          className="mb-2 font-semibold text-sm"
                        >
                          Seat Number
                        </label>
                        <input
                          type="text"
                          name="seatNumber"
                          className="text-sm text-gray-600 py-2 px-4 outline-1 border border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col mt-4 lg:mt-0 lg:w-[32%]">
                        <label
                          htmlFor="peba"
                          className="mb-2 font-semibold text-sm"
                        >
                          Purchase Extra Baggage Allowance
                        </label>
                        <select
                          name="peba"
                          id="peba"
                          placeholder="Purchase Extra Baggage Allowance"
                          className="text-sm text-gray-600 outline-none lg:w-full border-gray-500 border-[1px] py-[0.45rem] px-2 rounded-md"
                        >
                          <option
                            value="Purchase Extra Baggage Allowance"
                            disabled
                          >
                            Purchase Extra Baggage Allowance
                          </option>
                          <option
                            label="1"
                            value="1"
                            className="text-xs text-gray-600"
                          >
                            1
                          </option>
                          <option
                            label="2"
                            value="2"
                            className="text-xs text-gray-600"
                          >
                            2
                          </option>
                          <option
                            label="3"
                            value="3"
                            className="text-xs text-gray-600"
                          >
                            3
                          </option>
                          <option
                            label="4"
                            value="4"
                            className="text-xs text-gray-600"
                          >
                            4
                          </option>
                        </select>
                      </div>
                    </div>
                    <p className="px-0 lg:px-6 text-sm py-3">
                      <span className="font-semibold">NOTE: </span> 25 kilos is
                      provided for every passenger. You can purchase more for
                      $10/kilo
                    </p>
                  </div>

                  {/* FARE BREAKDWON */}
                  <div className="top mb-2 lg:mb-6 bg-white rounded-md py-2 lg:pt-6 lg:pb-1 ">
                    <div className="header after:border-b-2 after:border-[#f60] after:border-solid after:flex">
                      <h2 className="title text-center font-bold text-lg pb-2">
                        FARE BREAKDWON
                      </h2>
                    </div>

                    <div className="flex mt-8 gap-x-6 px-2 lg:px-6">
                      <div className="flex flex-col w-[32%]">
                        <label
                          htmlFor="baseFare"
                          className="mb-2 font-semibold text-sm"
                        >
                          Base Fare
                        </label>
                        <p>$ 100</p>
                      </div>
                      <div className="flex flex-col w-[32%]">
                        <label
                          htmlFor="surcharge"
                          className="mb-2 font-semibold text-sm"
                        >
                          Surcharge
                        </label>
                        <p>$ 80</p>
                      </div>
                      <div className="flex flex-col w-[32%]">
                        <label
                          htmlFor="fuelInsurranceCharge"
                          className="mb-2 font-semibold text-sm"
                        >
                          Fuel Insurance Charge
                        </label>
                        <p>$ 30</p>
                      </div>
                    </div>

                    <div className="flex mt-8 gap-x-6 px-2 lg:px-6">
                      <div className="flex flex-col w-[32%]">
                        <label
                          htmlFor="passengerCharge"
                          className="mb-2 font-semibold text-sm"
                        >
                          Passenger Service Charge
                        </label>
                        <p>$ 0</p>
                      </div>
                      <div className="flex flex-col w-[32%]">
                        <label
                          htmlFor="ticketCharge"
                          className="mb-2 font-semibold text-sm"
                        >
                          Ticketing Service Charge
                        </label>
                        <p>$ 80</p>
                      </div>
                    </div>
                    <div className="flex px-2 lg:px-6 py-5 items-center ">
                      <h2 className="font-bold uppercase text-lg w-1/2 lg:w-[35%]">
                        Total Amount
                      </h2>
                      <p className="font-bold text-lg lg:w-1/6">$ 215</p>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Submit"
                    className="bg-primary text-white px-8 rounded-lg ml-6 mb-6 py-3 hover:bg-primary-300 transition-all"
                  />
                </form>
              </div>
            </div>
          </main>
          {/* 
          <aside className="lg:w-[27%] sticky top-0">
            <div className="top bg-primary-200 text-white rounded-md py-1 px-4 lg:px-8">
              <h2 className="title text-left  font-bold text-lg pb-2">
                Order Reservation
              </h2>
            </div>
            //OUTBOUND 
            <div className="top bg-white text-black rounded-md py-1 px-4 lg:px-4 my-1">
              <h2 className="title text-left  font-bold text-lg pb-2">
                Outbound
              </h2>
            </div>
            //FLIGHT INFO 
            <div className="top bg-white text-black rounded-md py-1 my-1">
              <div className="px-3 py-2 after:bottom-1 after:border-primary-200 after:border-dotted">
                <h4 className="font-bold text-base">Departing</h4>
                <p className="text-sm">Portharcourt</p>
                <p className="text-sm">29/01/2023 - 16:10</p>
              </div>
              <div className="px-3 py-2 after:bottom-1 after:border-primary-200 after:border-dotted">
                <h4 className="font-bold text-base">Arriving</h4>
                <p className="text-sm">Lagos</p>
                <p className="text-sm">29/01/2023 - 17:10</p>
              </div>
              <div className="flex px-3 justify-between">
                <h4 className="font-bold text-sm">Flight: N2-314</h4>
                <h4 className="font-bold text-sm">Cabin: Economy</h4>
                <div></div>
              </div>
            </div>
            //FEE SUMMARY 
            <div className="bottom bg-white text-black rounded-md py-1 my-1">
              <div className="flex justify-between items-center px-3 py-2 ">
                <p className="text-sm">Ticket Fare</p>
                <p className="text-sm">94,048.00 NGN</p>
              </div>

              <div className="flex justify-between items-center px-3 py-2 ">
                <h4 className="font-bold underline text-sm">Taxes</h4>
                <p className="text-sm underline">7,952.00 NGN</p>
              </div>
              <div className="flex justify-between items-center px-3 py-2 ">
                <h4 className="font-bold underline text-sm">Surcharge</h4>
                <p className="text-sm underline">25,000.00 NGN</p>
              </div>

              <div className="flex justify-between items-center px-3 py-2 ">
                <p className="text-sm">SMS Fee</p>
                <p className="text-sm">165.00 NGN</p>
              </div>

              <div className="flex justify-between items-center px-3 py-2 ">
                <h4 className="font-bold text-base">Total</h4>
                <p className="text-base">127,160.00 NGN</p>
              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </div>
  );
}

export default Booking;

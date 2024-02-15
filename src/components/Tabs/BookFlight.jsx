import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BookFlight() {
  const navigate = useNavigate();

  const [travellingDate, setTravellingDate] = useState(new Date());
  const [arrivingDate, setArrivingDate] = useState(new Date());

  const [ticketInfo, setTicketInfo] = useState({
    tripType: "ONE_WAY",
    from: "",
    to: "",
    gender: "Mr",
    seatClass: "Economy",
    firstname: "",
    lastname: "",
    othernames: "",
    bookingDate: "",
    departureDate: "",
    arrivalDate: "",
    airline: "",
    flight_no: "",
    depTerminal: "",
    arrTerminal: "",
    seatNo: "",
    extraBuggage: "",
    surcharge: "80",
    baseFare: "100",
    ticketingCharge: "5",
    fuelInsuranceCharge: "30",
    totalCharge: "215",
  });
  const [findFlightInfo, setFindFlightInfo] = useState({
    flyingFrom: "",
    flyingTo: "",
  });

  const [roundTrip, setRoundTrip] = useState(false);

  const handleTripType = () => {
    setRoundTrip(!roundTrip);
  };

  const handleChange = (e) => {
    setFindFlightInfo({
      ...findFlightInfo,
      [e.target.name]: e.target.value,
    });
  };

  /* FUNCTIONS FOR HANDLING DEPARTURE AND ARRIVING DATE */
  const handleTravellingDate = (date) => {
    setTravellingDate(date);
  };
  const handleArrivingDate = (date) => {
    setArrivingDate(date);
  };

  async function findFlights(e) {
    e.preventDefault();

    const { flyingFrom, flyingTo } = findFlightInfo;
    try {
      const response = await axios.get(
        `http://localhost:5500/flights/availability`,
        {
          params: {
            flyingFrom,
            flyingTo,
            departureDate: travellingDate,
            arrivalDate: arrivingDate,
          },
        }
      );
      let data = await response.data;
      if (data.length >= 1) {
        navigate("/book/passengerInfo", {
          state: { res: response.data, info: findFlightInfo },
        });
      }
    } catch (error) {
      console.log(error?.response?.data.message);
    }
  }

  /* 
    1. search for the departure arena and arrival arena from the findFlights ENDPOINT
    2. Redirect to booking page
    3. send the RESPONSE (List of available flights to the next page)
    4. Start registering and SEND the data to the DB after registration
    
    */

  return (
    <form className="filter-form lg:mx-14">
      {/* TRIP TYPE */}
      <div className=" flex items-center gap-x-3 rounded-lg lg:rounded-xl lg:mb-4 px-2 lg:px-8 py-2 lg:py-3 lg:mt-2  bg-primary-light ">
        <span className="select-trip lg:pr-2">Trip Type:</span>
        <div className="flex gap-x-1 lg:px-2">
          <input
            type="radio"
            name="tripType"
            id="tripType"
            value={ticketInfo.tripType}
            defaultChecked
            onChange={handleTripType}
            className="lg:mr-1"
            required
          />
          <label htmlFor="tripType" className="text-sm">
            One Way
          </label>
        </div>
        <div className="flex gap-x-1 lg:px-2">
          <input
            type="radio"
            name="tripType"
            id="tripType"
            value={"ROUND_TRIP"}
            className="lg:mr-1"
            onChange={handleTripType}
            required
          />
          <label htmlFor="tripType" className="text-sm">
            Round Trip
          </label>
        </div>
      </div>
      {/* FILTER SEARCH */}
      <div className="lg:flex lg:flex-col">
        <div className="flex flex-col gap-y-4 lg:grid px-3 py-4 lg:justify-center lg:items-center lg:grid-cols-2 lg:mt-4">
          <div className="flex items-center lg:border-r lg:border-primary ">
            {/* FLYING FROM */}
            <div className="flex flex-col basis-3/5 lg:basis-1/3">
              <div id="depPortArea" className="lg:mb-4">
                <p className="mb-2 text-sm font-semibold">Flying from</p>
                <select
                  name="flyingFrom"
                  id="flyingFrom"
                  onChange={handleChange}
                  placeholder="From"
                  className="text-sm text-gray-600 outline-none lg:w-full"
                  required
                >
                  <option
                    label="--Select--"
                    value=""
                    className="text-xs text-gray-600"
                  >
                    --Select--
                  </option>
                  <option
                    label="Denmark (DEN)"
                    value="denmark"
                    className="text-xs text-gray-600"
                  >
                    Denmark (Den)
                  </option>
                  <option
                    label="Yemen (Yem)"
                    value="yemen"
                    className="text-xs text-gray-600"
                  >
                    Yemen (Yem)
                  </option>
                  <option
                    label="Syria (Syr)"
                    value="syria"
                    className="text-xs text-gray-600"
                  >
                    Syria (Syr)
                  </option>
                  <option
                    label="Russia (Rus)"
                    value="russia"
                    className="text-xs text-gray-600"
                  >
                    Russia (Rus)
                  </option>
                  <option
                    label="Ukraine (Ukr)"
                    value="ukraine"
                    className="text-xs text-gray-600"
                  >
                    Ukraine (Ukr)
                  </option>
                  <option
                    label="Isreal (Isr)"
                    value="isreal"
                    className="text-xs text-gray-600"
                  >
                    Isreal (Isr)
                  </option>
                  <option
                    label="Palestine (Pal)"
                    value="palestine"
                    className="text-xs text-gray-600"
                  >
                    Palestine (Pal)
                  </option>
                  <option
                    label="Chile (Chi)"
                    value="chile"
                    className="text-xs text-gray-600"
                  >
                    Chile (Chi)
                  </option>
                  <option
                    label="Iraq  (Irq)"
                    value="iraq"
                    className="text-xs text-gray-600"
                  >
                    Iraq (Irq)
                  </option>
                </select>
              </div>
              {/* <p>EGY</p> */}
            </div>

            {/* SYMBOL */}
            <div className="hidden lg:flex items-center justify-center basis-1/5 lg:basis-1/3">
              <span className="text-3xl text-primary">
                <BsArrowRightCircle />
              </span>
            </div>

            {/* FLYING TO */}
            <div className="flex flex-col basis-3/5 lg:basis-1/3">
              <div id="arrArea" className="lg:mb-4">
                <p className="mb-2 text-sm font-semibold">Flying To</p>
                <select
                  name="flyingTo"
                  id="flyingTo"
                  placeholder="From"
                  onChange={handleChange}
                  className="text-sm text-gray-600 outline-none lg:w-4/5"
                  required
                >
                  <option value="--To--">--To--</option>
                  <option
                    label="England (ENG)"
                    value="England"
                    className="text-xs text-gray-600"
                  >
                    England (ENG)
                  </option>
                  <option
                    label="Turkey (TKY)"
                    value="Turkey"
                    className="text-xs text-gray-600"
                  >
                    Turkey (TKY)
                  </option>
                  <option
                    label="Germany (GER)"
                    value="Germany"
                    className="text-xs text-gray-600"
                  >
                    Germany (GER)
                  </option>
                  <option
                    label="USA (USA)"
                    value="USA"
                    className="text-xs text-gray-600"
                  >
                    USA (USA)
                  </option>
                  <option
                    label="Mexico (MEX)"
                    value="Mexico"
                    className="text-xs text-gray-600"
                  >
                    Mexico (MEX)
                  </option>
                </select>
              </div>
              {/* <p>USA</p> */}
            </div>
          </div>
          <div className="grid grid-cols-6 gap lg:grid-cols-5 lg:justify-between ">
            {/* TRAVELLING ON */}
            <div className="col-span-3 lg:col-span-2 lg:flex order-3 lg:order-1 lg:flex-col  ">
              <div
                id="depDate"
                className="flex justify-center lg:items-center flex-col lg:mb-4"
              >
                <p className="mb-2 text-sm font-semibold">Travelling On</p>
                <DatePicker
                  selected={travellingDate}
                  onChange={handleTravellingDate}
                  className="outline-none lg:text-center"
                  name="departureDate"
                  dateFormat="yyyy/MM/dd"
                />
              </div>
              {roundTrip && (
                <div
                  id="arrDate"
                  className="lg:mb-4"
                  style={{ marginTop: "0.7rem" }}
                >
                  <p className="mb-2 text-sm font-semibold">Returning On</p>
                  <DatePicker
                    selected={arrivingDate}
                    onChange={handleArrivingDate}
                    className="outline-none"
                    name="returningOn"
                    dateFormat="yyyy/MM/dd"
                  />
                </div>
              )}
              {/* <button className="lg:px-1 lg:py-2 lg:border-primary lg:border lg:text-primary lg:rounded-3xl lg:w-3/5 hover:bg-primary hover:text-white">
                        Change
                      </button> */}
            </div>
            {/* SYMBOL */}
            <div className=" hidden lg:flex items-center lg:order-2 col-span-1 ">
              <span className="text-3xl text-primary">
                <BsArrowRightCircle />
              </span>
            </div>
            {/* basis-3/5 lg:basis-1/3 */}
            <div className="col-span-3 lg:col-span-2 order-1 lg:order-3">
              <p className="lg:mb-2 text-sm font-semibold">People Travelling</p>
              <div className="lg:flex lg:flex-col lg:gap-y-2">
                <div className="flex gap-x-6 justify-start lg:justify-between">
                  <span className="text-sm lg:w-3/5 text-gray-900" id="adult">
                    Adult <span className="hidden lg:inline">(12+)</span>
                  </span>
                  <select
                    name="adultNo"
                    id="adults"
                    placeholder="Adult(12+)"
                    className="text-sm text-gray-600 outline-none w-1/3 lg:w-2/5"
                  >
                    <optgroup label="Adult" value="12+" defaultValue={1}>
                      <option
                        label="Adult (12+)"
                        value="0"
                        disabled
                        className="text-xs text-gray-600"
                      >
                        Adult (12+)
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
                      <option
                        label="5"
                        value="5"
                        className="text-xs text-gray-600"
                      >
                        5
                      </option>
                      <option
                        label="6"
                        value="6"
                        className="text-xs text-gray-600"
                      >
                        6
                      </option>
                      <option
                        label="7"
                        value="7"
                        className="text-xs text-gray-600"
                      >
                        7
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div className="flex gap-x-6 justify-start lg:justify-between">
                  <span className="text-sm lg:w-3/5 text-gray-900" id="child">
                    Child <span className="hidden lg:inline">(2-12)</span>
                  </span>
                  <select
                    name="childNo"
                    id="children"
                    placeholder="Child (2-12)"
                    className="text-sm lg:text-xs text-gray-600 outline-none w-1/3 lg:w-2/5"
                  >
                    <optgroup label="Child" value="2+">
                      <option
                        label="Child (2-12)"
                        value="0"
                        disabled
                        className="text-xs text-gray-600"
                      >
                        Child (2-12)
                      </option>
                      <option
                        label="0"
                        value="0"
                        className="text-xs text-gray-600"
                      >
                        0
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
                      <option
                        label="5"
                        value="5"
                        className="text-xs text-gray-600"
                      >
                        5
                      </option>
                      <option
                        label="6"
                        value="6"
                        className="text-xs text-gray-600"
                      >
                        6
                      </option>
                      <option
                        label="7"
                        value="7"
                        className="text-xs text-gray-600"
                      >
                        7
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div className="flex gap-x-6 justify-start lg:justify-between">
                  <span
                    className="lg:text-sm lg:w-3/5 text-gray-900"
                    id="adult"
                  >
                    Infant <span className="hidden lg:inline">(0-2)</span>
                  </span>
                  <select
                    name="infantNo"
                    id="infants"
                    placeholder="Infant (0-2)"
                    className="lg:text-xs text-gray-600 outline-none w-1/3 lg:w-2/5"
                  >
                    <optgroup label="Infant" value="2+">
                      <option label="Infant (0-2)" value="0" disabled>
                        0-2
                      </option>
                      <option
                        label="0"
                        value="0"
                        className="text-xs text-gray-600"
                      >
                        0
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
                      <option
                        label="5"
                        value="5"
                        className="text-xs text-gray-600"
                      >
                        5
                      </option>
                      <option
                        label="6"
                        value="6"
                        className="text-xs text-gray-600"
                      >
                        6
                      </option>
                      <option
                        label="7"
                        value="7"
                        className="text-xs text-gray-600"
                      >
                        7
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${roundTrip}` ? `mb-2` : "mb-2"}></div>
        <div className="submitForm lg:flex lg:justify-end px-4 mb-4">
          <input
            type="submit"
            className="text-white py-3 px-8 bg-primary rounded-full hover:bg-primary-200 hover:text-white"
            value={"Find Flights"}
            onClick={findFlights}
          />

          {/* <div className="flexContainer">
            <div className="input-control">
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Your Name"
              />
            </div>
            <div className="input-control">
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Your Full Email"
              />
            </div>
            <div className="submitContainer">
              <input type="submit" value="Join" className="submit-btn" />
            </div>
          </div> */}
        </div>
      </div>
    </form>
  );
}

export default BookFlight;

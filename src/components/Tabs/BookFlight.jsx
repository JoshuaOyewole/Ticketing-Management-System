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

  /* FUNCTIONS FOR HANDLING DEPARTURE AND ARRIVING DATE */
  const handleTravellingDate = (date) => setTravellingDate(date);
  const handleArrivingDate = (date) => setArrivingDate(date);

  const [roundTrip, setRoundTrip] = useState(false);

  const handleTripType = () => {
    setRoundTrip(!roundTrip);
  };

  const handleChange = (e) => {
    setTicketInfo({
      ...ticketInfo,
      [e.target.name]: e.target.value,
    });
  };
  const findFlights = (e) => {
    e.preventDefault();
    console.log(ticketInfo);
    navigate("book/passengerInfo");
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
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
                  name="depPort"
                  id="depPort"
                  onChange={handleChange}
                  placeholder="From"
                  className="text-sm text-gray-600 outline-none lg:w-full"
                  required
                >
                  <option value="From" disabled>
                    From
                  </option>
                  <optgroup label="EGYPT" value="EGY">
                    EGYPT
                    <option
                      label="EGYPT (EGY)"
                      value="EGYPT"
                      className="text-xs text-gray-600"
                    >
                      EGYPT (EGY)
                    </option>
                    <option
                      label="Cairo (EGY)"
                      value="Cairo"
                      className="text-xs text-gray-600"
                    >
                      Cairo (EGY)
                    </option>
                    <option
                      label="Aswan (EGY)"
                      value="Aswan"
                      className="text-xs text-gray-600"
                    >
                      Aswan (EGY)
                    </option>
                  </optgroup>
                </select>
              </div>
              <p>EGY</p>
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
                  name="arr"
                  id="arr"
                  placeholder="From"
                  className="text-sm text-gray-600 outline-none lg:w-4/5"
                  required
                >
                  <option value="To" disabled>
                    To
                  </option>
                  <optgroup label="USA" value="USA">
                    USA
                    <option
                      label="USA (USA)"
                      value="USA"
                      className="text-xs text-gray-600"
                    >
                      USA (USA)
                    </option>
                    <option
                      label="GERMANY (GER)"
                      value="GER"
                      className="text-xs text-gray-600"
                    >
                      GERMANY (GER)
                    </option>
                    <option
                      label="ITALY (ITA)"
                      value="ITALY"
                      className="text-xs text-gray-600"
                    >
                      ITALY (ITA)
                    </option>
                  </optgroup>
                </select>
              </div>
              <p>USA</p>
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
                  name="travellingOn"
                />
              </div>
              {roundTrip && (
                <div id="arrDate" className="lg:mb-4">
                  <p className="mb-2 text-sm font-semibold">Returning On</p>
                  <DatePicker
                    selected={arrivingDate}
                    onChange={handleArrivingDate}
                    className="outline-none"
                    name="returningOn"
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

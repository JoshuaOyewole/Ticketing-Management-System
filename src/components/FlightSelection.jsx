import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import Button from "./Buttons/Button";
Button;

function FlightSelection({ flightInfo }) {
  const navigate = useNavigate();
  const [flights] = useState(flightInfo);
  let nf = Intl.NumberFormat();

  const { flyingFrom, flyingTo, departureDate } = flightInfo[0];

  const dates = new Date(departureDate);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const formatDates = {
    formattedYear: dates.getFullYear(),
    formattedMonth: dates.getMonth(),
    formattedDate: dates.getDate(),
    formattedDay: dates.getDay(),
  };
  const formattedDate = `${formatDates.formattedDate < 10 ? `${0}${formatDates.formattedDate}`:formatDates.formattedDate}/${formatDates.formattedMonth < 10 ? `${0}${formatDates.formattedMonth}` : formatDates.formattedMonth }/${formatDates.formattedYear}`;
  const weekDay = dayNames[formatDates.formattedDay];
 
 


  return (
    <div className=" wrapper md:max-w-[700px] lg:max-w-4xl 1xl:max-w-6xl mx-auto">
      <div className="flex justify-center flex-col lg:flex-row">
        <main className="flex flex-col left lg:w-[85%] justify-center">
          <div className="top mb-2 lg:mb-2 bg-white rounded-md py-2 lg:pt-6 lg:pb-4 lg:pl-10">
            <div className="header after:border-b-2 after:border-[#f60] after:border-solid after:flex  ">
              <h2 className="title uppercase font-bold text-lg pb-2">
                Outbound
              </h2>
            </div>
            <p className="text-base lg:pt-5">
              {flyingFrom} -- <IoIosAirplane className="text-xl inline-block" />{" "}
              -- {flyingTo} at {formattedDate}
            </p>
          </div>
          <div className=" mb-2 lg:mb-6 bg-white rounded-md py-2 lg:pt-6 lg:pb-10 lg:pl-10 lg:pr-10">
            <div className="flightsInfo">
              <div className="top flex justify-between">
                <button className="back w-[7%] flex items-center">
                  <AiFillBackward className="text-2xl text-primary-300" />
                </button>

                <div className="date-selection w-5/6 flex items-center justify-center gap-x-1">
                  <div className="select-date w-1/3 flex justify-center items-center bg-primary-300 rounded-t-xl py-2">
                    <Link to={"#"}>
                      <div className="day-element-inside text-sm">
                        <div className="date">
                          <span className="block">01/03/2023</span>
                          <span className="inline-block py-1">Wednesday</span>
                        </div>
                        <div className="price text-base font-bold">
                          <span>43,905</span>
                          <span> NGN</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="select-date w-1/3 flex justify-center items-center bg-primary-200 rounded-t-xl py-2">
                    <Link to={"#"}>
                      <div className="day-element-inside text-sm">
                        <div className="date">
                          <span className="block">01/03/2023</span>
                          <span className="block py-0.5">Wednesday</span>
                        </div>
                        <div className="price text-base font-bold">
                          <span>73,905</span>
                          <span> NGN</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="select-date w-1/3 flex justify-center items-center bg-primary-300 rounded-t-xl py-2">
                    <Link to={"#"}>
                      <div className="day-element-inside text-sm">
                        <div className="date">
                          <span className="block">01/03/2023</span>
                          <span className="block py-0.5">Wednesday</span>
                        </div>
                        <div className="price text-base font-bold">
                          <span>63,905</span>
                          <span> NGN</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <button className="next w-[7%] flex items-center justify-end">
                  <AiFillForward className="text-2xl text-primary-300" />
                </button>
              </div>
              <div className="bottom  flex justify-between my-2 ">
                <p className="info-header bg-slate-200 w-2/6 px-4 py-2 rounded-l-md">
                  Flight Information
                </p>
                <div className="fare-info justify-between w-3/5 flex">
                  <button className="w-[32.8%] bg-primary-300 px-4 py-2 rounded-l-md">
                    Economy
                  </button>
                  <button className="w-[32.8%]  bg-primary-300 px-4 py-2 ">
                    Classic
                  </button>
                  <button className="w-[32.8%]  bg-primary-300 px-4 py-2 rounded-r-md">
                    Gold
                  </button>
                </div>
              </div>
              <div className="bg-slate-100 py-4 px-6">
                {flights.length > 0 &&
                  flights[0].time.map((time, index) => {
                    return (
                      <div
                        className="flight-time--price flex my-8 justify-between items-center"
                        key={index}
                      >
                        <div className="flight-time w-[30%] flex justify-between items-center flex-col gap-y-4">
                          <div className="flex w-full justify-between items-center">
                            <p className="dep-time text-center">
                              <span className="block text-2xl ">
                                {time.depTime}
                              </span>
                              <span className="block">
                                {flights[0].flyingFrom}
                              </span>
                            </p>
                            <div className="plane-icon w-10 h-10 rounded-full bg-slate-500 text-white flex justify-center items-center">
                              <IoIosAirplane className="text-2xl" />
                            </div>
                            <p className="arr-time text-center">
                              <span className="block text-2xl ">
                                {time.arrTime}
                              </span>
                              <span className="block">
                                {flights[0].flyingTo}
                              </span>
                            </p>
                          </div>
                          <div className="text-sm text-primary underline">
                            Travel duration: 1 hour(s) 15 minute(s) (non-stop)
                          </div>
                        </div>
                        <div className="flight-price flex w-3/5 gap-x-2">
                          {flights[0].prices.map((feat, index) => {
                            return (
                              <div
                                className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col"
                                key={index}
                              >
                                <span className="block pb-2 font-bold text-lg">
                                  {nf.format(feat)} NGN
                                </span>
                                <Button />
                              </div>
                            );
                          })}
                          {/* <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                          <span className="block pb-2 font-bold text-lg">
                            40,905 NGN
                          </span>
                          <Button />
                        </div>
                        <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                          <div>
                            <span className="block pb-2 font-bold text-lg">
                              60,905 NGN
                            </span>
                            <Button />
                          </div>
                        </div>
                        <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                          <span className="block pb-2 font-bold text-lg">
                            90,905 NGN
                          </span>
                          <Button />
                        </div> */}
                        </div>
                      </div>
                    );
                  })}

                {/* <div className="flight-time--price flex my-8 justify-between items-center">
                  <div className="flight-time w-[30%] flex justify-between items-center flex-col gap-y-4">
                    <div className="flex w-full justify-between items-center">
                      <p className="dep-time text-center">
                        <span className="block text-2xl ">06:45</span>
                        <span className="block">Lagos</span>
                      </p>
                      <div className="plane-icon w-10 h-10 rounded-full bg-slate-500 text-white flex justify-center items-center">
                        <IoIosAirplane className="text-2xl" />
                      </div>
                      <p className="arr-time text-center">
                        <span className="block text-2xl ">08:45</span>
                        <span className="block">Abuja</span>
                      </p>
                    </div>
                    <div className="text-sm text-primary underline">
                      Travel duration: 1 hour(s) 15 minute(s) (non-stop)
                    </div>
                  </div>
                  <div className="flight-price flex w-3/5 gap-x-2">
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white">
                      No Seat
                    </div>
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white">
                      No Seat
                    </div>
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white">
                      No Seat
                    </div>
                  </div>
                </div>
                <div className="flight-time--price flex my-8 justify-between items-center">
                  <div className="flight-time w-[30%] flex justify-between items-center flex-col gap-y-4">
                    <div className="flex w-full justify-between items-center">
                      <p className="dep-time text-center">
                        <span className="block text-2xl ">06:45</span>
                        <span className="block">Lagos</span>
                      </p>
                      <div className="plane-icon w-10 h-10 rounded-full bg-slate-500 text-white flex justify-center items-center">
                        <IoIosAirplane className="text-2xl" />
                      </div>
                      <p className="arr-time text-center">
                        <span className="block text-2xl ">08:45</span>
                        <span className="block">Abuja</span>
                      </p>
                    </div>
                    <div className="text-sm text-primary underline">
                      Travel duration: 2 hour(s) 15 minute(s) (non-stop)
                    </div>
                  </div>
                  <div className="flight-price flex w-3/5 gap-x-2">
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                      <span className="block pb-2 font-bold text-lg">
                        40,905 NGN
                      </span>
                      <Button />
                    </div>
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                      <div>
                        <span className="block pb-2 font-bold text-lg">
                          60,905 NGN
                        </span>
                        <Button />
                      </div>
                    </div>
                    <div className="price border-gray-400 border-solid border-[1px] w-[32.8%]  py-4 px-2 rounded-md flex justify-center items-center h-32 lg:max-h-36 bg-white flex-col">
                      <span className="block pb-2 font-bold text-lg">
                        90,905 NGN
                      </span>
                      <Button />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="top mb-2 rounded-md py-2 lg:pt-6 lg:pb-4 lg:pl-10 bg-white flex justify-end px-10 lg:mb-8">
            <button className="bg-primary-200 px-8 rounded  py-3 font-bold text-white uppercase">
              Continue
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FlightSelection;

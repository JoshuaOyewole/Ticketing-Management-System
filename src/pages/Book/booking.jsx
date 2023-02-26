import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo-big.png";
import { GrSelect } from "react-icons/gr";
import { BsFillInfoSquareFill, BsCreditCard } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { FcPaid } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import PassengerInfo from "../../components/PassengerInfo";
import FlightSelection from "../../components/FlightSelection";

function Booking() {
  const location = useLocation();
  const data = location.state;

  const [display, setDisplay] = useState(false);
  useEffect(() => {
   /*  console.log(data); */
  }, []);

  return (
    <div className="relative">
      <nav className="bg-primary-300 text-white text-right py-2 px-3 lg:px-12 font-poppin">
        Your Safety is our Priority
      </nav>

      {/* HEADER */}
      <header className="px-3 py-2 lg:py-4 bg-white">
        <div className="md:max-w-[700px] lg:max-w-4xl 1xl:max-w-6xl mx-auto bg-white">
          <Link to={"/"}>
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
      {display ? <PassengerInfo /> : <FlightSelection data={data} />}
    </div>
  );
}

export default Booking;

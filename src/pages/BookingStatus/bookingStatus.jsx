import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function BookingStatus() {
  return (
    <>
       <Navbar />
      <div className="bg-airport2 lg:h-[100vh] lg:bg-no-repeat lg:bg-cover lg:bg-bottom lg:opacity-80 overflow-none ">
        <div className="wrapper flex justify-center items-center l overflow-none">
          <div className="h-screen w-[95%] px-4 py-6 mt-5 md:w-4/5 lg:w-[70%] 1xl:w-1/2 bg-white lg:rounded lg:px-10 lg:py-10 lg:mt-5 md:h-[97vh] overflow-y-scroll">
            <div>
            <h2 className="underline lg:no-underline text-2xl font-bold lg:text-3xl text-black lg:font-extrabold mb-2 lg:mb-4 text-center uppercase ">
              Plane Ticket Purchase
            </h2>
            <p className="text-right font-bold">Booking Reference: <span className="text-red font-bold ">AVLQ5P</span></p>
            </div>
            <div className="border-b-cyan-900"></div>
            <div className="flex my-3 flex-col lg:mb-4 lg:mt-6">
              <h3 className="font-bold lg:font-extrabold text-cyan-900">Booking Date</h3>
              <p>Saturday, December 3, 2022</p>
            </div>
            <div className="flex my-3 flex-col">
              <h3 className="font-bold lg:font-extrabold text-cyan-900">Passenger Name</h3>
              <p>Miss Stephanie Celine Linden</p>
            </div>

            <div className="flex my-1 lg:my-3 flex-col lg:mt-6 border-b-2 border-orange-500">
              <h2 className="font-bold lg:font-extrabold text-xl lg:text-2xl lg:mb-2">
                Flight Details
              </h2>
              <p>Route</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 lg:mt-8">
              <div className="flex mt-1 lg:my-3 flex-col lg:pr-4 lg:col-span-2">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">From</h3>
                <p className="text-sm">New York</p>
              </div>

              <div className="flex my-1 lg:my-3 flex-col lg:px-4 lg:col-span-2">
                <h3 className="font-bold lg:font-extrabold  text-cyan-900">Airline</h3>
                <p className="text-sm">ACME Airlines</p>
              </div>

              <div className="flex flex-col lg:px-4 lg:col-span-3">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Departure Date
                </h3>
                <p className="text-sm">Tuesday, December 20, 2022 06:30</p>
              </div>

              <div className="flex flex-col lg:px-4 lg:col-span-3">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Arrival Date
                </h3>
                <p className="text-sm">Tuesday, December 26, 2022 23:30</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 lg:mt-8">
              <div className="flex flex-col pr-2 lg:col-span-1 lg:pr-4">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">To</h3>
                <p className="text-sm">London</p>
              </div>

              <div className="flex flex-col lg:col-span-3 lg:px-4">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Flight Number
                </h3>
                <p className="text-sm">AA7755</p>
              </div>

              <div className="flex flex-col lg:col-span-3 lg:px-2">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Departure Terminal
                </h3>
                <p className="text-sm">Terminal 1</p>
              </div>

              <div className="flex flex-col lg:col-span-3 lg:px-4">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Arrival Terminal
                </h3>
                <p className="text-sm">Terminal 5</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 lg:mt-8">
              <div className="flex flex-col lg:pr-4">
                <h3 className=" font-bold lg:font-extrabold text-cyan-900">Seat Class</h3>
                <p className="text-sm">Businness Class</p>
              </div>

              <div className="flex flex-col lg:px-4">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">
                  Extra Baggage Allowance
                </h3>
                <p className="text-sm">8</p>
              </div>

              <div className="flex flex-col lg:px-4">
                <h3 className="font-bold lg:font-extrabold text-cyan-900">Seat Number</h3>
                <p className="text-sm">3-A</p>
              </div>
            </div>

            {/* FARE BREAKDOWN */}
            <div className="flex flex-col mt-6">
              <h2 className="font-bold lg:font-extrabold text-xl mb-2 lg:text-2xl border-b-2 border-orange-500">Fare Breakdown</h2>

              <div className="flex flex-col lg:gap-y-2 lg:mt-4">
                <div className="grid grid-cols-5 lg:flex">
                  <h3 className="col-span-4 font-bold lg:w-2/5 lg:font-extrabold ">Base Fare</h3>
                  <p className="col-span-1">100 $</p>
                </div>
                <div className="grid grid-cols-5 lg:flex">
                  <h3 className="col-span-4 font-bold lg:w-2/5 lg:font-extrabold">
                    Passenger Service Charge
                  </h3>
                  <p className="col-span-1">0 $</p>
                </div>
                <div className="grid grid-cols-5 lg:flex">
                  <h3 className="col-span-4 font-bold lg:w-2/5 lg:font-extrabold">Surcharge</h3>
                  <p className="col-span-1">80 $</p>
                </div>
                <div className="grid grid-cols-5 lg:flex">
                  <h3 className="col-span-4 font-bold lg:w-2/5 lg:font-extrabold">
                    Fuel/Insurance Surcharge
                  </h3>
                  <p className="col-span-1">30 $</p>
                </div>
                <div className="grid grid-cols-5 lg:flex">
                  <h3 className="col-span-4 font-bold lg:w-2/5 lg:font-extrabold">
                    Ticketing Service Charge
                  </h3>
                  <p className="col-span-1">5 $</p>
                </div>
                <div className="lineBreak"></div>

                {/* TOTAL AMOUNT */}
                <div className="grid mt-4 grid-cols-5 lg:flex">
                  <h3 className="text-lg col-span-4 font-bold lg:w-2/5 lg:font-extrabold">Total Amount</h3>
                  <p className="col-span-1 text-lg font-bold">215 $</p>
                </div>
              </div>
            </div>

            {/* IMPORTANT INFORMATION */}
            <div className="flex flex-col mt-8 lg:mt-16">
              <h2 className="font-bold lg:font-extrabold text-xl lg:text-2xl mb-2 border-b-2 border-orange-500">
                Important Information
              </h2>
              <p className="text-sm leading-8">
                Passemgers are requireed to bring this itinerary/Receipt along
                with an official ID with photo issued by the government or known
                corporations upon entering the terminal.
              </p>
              <p className="text-sm leading-8 lg:my-5">
                The airline may contact the card holder or the Passenger for
                verification of their payment, and in case the airline susoects
                or has a reason to believe that the ticket(s) purchased were
                made fraudulently, the airline may cancel the reservation made
                by the passenger.
              </p>
              <p className="text-sm leading-8">
                Passengers are recommended to check-in two hours before the
                scheduled departure time to prevent cancellation of passenger's
                reservation. the airline shall not be liable for loss or damages
                due to passenger's failure to comply with the provision above if
                without fault by the airline.
              </p>
            </div>

            {/* Restricted Items or Goods */}
            <div className="flex flex-col mt-8 lg:mt-16">
              <h2 className="font-bold lg:font-extrabold text-xl lg:text-2xl mb-2 border-b-2 border-orange-500">
              Restricted Items or Goods 
              </h2>
              <p className="text-sm leading-8">
                We reserve the rights to confiscate any item or goods brought by the passenger which we believe might bring harm ot threat to our guests, including the following:
              </p>
              <ol className="text-sm list-decimal ml-4 my-2">
                <li>Pointed or sharp objects</li>
                <li>Firearms and Ammunition</li>
                <li>Explosives or flammable substanc</li>
                <li>Toys represeting dangerous objects such as toy guns and knives</li>
                <li>Aerosols</li>
                <li>Any other items which may be considered security hazards by law</li>
              </ol>
              <p>For more information, please contact our customers service.</p>
              <p className="text-sm leading-8 lg:my-5">
                The airline may contact the card holder or the Passenger for
                verification of their payment, and in case the airline suspects
                or has a reason to believe that the ticket(s) purchased were
                made fraudulently, the airline may cancel the reservation made
                by the passenger.
              </p>
              <p className="text-sm leading-8">
                Passengers are recommended to check-in two hours before the
                scheduled departure time to prevent cancellation of passenger's
                reservation. the airline shall not be liable for loss or damages
                due to passenger's failure to comply with the provision above if
                without fault by the airline.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col mt-8 lg:mt-12">
              <h2 className="font-bold lg:font-extrabold text-xl lg:text-2xl mb-2 border-b-2 border-orange-500">
              Contact Information 
              </h2>
              <p className="text-sm leading-8">
                If you have any questions or concern about the services or any matter concerning your booking or reservation, please email reservation@acmeairline.com or call airline reservation customer service.
              </p>
            </div>
            <h2 className="font-bold text-center uppercase md:font-extrabold mt-8 lg:mt-14">
                Thank you for making us your airline of choice! <span className="text-center lg:block">have a safe flight!</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingStatus;

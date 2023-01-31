
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import BookingStatus from './pages/BookingStatus/bookingStatus';
import PassengerInfo from "./pages/Book/booking";
import Success from "./pages/Success/success";
import Error from './pages/Error/error'

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-status/:refCode" element={<BookingStatus />} />
        <Route path="/book/passengerInfo" element={<PassengerInfo />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ManageBooking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    ref: "",
    surname: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleBooking = async (e) => {
    e.preventDefault();

    setLoading(true);
    // Create a query against the collection.
    const bookingRef = collection(db, "flight");
    const q = query(
      bookingRef,
      where("bookRef", "==", data.ref),
      where("lastname", "==", data.surname)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length == 0) {
      toast.info("Data not found");
    } else {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return navigate("booking-status", { state: { data: doc.data() } });
      });
    }

    /*   try {
      let response = await axios.post(
        "https://rccg-moo-api.onrender.com/flight",
        {
          surname: data.surname,
          bookRef: data.ref,
        }
      );

      let res = await response.data;
      if (res.success) {
        return navigate("booking-status", { state: { data: res.data } });
      } else {
      }
    } catch (error) {
      if (error.response.data.code == 404) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An Error Occured!");
      }
    } */
    setLoading(false);
    /*   console.log(data);
    navigate("booking-status/AVLQ5P"); */
  };

  return (
    <form
      className="manage-booking-form mx-4 my-4 lg:mx-14"
      onSubmit={handleBooking}
    >
      <p className="message text-sm lg:text-base lg:mt-6 text-slate-800">
        Manage your upcoming trip.
      </p>
      <div className="lg:flex lg:justify-between lg:items-end mt-4 lg:mt-10">
        <div className="flex flex-col w-full lg:w-[40%]">
          <h4 className="font-bold">Reference Number</h4>
          <input
            type="text"
            name="ref"
            placeholder={"Enter Booking Reference Number"}
            id="bookingNo"
            value={data.ref}
            className="lg:border-b-2 lg:text-sm lg:mt-3 py-1 px-2 lg:py-2 lg:px-4"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-1 mb-3 lg:mt-0 lg:mb-0 lg:w-[40%]">
          <h4 className="font-bold">Surname</h4>
          <input
            type="text"
            name="surname"
            id="bookingNo"
            value={data.surname}
            placeholder={"Enter Surnmae"}
            className="lg:border-b-2 lg:text-sm lg:mt-3 lg:py-2 py-1 px-2 lg:px-4"
            required
            onChange={handleChange}
          />
        </div>

        <div className="submitForm lg:justify-end lg:w-[15%]">
          <input
            type="submit"
            className="text-white active:border-none active:outline-0 focus:outline-0 focus:border-none bg-primary py-1 lg:py-3 px-6 lg:px-8 hover:bg-primary-200 hover:text-white rounded-full"
            value={
              loading ? (
                "Searching..."
              ) : (
                "Search"
              )
            }
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
}

export default ManageBooking;

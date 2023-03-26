import React, { useState } from "react";

function Button() {
    const [selected, setSelected] = useState(false);

    const handleSelect = (e) => {
        setSelected(!selected);
        selected
          ? (e.target.innerText = "Selected")
          : (e.target.innerText = "Select");
      };
  return (
    <button
      onClick={handleSelect}
      className="uppercase bg-primary text-white py-2 px-6 rounded hover:bg-orange-500 hover:text-black hover:font-bold transition-all duration-200 ease-in delay-75"
    >
      {`${selected ? "Selected" : "Select"}`}
    </button>
  );
}

export default Button;

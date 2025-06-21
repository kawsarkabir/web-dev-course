import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function SingleCountry({ country, handleFavCountryList }) {
  const { name, flags } = country;
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
    handleFavCountryList(country);
  };
  return (
    <div className="p-4 shadow bg-sky-100 rounded">
      <img src={flags.png} alt="" className="h-28" />
      <h1>{name.common}</h1>

      <div className="flex items-center justify-between">
        <button className="mt-2" onClick={handleFav}>
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button>Details</button>
      </div>
    </div>
  );
}

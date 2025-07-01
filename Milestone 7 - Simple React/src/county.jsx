import React, { useState } from "react";

export default function OnlyEuropeCountry({ country, handleVisitedCountry }) {
  const { flags, name } = country;

  const [visited, setVisited] = useState(false);
  
  const handleClick = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className="border p-10 rounded-2xl border-sky-50 bg-sky-200">
      <img src={flags.png} class="w-80 h-40" />
      <h1>Name: {name.common}</h1>
      <button
        className="py-2 px-6 rounded-2xl bg-sky-500 text-white mt-4"
        onClick={handleClick}
      >
        {visited ? "visited" : "Not Visited"}
      </button>
    </div>
  );
}

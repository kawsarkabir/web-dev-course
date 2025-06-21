import React, { use, useState } from "react";
import OnlyEuropeCountry from "./county";

export default function Countries({ countryPromise }) {
  const countryValue = use(countryPromise);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log("visited country list added", country);
    const visitedCountryList = [...visitedCountry, country];
    setVisitedCountry(visitedCountryList);

  };
  return (
    <div>
      <h1>Selected Country: {visitedCountry.length}</h1>
      <h1>Sengense Country:</h1>
      <div className="grid grid-cols-4 gap-4 py-10">
        {countryValue.map((country) => (
          <OnlyEuropeCountry
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></OnlyEuropeCountry>
        ))}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useState } from "react";
import DisplayCountry from "./DisplayCountry";

export default function Countries() {
  const [countries, setCounties] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry , country]
    setVisitedCountry(newVisitedCountry);
    console.log(country);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCounties(data));
  }, []);
  return (
    <div className="container mx-auto px-4">
      <h1>code from couries</h1>
      <div>
        <h1>My Countries List where i visited:{visitedCountry.length}</h1>
        <ul>
          Name:{" "}
          {visitedCountry?.map((item) => (
            <li>{item?.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="grid  lg:grid-cols-4 gap-4 grid-cols-1">
        {countries.map((country) => (
          <DisplayCountry
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
}

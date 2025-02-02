import { useEffect } from "react";
import { useState } from "react";
import DisplayCountry from "./DisplayCountry";

export default function Countries() {
  const [countries, setCounties] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCounties(data));
  }, []);
  return (
    <div className="container mx-auto px-4">
      <h1>code from couries</h1>
      <div className="grid  lg:grid-cols-4 gap-4 grid-cols-1">
        {countries.map((country) => (
          <DisplayCountry country={country} />
        ))}
      </div>
    </div>
  );
}

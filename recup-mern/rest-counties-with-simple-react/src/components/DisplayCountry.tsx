import { useState } from "react";

export default function DisplayCountry({ country, handleVisitedCountry }) {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };

  const { name, flags } = country;
  return (
    <div className="border border-sky-200 rounded p-5 mt-10 space-y-4">
      <div className="h-52">
        <img src={flags.png} alt="" className="max-w-full object-cover h-42" />
      </div>
      <h3>Country Name: {name.common}</h3>
      <div>
        {visited
          ? "areehh ai dehse toh ami gechi mama"
          : "cha khawyar teha nai abr world tour!"}
      </div>
      <button
        onClick={()=>handleVisitedCountry(country)}
        className="py-2 cursor-pointer  px-8 rounded bg-sky-500 text-white"
      >
        mark going
      </button>
      <button
        onClick={handleVisit}
        className="py-2 cursor-pointer  px-8 rounded bg-sky-500 text-white"
      >
        visited
      </button>
    </div>
  );
}

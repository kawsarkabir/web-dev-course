import React, { use, useState } from "react";
import SingleCountry from "./SingleCountry";

export default function ContainerCountry({ countryPromise }) {
  const data = use(countryPromise);
  const [countFavCountry, setCountFavCountry] = useState([]);

  const handleFavCountryList = (country) => {
    const isAlreadyFav = countFavCountry.find(
      (item) => item.name.common === country.name.common
    );

    if (isAlreadyFav) {
      const remainingFavCountry = countFavCountry.filter(
        (item) => item.name.common != country.name.common
      );
      setCountFavCountry(remainingFavCountry);
    } else {
      const newFavCountryList = [...countFavCountry, country];
      setCountFavCountry(newFavCountryList);
    }
  };

  return (
    <div>
      <h1> favarate country numbers: {countFavCountry.length}</h1>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {data.map((country) => (
          <SingleCountry
            country={country}
            handleFavCountryList={handleFavCountryList}
          />
        ))}
      </div>
    </div>
  );
}

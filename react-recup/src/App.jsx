import React from "react";
import Navbar from "./navbar";
import Countries from "./countries";
import { Suspense } from "react";
import ContainerCountry from "./ContainerCountry";

const countryPromise = fetch(
  "https://restcountries.com/v3.1/region/europe"
).then((res) => res.json());

export default function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      {/* <Suspense fallback={<h3>Nadir vai on going......</h3>}>
        <Countries countryPromise={countryPromise} />
      </Suspense> */}
      <Suspense fallback={<h1>nadir vai on the go....</h1>}>
        <ContainerCountry countryPromise={countryPromise}></ContainerCountry>
      </Suspense>
    </div>
  );
}

import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import HomeSpots from "../components/HomeSpots";
import CountryCard from "../components/CountryCard";
import Exclusive from "../components/Exclusive";
import Review from "./Review";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCountry")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <hr className="border border-dashed" />
      {/* tourist spots section */}
      <HomeSpots></HomeSpots>
      <hr className="border border-dashed" />
      {/* country section */}
      <div>
        <div className="text-center space-y-3 md:my-7">
          <h3 className="text-3xl">Countries</h3>
          <p className="text-start md:text-center text-sm">
            Embark on a virtual journey around the globe with our Countries
            section. Discover fascinating insights into each nation unique
            charm, from iconic landmarks to hidden gems. Whether you are
            dreaming of sandy beaches, towering mountains, or bustling cities,
            let us be your guide to the wonders of the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-y-10 gap-x-5">
          {countries.map((country, idx) => (
            <CountryCard key={idx} country={country}></CountryCard>
          ))}
        </div>
      </div>
      <hr className="border border-dashed" />
      {/* exclusive */}
      <Exclusive></Exclusive>
      <hr className="border border-dashed" />
      {/* review section */}
      <Review></Review>
    </div>
  );
};

export default Home;

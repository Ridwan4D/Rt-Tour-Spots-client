import { useEffect, useState } from "react";
import AllSpotsCard from "./AllSpotsCard";

const HomeSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("https://tourist-spot-server-smoky.vercel.app/allPlace")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSpots(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center space-y-3 my-5 md:my-7">
        <h3 className="text-3xl">Tourist Spots</h3>
        <p className="text-start md:text-center text-sm">
          Dive into our curated collection of must-visit destinations! Explore
          iconic landmarks, hidden gems, and cultural treasures from around the
          globe. Whether you are seeking breathtaking natural wonders, historic
          sites, or vibrant cityscapes, our tourist spot section is your gateway
          to unforgettable adventures. Get inspired, plan your next getaway, and
          embark on a journey of discovery with us!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 md:gap-x-8 gap-y-6 md:gap-y-10">
        {spots.slice(0,6).map((theSpot, idx) => (
          <AllSpotsCard key={idx} theSpot={theSpot}></AllSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default HomeSpots;

import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "../components/AllSpotsCard";
import { useState } from "react";

const AllTouristSpot = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);
  // console.log(loadedSpots);
  const handleAscending = (e) => {
    if (e.target.value == "hightest") {
      setSpots([...spots].sort((a, b) => parseInt(b.cost) - parseInt(a.cost)));
    }else{
      setSpots([...spots].sort((a, b) => parseInt(a.cost) - parseInt(b.cost)));

    }
  };
  return (
    <div>
      <div className="bg-slate-950 py-7  bg-[linear-gradient(to_right,#64748b,#94a3b8,#64748b)]">
        <h2 className="text-xl md:text-3xl font-bold text-center text-slate-700 dark:text-slate-200">
          All The Tourist Spot is here
        </h2>
      </div>
      <div>
        <form className="text-center my-10">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className="border-2 px-3 py-1 rounded-md border-slate-600 outline-2 outline-orange-300" onClick={handleAscending}>
            <option value="hightest">Ascending</option>
            <option value="lowest">
              Descending
            </option>
          </select>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 md:gap-x-8 gap-y-3 md:gap-y-10">
        {spots.map((theSpot, idx) => (
          <AllSpotsCard key={idx} theSpot={theSpot}></AllSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;

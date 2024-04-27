import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "../components/AllSpotsCard";

const AllTouristSpot = () => {
  const loadedSpots = useLoaderData();
  // console.log(loadedSpots);
  return (
    <div>
      <div className="bg-slate-950 py-7  bg-[linear-gradient(to_right,#1c263b,#ffffff,#1c263b)]">
        <h2 className="text-3xl font-bold text-center text-slate-700">
          All The Tourist Spot is here
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-y-10">
        {loadedSpots.map((theSpot, idx) => <AllSpotsCard key={idx} theSpot={theSpot}></AllSpotsCard>)}
      </div>
    </div>
  );
};

export default AllTouristSpot;

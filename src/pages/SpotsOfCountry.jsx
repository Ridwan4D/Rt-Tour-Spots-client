import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardOfCountrySpot from "../components/CardOfCountrySpot";

const SpotsOfCountry = () => {
  const { country } = useParams();
  //   console.log(country);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/countrySpots/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [country]);
  return (
    <div>
      <h3 className="text-3xl font-bold my-10 text-slate-700 border-l-8 border-slate-800 pl-1">
        All Spots of <span className="underline">{country}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-y-10">
        {
            countries.map((aCountry,idx)=> <CardOfCountrySpot key={idx} aCountry={aCountry}></CardOfCountrySpot>)
        }
      </div>
    </div>
  );
};

export default SpotsOfCountry;
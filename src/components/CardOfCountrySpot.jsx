import PropType from "prop-types";
import { Link, useLocation } from "react-router-dom";
const CardOfCountrySpot = ({ aCountry }) => {
  const located = useLocation();
  //   console.log(aCountry);
  const { _id, spot, country, location, description, cost, season } = aCountry;
  return (
    <div>
      <div className="rounded-md shadow-lg hover:scale-105 transition-all sm:w-96 dark:bg-gray-50 dark:text-gray-800 border-2">
        <div className="p-3">
          <div className="flex flex-wrap items-center pt-3 pb-1"></div>
          <div className="space-y-2 text-slate-950">
            <p className="text-xl bg-gradient-to-r from-slate-200 font-medium to-slate-50">
              <span className="font-semibold">Spot Name: </span>
              {spot}
            </p>
            <p className="text-sm bg-gradient-to-r from-slate-200 font-medium to-slate-50">
              <span className="font-semibold">Country: </span>
              {country}
            </p>
            <p className="text-sm bg-gradient-to-r from-slate-200 font-medium to-slate-50">
              <span className="font-semibold">Location: </span>
              {location}
            </p>
            <p className="text-xs bg-gradient-to-r from-slate-200 font-medium to-slate-50">
              {description}
            </p>
            <div className="flex justify-between">
              <p className="text-sm bg-gradient-to-r from-slate-200 font-medium to-slate-50">
                <span className="font-semibold">Cost: </span>
                {cost}
              </p>
              <p className="text-sm bg-gradient-to-r from-slate-50 font-medium to-slate-200">
                <span className="font-semibold">Season: </span>
                {season}
              </p>
            </div>

            <div className="flex justify-center">
              <Link to={`/details/${_id}`} state={located.pathname}>
                <button className="btn-wide text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CardOfCountrySpot.propTypes = {
  aCountry: PropType.object,
};
export default CardOfCountrySpot;

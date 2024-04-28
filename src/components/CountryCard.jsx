import PropType from "prop-types";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  //   console.log(country);
  const { country_name, image, description } = country;
  return (
    <Link to={`/countrySpots/${country_name}`}>
      <div className="max-w-lg p-4 rounded-md shadow-lg  bg-[linear-gradient(to_bottom,#cbd5e1,#e2e8f0)] dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 hover:scale-105 transition-all"
            />
          </div>
          <div className="space-y-2">
            <div rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-default-600 border-b-4 border-dashed border-slate-700">
                {country_name}
              </h3>
            </div>
            <p className="leading-snug dark:text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
CountryCard.propTypes = {
  country: PropType.object,
};
export default CountryCard;

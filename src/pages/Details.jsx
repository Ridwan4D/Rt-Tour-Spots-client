import { Helmet } from "react-helmet";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const spotDetails = useLoaderData();
  const { id } = useParams();
  const spotDetail = spotDetails.find((spotDetail) => spotDetail._id == id);
  const {
    image,
    description,
    cost,
    country,
    location,
    perYearVisitor,
    season,
    spot,
    travelTime,
    userEmail,
    userName,
  } = spotDetail;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details fo {spot}- Tour Guide</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="dark:bg-gray-100 dark:text-gray-900"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="container grid grid-cols-12 mx-auto">
          <div
            className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center p-8 py-12 text-center text-gray-300">
              <h1 className="py-4 text-5xl font-bold">{spot}</h1>
              <p className="text-white pb-6">
                Enjoy the nature and gain knowledge
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-3 divide-y lg:col-span-6 lg:p-10 bg-slate-900 text-gray-100">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold bg-[linear-gradient(to_right,#1c263b,#e2e8f0,#1c263b)] px-5 py-2">
                {spot}
              </h1>
              <span className=" text-2xl font-medium hover:border-b-4 border-slate-950">
                {country}
              </span>
              <p className="text-white text-sm md:text-xl font-medium">
              <span className="text-slate-500 font-medium">Location:</span>
              {location}</p>
              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">Cost:</span> {cost}
              </p>

              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">Season:</span>{" "}
                {season}
              </p>
              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">
                  Every Year Visitors:
                </span>
                {perYearVisitor}
              </p>
              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">
                  Needed Time to Visit:
                </span>
                {travelTime}
              </p>
              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">User: </span>
                {userName}
              </p>
              <p className="text-white text-sm md:text-xl">
                <span className="text-slate-500 font-medium">Email: </span>
                {userEmail}
              </p>
              <div>
                <p className="text-white text-sm md:text-xl font-medium">Description:</p>
                {description}
              </div>
              <div className="flex md:justify-end mt-6">
                <Link to="/allSpots">
                  <button className="btn-wide flex justify-center items-center gap-1 py-4 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg text-sm px-5 me-2 mb-2 ">
                    <IoMdArrowBack /> Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

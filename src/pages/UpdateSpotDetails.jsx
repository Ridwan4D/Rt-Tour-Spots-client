import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSpotDetails = () => {
  const loadedSpot = useLoaderData();
  // console.log(loadedSpot._id);
  const navigate = useNavigate();
  const handleUpdateSpots = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const perYearVisitor = form.perYearVisitor.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const description = form.description.value;
    const spotInfo = {
      image,
      spot,
      country,
      location,
      cost,
      season,
      travelTime,
      perYearVisitor,
      userName,
      userEmail,
      description,
    };
    // console.log(spotInfo);

    fetch(`http://localhost:5000/addSpots/${loadedSpot._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Data Updated");
          form.reset();
          setTimeout(() => {
            navigate("/allSpots");
          }, 1000);
        }
      });
  };
  return (
    <div>
      <div>
        <section className="bg-gray-100 dark:bg-gray-900 border-2 rounded-lg lg:mb-20">
          <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16">
            <h2 className="mb-8 underline text-center text-3xl font-bold text-slate-700 dark:text-white">
              Add a new Place
            </h2>
            <form onSubmit={handleUpdateSpots}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={loadedSpot.image}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Image URL"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Spot Name
                  </label>
                  <input
                    type="text"
                    name="spot"
                    defaultValue={loadedSpot.spot}
                    id="spot-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Spot Name"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Country Name
                  </label>
                  <input
                    type="text"
                    name="country"
                    defaultValue={loadedSpot.country}
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Country Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={loadedSpot.location}
                    id="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Location Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Average Cost
                  </label>
                  <input
                    type="text"
                    name="cost"
                    defaultValue={loadedSpot.cost}
                    id="item-weight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter The Cost"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Season
                  </label>
                  <input
                    type="text"
                    name="season"
                    defaultValue={loadedSpot.season}
                    id="item-weight"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter The Season"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Travel Time
                  </label>
                  <input
                    type="text"
                    name="travelTime"
                    defaultValue={loadedSpot.travelTime}
                    id="travelTime"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter The Travel Time"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="perYearVisitor"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Per Year Visitor
                  </label>
                  <input
                    type="text"
                    name="perYearVisitor"
                    defaultValue={loadedSpot.perYearVisitor}
                    id="perYearVisitor"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Visitor Number"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={loadedSpot.userName}
                    id="userName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Your Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="userEmail"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    User Email
                  </label>
                  <input
                    type="text"
                    name="userEmail"
                    defaultValue={loadedSpot.userEmail}
                    id="userEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter Logged In Email"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-1 text-base font-medium text-gray-700 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    defaultValue={loadedSpot.description}
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-wide mx-auto flex items-center px-5 py-1 mt-4 sm:mt-6 text-base text-gray-400 bg-slate-900 font-medium text-center rounded-lg"
              >
                Update Place
              </button>
            </form>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpdateSpotDetails;

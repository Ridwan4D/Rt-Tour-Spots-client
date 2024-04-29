const Exclusive = () => {
  return (
    <div>
      <div className="text-center space-y-3 my-6 md:my-7">
        <h3 className="text-3xl">Exclusive</h3>
        <p className="text-start md:text-center text-sm">
          Discover unparalleled luxury and tailor-made experiences with our
          exclusive tour website. We curate unforgettable journeys that blend
          opulence with authenticity, offering discerning travelers a chance to
          explore the world in style. From private villa retreats in exotic
          locales to VIP access to hidden gems, every aspect of your journey is
          meticulously crafted to exceed expectations. Elevate your travel
          experience and embark on a voyage of discovery with us.
        </p>
      </div>
      <section className="px-5 py-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-12 lg:col-span-3">
            <div className="py-2 xl:col-span-3 lg:col-span-4 lg:block">
              <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-default-600">
                <p className="text-sm font-semibold text-gray-400">Exclusive</p>
              </div>
              <div className="flex flex-col divide-y dark:divide-gray-300">
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://www.shutterstock.com/image-photo/coxs-bazar-sea-beach-aerial-600nw-2343843075.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Longest uninterrupted natural beach in the world.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      5 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://t4.ftcdn.net/jpg/03/36/71/29/360_F_336712931_9oC9QXONCoXpnoF5Us34GfSCvy5vWZ6W.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Administrative headquarter and town of Rangamati Hill
                      District
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      14 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Chiang Mai is a flourishing tourist and resort centre
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      22 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://www.shutterstock.com/image-photo/ayutthaya-thailand-many-tourists-around-600nw-1097234774.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Founded c. 1350, Ayutthaya became the second Siamese
                      capital after Sukhothai
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      37 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 dark:bg-default-600">
                <div className="w-1/2 h-full dark:bg-default-600"></div>
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold tracking-wider uppercase">
                  See more exclusives
                </span>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 strokeCurrent dark:text-default-600"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="relative flex col-span-12 dark:bg-gray-500 bg-center bg-no-repeat bg-cover xl:col-span-6 lg:col-span-5 md:col-span-12 min-h-96"
            style={{
              backgroundImage:
                "url('https://www.penanghill.gov.my/images/Announcement/2022/Picture1.jpg')",
            }}
          >
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:text-gray-800 dark:border-default-600">
              Penang, Malaysia
            </span>
          </div>
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-12 lg:col-span-3">
            <div className="py-2 xl:col-span-3 lg:col-span-4">
              <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-default-600">
                <button
                  type="button"
                  className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-default-600"
                >
                  Latest
                </button>
                <button
                  type="button"
                  className="pb-5 text-xs font-bold uppercase border-b-2 dark:border- dark:text-gray-600"
                >
                  Popular
                </button>
              </div>
              <div className="py-2 col-span-12 xl:col-span-3 lg:col-span-4">
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://www.shutterstock.com/image-photo/raja-ampat-islands-aerial-drone-260nw-1592674681.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      A stunning archipelago comprising over 1,500 small
                      islands.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      5 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://static.vinwonders.com/2022/07/hoi-an-ancient-town-2.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      South-East Asian port dating from the 15th to the 19th
                      century.
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      14 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://vietnam.travel/sites/default/files/2020-07/towns%20of%20Mekong%20Delta-2.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Southern Vietnam, the Mekong river reaches the South China
                      Sea
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      22 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex px-1 py-4">
                  <img
                    alt=""
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    src="https://afar.brightspotcdn.com/dims4/default/87a7073/2147483647/strip/true/crop/3000x1592+0+295/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F34%2F8c%2F0a3f548947909b5b8d79b935b03f%2Ftravelguides-siemreap-guitarphotographer-shutterstock.jpg"
                  />
                  <div className="flex flex-col flex-grow">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-serif hover:underline"
                    >
                      Cambodias second largest city, and the capital of Siem
                      Reap province
                    </a>
                    <p className="mt-auto text-xs dark:text-gray-600">
                      37 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exclusive;

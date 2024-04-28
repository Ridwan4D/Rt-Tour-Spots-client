import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item h-[70vh] z-10 relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../public/banner-1.jpg)] bg-cover bg-center bg-no-repeat"
        >
          <div className="z-100 flex flex-col justify-center items-center w-full">
            <h3 className="text-5xl font-extrabold text-blue-300">
              We Welcome You<span className="text-yellow-200"> To Bali</span>
            </h3>
            <p className="md:text-center lg:px-40 text-gray-200 font-semibold">
              Embark on a journey of discovery with us as we unveil the hidden
              gems and breathtaking wonders of Toru. Nestled within the heart of
              Bali, Toru boasts a rich tapestry of culture, history, and natural
              beauty waiting to be explored.
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/allSpots">
                <button className="btn-wide text-lg flex justify-center items-center gap-1 py-4 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg px-5 me-2 mb-2 ">
                  See All Spots
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../public/banner-2.jpg)] bg-cover bg-center bg-no-repeat"
        >
          <div className="z-100 flex flex-col justify-center items-center w-full">
            <h3 className="text-center text-5xl font-extrabold text-blue-300">
              Beauty fo Bangladesh <br />
              <span className="text-yellow-200"> Bandorban</span>
            </h3>
            <p className="md:text-center lg:px-40 text-gray-200 font-semibold">
              Nestled amidst the lush hills of southeastern Bangladesh,
              Bandarban beckons with its awe-inspiring landscapes and rich
              tapestry of indigenous cultures. Embark on an unforgettable
              journey as you discover cascading waterfalls, verdant valleys, and
              serene lakes that paint the backdrop of this picturesque region.
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/allSpots">
                <button className="btn-wide text-lg flex justify-center items-center gap-1 py-4 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg px-5 me-2 mb-2 ">
                  See All Spots
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(../../public/banner-3.jpg)] bg-cover bg-center bg-no-repeat"
        >
          <div className="z-100 flex flex-col justify-center items-center w-full">
            <h3 className="text-center text-5xl font-extrabold text-blue-300">
              Most Wanted <br />
              <span className="text-yellow-200"> Bangkok</span>
            </h3>
            <p className="md:text-center lg:px-40 text-gray-200 font-semibold">
              Step into a world where the modern skyline of towering skyscrapers
              seamlessly blends with ornate temples and bustling markets.
              Bangkok, the beating heart of Thailand, pulsates with an
              electrifying energy that captivates the senses and ignites the
              spirit of adventure.
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/allSpots">
                <button className="btn-wide text-lg flex justify-center items-center gap-1 py-4 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg px-5 me-2 mb-2 ">
                  See All Spots
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

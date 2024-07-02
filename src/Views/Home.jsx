import "../Styles/home.css";
import timma from "../assets/timma.jpeg";
import heart from "../assets/heart.svg";
import mapPin from "../assets/map-pin.svg";
import calendar from "../assets/calendar.svg";

const Home = () => {
  return (
    <div className="views bg-pineTree">
      <div className="hero bg-gray px-3 py-16 text-center mt-16 h-full flex flex-col justify-center">
        <div className=" py-3 w-full">
          <h1 className="adipk w-3/5 mx-auto text-[metallic] text-banner">
            Aditya & Prateema
          </h1>
          <h2 className="gettingmarried text-p2 text-metallic">
            ARE GETTING MARRIED
          </h2>
        </div>
      </div>
      <div className="overview flex flex-col md:flex-row w-full mx-auto py-48 bg-pineTree text-center">
        <div className="w-1/3 flex flex-col items-center px-5">
          <img src={heart} alt="" className="h-7 mb-3" />
          <p className="text-h4">Aditya and Prateema's Wedding</p>
          <p>
            Join us for a heartfelt celebration as we exchange vows. Our wedding
            ceremony will be a joyous occasion filled with love, laughter, and
            cherished memories, surrounded by family and friends.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center px-5">
          <img src={mapPin} alt="" className="h-7 mb-3" />
          <p className="text-h4">Backroad Barn & Gardens</p>
          <p>12341 N Spring Brook Rd, Davis, IL 61019</p>
        </div>
        <div className="w-1/3 flex flex-col items-center px-5">
          <img src={calendar} alt="" className="h-7 mb-3" />
          <p className="text-h4">August 31, 2024</p>
          <p>9:00 am onwards</p>
        </div>
      </div>
      <div className="story w-full flex flex-row bg-pineTree">
        <img src={timma} alt="" className="w-1/2" />
        <div className="w-1/2 flex flex-col items-center justify-items-start py-7 px-10">
          <img src="" alt="" />
          <h3 className="mb-5 text-h3">How It All Began</h3>
          <p className="py-3">
            Timma is channeling his inner writer and this portion will be
            written soon...{" "}
          </p>
          <button>Gallery</button>
        </div>
      </div>
      {/* <div className="reception flex flex-row items-center bg-pineTree">
        <div className="w-1/2 items-center text-center py-7">
          <img src="" alt="" />
          <h3>The Venue</h3>
          <p>Details about the venue</p>
          <button>Addvenuelinks</button>
        </div>
        <img src={venue} alt="" className="w-1/2" />
      </div> */}
      <div className="countdown text-center py-7 mb-10 bg-pineTree">
        <h3>August 31, 2024</h3>
        <h4>Countdown</h4>
        <div>Countdown Timer</div>
      </div>
    </div>
  );
};

export default Home;

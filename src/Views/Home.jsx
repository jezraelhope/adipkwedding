import "../Styles/home.css";
import timma from "../assets/timma.jpeg";
import venue from "../assets/backroadbarn.webp";
const Home = () => {
  return (
    <div className="views bg-pineTree">
      <div className="hero  px-3 py-16 text-center mt-16 text-pineTree h-full flex flex-col justify-center">
        <h1 className="adipk w-3/5 mx-auto text-[adipk] ">Aditya & Prateema</h1>
        <h2 className="gettingmarried">ARE GETTING MARRIED</h2>
      </div>
      <div className="flex flex-row w-full mx-auto py-48 bg-pineTree">
        <div className="w-1/3 text-center">
          <span>icon</span>
          <h3>What</h3>
          <p>Please join us as we celebrate our wedding</p>
        </div>
        <div className="w-1/3 text-center">
          <span>icon</span>
          <h3>Where</h3>
          <p>Backyard Barn and Gardens</p>
          <button>See Map</button>
        </div>
        <div className="w-1/3 text-center">
          <span>icon</span>
          <h3>When</h3>
          <p>August 31, 2024</p>
        </div>
      </div>
      <div className="story w-full flex flex-row items-center bg-pineTree">
        <img src={timma} alt="" className="w-1/2" />
        <div className="w-1/2 items-center text-center py-7 px-10">
          <img src="" alt="" />
          <h3 className="mb-5">How It All Began</h3>
          <p>
            It was jndjfr 2022, eofbnwje ikhfnwoe fihw fwjnwemkfnwef ifnw
            wepkfnw wdchnjwbghwbrgnwejgnkjng wejnejkwjgnwj jwebfwknfwjfh
            wkfnwoef{" "}
          </p>
          <button>Gallery</button>
        </div>
      </div>
      <div className="reception flex flex-row items-center bg-pineTree">
        <div className="w-1/2 items-center text-center py-7">
          <img src="" alt="" />
          <h3>The Venue</h3>
          <p>Details about the venue</p>
          <button>Addvenuelinks</button>
        </div>
        <img src={venue} alt="" className="w-1/2" />
      </div>
      <div className="countdown text-center py-7 mb-10 bg-pineTree">
        <h3>August 31, 2024</h3>
        <h4>Countdown</h4>
        <div>Countdown Timer</div>
      </div>
    </div>
  );
};

export default Home;

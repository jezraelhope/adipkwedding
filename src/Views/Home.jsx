import "../Styles/home.css";
import timma from "../assets/timma.jpeg";
import heart from "../assets/heart.svg";
import mapPin from "../assets/map-pin.svg";
import calendar from "../assets/calendar.svg";
import CountdownTimer from "./Countdown";

const Home = () => {
  return (
    <div className="views">
      <div className="hero bg-gray px-3 py-10 text-center flex flex-col justify-center md:py-16 md: md:h-full relative">
        <div className=" py-3 w-full">
          <div className="herobg"></div>
          <h1 className="adipk w-3/5 my-16 mx-auto text-metallic text-banner relative z-10">
            Aditya & Prateema
          </h1>
          <h2 className="gettingmarried text-h5 text-metallic relative">
            ARE GETTING MARRIED
          </h2>
          <p className="gettingmarried text-h5 text-metallic relative">
            8th August 2024
          </p>
          <div className="countdown text-center py-7 mb-10 text-metallic relative">
            <CountdownTimer />
          </div>
        </div>
      </div>
      <div className="overview flex flex-col w-full mx-auto py-20 bg-pineTree text-center md:flex-row items-center md:py-48">
        <div className="w-full flex flex-col items-center px-5 md:w-1/3 ">
          <img src={heart} alt="" className="h-7 mb-3" />
          <p className="text-h4">Aditya and Prateema's Wedding</p>
          <p>
            Join us for a heartfelt celebration as we exchange vows. Our wedding
            ceremony will be a joyous occasion filled with love, laughter, and
            cherished memories, surrounded by family and friends.
          </p>
        </div>
        <div className="w-full flex flex-col items-center my-12 px-5 md:w-1/3">
          <img src={mapPin} alt="" className="h-7 mb-3" />
          <p className="text-h4">
            {" "}
            <a href="https://maps.app.goo.gl/yUwJX5V1CLucbFom6">
              Backroad Barn & Gardens
            </a>
          </p>
          <p>
            <a href="https://maps.app.goo.gl/yUwJX5V1CLucbFom6">
              12341 N Spring Brook Rd, Davis, IL 61019
            </a>
          </p>
        </div>
        <div className="w-full flex flex-col items-center px-5 md:w-1/3">
          <img src={calendar} alt="" className="h-7 mb-3" />
          <p className="text-h4">August 31, 2024</p>
          <p>9:00 am onwards</p>
        </div>
      </div>
      <div className="story w-full flex flex-col bg-pineTree md:flex-row relative">
        <img src={timma} alt="" className="w-full md:w-1/2" />
        <div className="w-full flex flex-col items-center justify-items-start py-7 px-10 md:w-1/2">
          <img src="" alt="" />
          <div className=" h-4/5 flex flex-col items-center justify-evenly">
            <h3 className="mb-5 text-h3">How It All Began</h3>
            <div className="my-5">
              <p className="py-3 text-p">
                Timma is channeling his inner writer and this portion will be
                written soon...{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam blanditiis corrupti delectus, ipsa alias numquam
                minus, voluptatum quo ab asperiores, atque optio animi vitae!
                Autem dolores nihil eius repudiandae omnis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique iste saepe odio fuga eius esse repudiandae
                consequuntur, nulla ut delectus alias laboriosam minima, omnis
                dolore officiis nisi est eos voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                ad, architecto quam quas veniam culpa quasi natus facilis
                quibusdam commodi aliquam corrupti perferendis deserunt quae
                odio fugiat mollitia sit! Consequuntur.
              </p>
            </div>
            <button className="underline underline-offset-2">Gallery</button>
          </div>
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
    </div>
  );
};

export default Home;

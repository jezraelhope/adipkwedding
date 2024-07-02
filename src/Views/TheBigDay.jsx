import "/src/Styles/bigday.css";
import venue from "../assets/backroadbarn.webp";
import ganesh from "../assets/ganesh2.jpeg";
import bridal from "../assets/bridal-icon.svg";
import timmawedding from "../assets/timmawedding.jpeg";
import weddingdecor from "../assets/weddingdecor.webp";
import { Link } from "react-router-dom";
const TheBigDay = () => {
  return (
    <div className="thebigday views text-center">
      <div className="h-full bg-timmatimmi bg-cover flex flex-col items-center pt-16 justify-center">
        <h1 className="text-banner font-adipk">The Big Day</h1>
        <h2 className="text-postBanner">08.31.24</h2>
      </div>
      {/* <div className="py-24 bg-gold text-pineTree flex flex-col items-center">
        <img src={venue} alt="" className="h-96 mb-10" />
        <h3 className="mb-10 text-h3">The Venue</h3>
        <p>All events will take place at</p>
        <p>Backyard Bard and Gardens</p>
        <p>1204 Something St. Davis, Il. 60980</p>
      </div> */}
      <div className="ceremony flex flex-row bg-pineTree">
        <div className="w-1/2 h-full">
          <img src={ganesh} alt="" className=" w-full" />
        </div>
        <div className="flex flex-col items-center justify-evenly px-10 w-1/2 ">
          <div>
            <h3 className="text-h3">The Ceremony</h3>
            <h4 className="text-p2">9am</h4>
          </div>
          <div className="my-8">
            <p className="text-p2">
              The ceremony will be conducted in a traditional marathi and telugu
              style. Read more about the rituals{" "}
              <Link to="/rituals" className="underline underline-offset-2">
                here
              </Link>
            </p>
          </div>
          <p className="mt-24">Dress Code: Indian Traditional</p>
        </div>
      </div>
      <div className="whileyouwait h-3/5 flex flex-row bg-gold text-pineTree">
        <div className="flex flex-col items-center px-10 py-12 w-1/2">
          <h3 className="text-h4 mb-10">In-between Ceremony and Reception</h3>
          <p className="w-3/5">
            After the ceremony, lunch will follow. Games will be placed in the
            vicinity for your entertainment.
          </p>
        </div>
        <div className="w-1/2 flex flex-row justify-center mt-16">
          <img src={bridal} alt="" className="wedding-icon h-full mt-5" />
        </div>
      </div>
      <div className="reception flex flex-row bg-pineTree text-metallic">
        <div className="w-1/2">
          <img src={timmawedding} />
        </div>
        <div className="flex flex-col items-center p-10 justify-start w-1/2">
          <div className="mb-10">
            <h3 className="text-h3">Reception</h3>
            <p>5PM</p>
          </div>
          <p>
            The reception program will be opened by the couple's entrance
            followed by dances and more food!!!{" "}
          </p>
          <p className="mt-5">Open bar closes at 9:00PM </p>

          <p className="mt-24">Dress Code: Indian Cocktail Attire</p>
        </div>
      </div>
      <div className="bg-gold text-pineTree py-24 text-h3">
        <p>DINE.DRINK.DANCE</p>
      </div>
    </div>
  );
};

export default TheBigDay;

import "/src/Styles/bigday.css";
import ganesh from "../assets/ganesh2.jpeg";
import timmawedding from "../assets/timmawedding.jpeg";
import timmi from "../assets/timmi.jpeg";
import { Link } from "react-router-dom";
import ornate from "../assets/ornate.webp";
const TheBigDay = () => {
  return (
    <div className="thebigday views text-center top-padding">
      <div className="h-4/5 pb-10 flex flex-col items-center pt-16 justify-center md:h-full">
        <h1 className="text-banner font-adipk">The Big Day</h1>
        <h2 className="text-postBanner">08.31.24</h2>
        <img src={ornate} alt="" className="h-16 mx-auto" />
      </div>
      {/* <div className="py-24 bg-gold text-pineTree flex flex-col items-center">
        <img src={venue} alt="" className="h-96 mb-10" />
        <h3 className="mb-10 text-h3">The Venue</h3>
        <p>All events will take place at</p>
        <p>Backyard Bard and Gardens</p>
        <p>1204 Something St. Davis, Il. 60980</p>
      </div> */}
      <div className="ceremony flex flex-col items-center bg-pineTree md:flex-row">
        <div className="w-full h-full md:w-1/2">
          <img src={ganesh} alt="" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-evenly px-10 py-10 w-full md:1/2">
          <div>
            <h3 className="text-h3 underline underline-offset-4 decoration-1">
              The Ceremony
            </h3>
            <h4 className="text-h4">9am</h4>
          </div>
          <div className="my-10">
            <p className="text-p2">
              The ceremony will be conducted in a traditional marathi and telugu
              style. Read more about the rituals{" "}
              <Link to="/rituals" className="underline underline-offset-2">
                here
              </Link>
            </p>
          </div>
          <p className="md:mt-24">Dress Code: Indian Traditional</p>
        </div>
      </div>
      <div className="whileyouwait md:h-3/5 flex flex-row bg-gold text-pineTree">
        <div className="flex flex-col items-center px-10 py-12 w-full md:w-1/2 justify-center">
          <h3 className="text-h4 mb-10">In-between Ceremony and Reception</h3>
          <p className="w-3/5">
            After the ceremony, lunch will follow. Games will be placed in the
            vicinity for your entertainment.
          </p>
        </div>
        <div className="md:w-1/2 md:flex md:flex-row md:justify-center hidden">
          <img src={timmi} alt="" className="h-full" />
        </div>
      </div>
      <div className="reception flex flex-col-reverse md:flex-row bg-pineTree text-metallic">
        <div className="md:w-1/2 w-full">
          <img src={timmawedding} />
        </div>
        <div className="flex flex-col items-center p-10 justify-start w-full md:w-1/2">
          <div className="mb-10">
            <h3 className="text-h3 underline underline-offset-4 decoration-1">
              Reception
            </h3>
            <h4 className="text-h4">5pm</h4>
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

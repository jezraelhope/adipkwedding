import "/src/Styles/bigday.css";
import venue from "../assets/backroadbarn.webp";
const TheBigDay = () => {
  return (
    <div className="thebigday views text-center">
      <div className="h-full bg-timmatimmi bg-cover flex flex-col items-center pt-16 justify-center">
        <h1 className="text-banner font-adipk">The Big Day</h1>
        <h2 className="text-postBanner">08.31.24</h2>
      </div>
      <div className="py-24 bg-gold text-pineTree flex flex-col items-center">
        <img src={venue} alt="" className="h-96 mb-10" />
        <h3 className="mb-10 text-h3">The Venue</h3>
        <p>All events will take place at</p>
        <p>Backyard Bard and Gardens</p>
        <p>1204 Something St. Davis, Il. 60980</p>
      </div>
      <div className="ceremony flex flex-row bg-pineTree">
        <div className="w-1/2 h-full">
          <img src="./src/assets/weddingdecor.webp" alt="" className="h-full" />
        </div>
        <div className="flex flex-col items-center p-10 justify-center w-1/2 ">
          <h3 className="mb-10 text-h3">The Ceremony</h3>
          <div className="my-5">
            <h4 className=" text-h4">Baraat - 9am</h4>
            <p>
              The word `Baraat` comes from the Sanskrit word `Vara`, which means
              `groom`, and the procession is led by the groom`s closest male
              relatives and friends. The whole idea is to show off the groom`s
              happiness and excitement about getting married.
            </p>
            <p>
              In this ceremony, we can expect the groom to enter in the fanciest
              way he knows
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-h4">Muhurtham - 11:20am</h4>
            <p>
              The muhurtham is an auspicious time of day in an Indian wedding
              ceremony that marks the beginning of the Hindu marriage ceremony.
              A priest and the couple`s parents select the most auspicious day
              and time based on the couple`s horoscopes, using Hindu Vedic
              Astrology to avoid the presence of evil eye. The muhurat period is
              chosen to suit the birth stars of both the bride and groom, with
              objectives such as their long life, good children, and their
              parents` well-being in mind.
            </p>
            <p></p>
          </div>
          <p className="pt-24">Dress Code: Indian Traditional</p>
        </div>
      </div>
      <div className="whileyouwait h-3/5 flex flex-row bg-gold text-pineTree">
        <div className="flex flex-col items-center justify-start w-1/2">
          <h3 className="text-h3 mt-16">While You Wait</h3>
          <p className="text-3 mb-5">between ceremony and reception</p>
          <p>
            explain what to do in between, couple will be taking picrures, etc,
            games availble, Airbnb for shelter to take naps, etc.
          </p>
        </div>
        <div className="w-1/2 flex flex-row justify-center">
          <img
            src="./src/assets/bridal-icon.svg"
            alt=""
            className="wedding-icon h-full mt-5"
          />
        </div>
      </div>
      <div className="reception flex flex-row bg-pineTree text-metallic">
        <div className="w-1/2">
          <img src="./src/assets/timmawedding.jpeg" />
        </div>
        <div className="flex flex-col items-center p-10 justify-start w-1/2">
          <h3 className="text-h3">The After Party</h3>
          <p>6:30pm until closing</p>
          <p>
            what to expect during the reception, drinks available, type of food,
            etc....
          </p>
        </div>
      </div>
      <div>DINE.DRINK.DANCE</div>
    </div>
  );
};

export default TheBigDay;

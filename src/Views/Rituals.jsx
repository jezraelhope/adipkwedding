import "/src/Styles/bigday.css";
// import venue from "../assets/backroadbarn.webp";
import ganesh2 from "../assets/ganesh2.jpeg";
// import bridal from "../assets/bridal-icon.svg";
// import weddingdecor from "../assets/weddingdecor.webp";
const Rituals = () => {
  return (
    <div className="thebigday views text-center">
      <div className="h-1/3 flex flex-col items-center pt-16 justify-center">
        <h1 className="text-banner font-adipk pt-18">Rituals</h1>
      </div>
      <div className="ceremony flex flex-col bg-pineTree items-center">
        <div className="flex flex-col items-center p-10 justify-items-start w-full md:w-1/2 ">
          <div className="my-5">
            <h4 className=" text-h4">Ganesh Puja</h4>
            <p>
              Worship for the lord of prosperity and remover of obstacles
              Blessings to the lord Ganesh are offered at the mandap for peace
              and harmony to prevail during the ceremony. His Blessings are
              sought for an auspicious beginning for the newlyweds.
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-h4">Jai Mala - Exchange of Garlands</h4>
            <p>
              Bride arrives to mandap, and bride and groom exchange floral
              garlands, this exchange signifies the unification of their hearts
              and soul and the formal acceptance of each other in marriage.
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-h4">Kanya Dan</h4>
            <p>
              The bride’s partner gives their daughter’s hand to the groom,
              requesting him to accept their daughter as his wife and make her
              his equal partner. By joining hands, the bride and groom make a
              lifelong commitment to support each other in their journey through
              life.
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-h4">Jeelakara Bellam</h4>
            <p>
              Signifies the union/marriage of the bride and the groom. Jeelakarr
              (cumin) and bellam (Jaggery) are made into a thick paste and put
              in betel leaf. The ride and the groom pit it on each other's heads
              while the priest chants mantras from Vedas. The bride and groom
              look at each other only after the ceremony.
            </p>
          </div>
          <div className="my-5">
            <h4 className=" text-h4">
              Saptapadi - The seven oaths of Marriage
            </h4>
            <p>
              The bride and groom takes seven steps together, each step directed
              by a mound of rice made by the brides's brother. It is said in
              Hindu philosophy thattwo people who walk seven steps together will
              remain lifelong friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rituals;

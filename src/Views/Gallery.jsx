import mdvl from "../assets/TimmaPictures/Date_Night_At_Medival_times.jpg";
import dc from "../assets/TimmaPictures/DC_Trip_Main_Tujhe_Kha_Jaunga.jpg";
import denver1 from "../assets/TimmaPictures/Denver_trip_hike_after_heavy_snowfall.jpg";
import denver2 from "../assets/TimmaPictures/Denver_trip_hike_on_a_chilly_day_with_gusty_wind.jpg";
import detroit from "../assets/TimmaPictures/Detroit_trip_driving_in_4inch_of_snow_drive.jpg";
import first8k from "../assets/TimmaPictures/First_8K_Run.jpg";
import diwali from "../assets/TimmaPictures/First_Diwali_together.jpg";
import flying from "../assets/TimmaPictures/Flying_Chicago_downtown_tour.jpg";
import holiday from "../assets/TimmaPictures/Holiday_scenes.jpg";
import tulips from "../assets/TimmaPictures/Holland_Tulip_festival.jpg";
import empireEstate from "../assets/TimmaPictures/Sharing_a_meal_With_empire_State_crew.jpg";
import NY from "../assets/TimmaPictures/The_crazies_first_road_trip_to_NY.jpg";
import holiday2 from "../assets/TimmaPictures/The_Crazies_in_holiday_Season.jpg";
import monochrome from "../assets/TimmaPictures/The_Weekend_we_met_monochrome.jpg";
import weekend from "../assets/TimmaPictures/The_Weekend_we_Met.jpg";
import timmabday from "../assets/TimmaPictures/Timma_first_bithday_with_Timmi.jpg";
import timmibday from "../assets/TimmaPictures/Timmi_first_birthday_With_Timma.jpg";
import ornate from "../assets/ornate.webp";

const pics = [
  { src: mdvl, title: "Date Night at Medival Times" },
  { src: dc, title: "DC Trip mein tujhe kha jaunga" },
  { src: denver1, title: "Denver trip hike after heavy snowfall" },
  { src: denver2, title: "Denver trip hike on a chilly day with gusty winds" },
  { src: detroit, title: "Detroit trip driving in 4inch of snow drive" },
  { src: first8k, title: "First 8k run" },
  { src: diwali, title: "First Diwali together" },
  { src: flying, title: "Flying Chicago Downtown" },
  { src: holiday, title: "Holiday Scenes" },
  { src: tulips, title: "Holland tulip festival" },
  { src: empireEstate, title: "Sharing a meal with empire state crew" },
  { src: NY, title: "The crazies first road trip to NY" },
  { src: holiday2, title: "The crazies in holiday season" },
  { src: monochrome, title: "The weekend we met monochrome" },
  { src: weekend, title: "The weekend we met" },
  { src: timmabday, title: "Timma's first birthday with Timmi" },
  { src: timmibday, title: "Timmi's first birthday with Timma" },
];

// const allImages = import.meta.glob("../assets/TimmaPictures/*.jpg");

const Gallery = () => {
  return (
    <div className="details views px-3 py-16 mt-16 text-center h-full top-padding">
      <div>
        <h1 className="text-banner font-adipk pt-18">The Gallery</h1>
        <img src={ornate} alt="" className="h-16 mx-auto" />
      </div>
      {pics.map((pic, i) => {
        return (
          <div key={`${pic}-${i}`} className="flex flex-col items-center mb-16">
            <img
              src={pic.src}
              alt=""
              className="size-full max-w-7xl mb-8 revealing-image"
            />
            <h2 className="text-h4">{pic.title}</h2>
            <img src={ornate} alt="" className="h-16 mx-auto" />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;

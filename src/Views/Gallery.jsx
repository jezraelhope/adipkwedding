// import mdvl from "../assets/TimmaPictures/Date_Night_At_Medival_times.jpg";
// import dc from "../assets/TimmaPictures/DC_Trip_Main_Tujhe_Kha_Jaunga.jpg";
// import denver1 from "../assets/TimmaPictures/Denver_trip_hike_after_heavy_snowfall.jpg";
// import denver2 from "../assets/TimmaPictures/Denver_trip_hike_on_a_chilly_day_with_gusty_wind.jpg";
// import detroit from "../assets/TimmaPictures/Detroit_trip_driving_in_4inch_of_snow_drive.jpg";
// import first8k from "../assets/TimmaPictures/First_8K_Run.jpg";
// import diwali from "../assets/TimmaPictures/First_Diwali_together.jpg";
// import flying from "../assets/TimmaPictures/Flying_Chicago_downtown_tour.jpg";
// import holiday from "../assets/TimmaPictures/Holiday_scenes.jpg";
// import tulips from "../assets/TimmaPictures/Holland_Tulip_festival.jpg";
// import empireEstate from "../assets/TimmaPictures/Sharing_a_meal_With_empire_State_crew.jpg";
// import NY from "../assets/TimmaPictures/The_crazies_first_road_trip_to_NY.jpg";
// import holiday2 from "../assets/TimmaPictures/The_Crazies_in_holiday_Season.jpg";
// import monochrome from "../assets/TimmaPictures/The_Weekend_we_met_monochrome.jpg";
// import weekend from "../assets/TimmaPictures/The_Weekend_we_Met.jpg";
// import timmabday from "../assets/TimmaPictures/Timma_first_bithday_with_Timmi.jpg";
// import timmibday from "../assets/TimmaPictures/Timmi_first_birthday_With_Timma.jpg";

// const pics = [
//   mdvl,
//   dc,
//   denver1,
//   denver2,
//   detroit,
//   first8k,
//   diwali,
//   flying,
//   holiday,
//   tulips,
//   empireEstate,
//   NY,
//   holiday2,
//   monochrome,
//   weekend,
//   timmabday,
//   timmibday,
// ];

const allImages = import.meta.glob("../assets/TimmaPictures/*.jpg");

const Gallery = () => {
  return (
    <div className="p-20">
      {allImages.forEach((pic) => {
        <img src={pic} alt="" className="w-6" />;
      })}
    </div>
  );
};
export default Gallery;

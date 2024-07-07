import Countdown from "react-countdown";
import "../Styles/home.css";

const Completionist = () => <span>It's the wedding day!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    let dayString = "days";
    if (days === 1) {
      dayString = "day";
    }
    return (
      <span className="countdown">
        {days} {dayString} : {hours} hh : {minutes} min : {seconds} sec
      </span>
    );
  }
};

const CountdownTimer = () => {
  return <Countdown date={new Date("Aug, 31, 2024")} renderer={renderer} />;
};
export default CountdownTimer;

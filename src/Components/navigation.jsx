import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white w-full flex flex-row items-center fixed top-0 py-5 px-5 bg-gold text-pineTree z-10">
      <div className="w-1/2 font-[parisienne] text-start">#timmawedstimmi</div>
      <ul className="w-1/2 flex flex-row space-between px-3 text-center">
        <li className="w-1/5">
          <Link to="/">Home</Link>
        </li>
        <li className="w-1/5">
          <Link to="/thebigday">The Big Day</Link>
        </li>
        <li className="w-1/5">
          <Link to="/details">Details</Link>
        </li>
        <li className="w-1/5">
          <Link to="/rsvp">RSVP</Link>
        </li>
        <li className="w-1/5">
          <Link to="/registry">Registry</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

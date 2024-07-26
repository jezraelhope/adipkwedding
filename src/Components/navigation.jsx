import { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = ({ setFirstPageLoad }) => {
  useEffect(() => {
    setFirstPageLoad(false);
  }, []);
  return (
    <nav className="bg-white w-full flex flex-row items-center fixed top-0 py-5 pl-5 pr-1 bg-pineTree text-metallic z-50 navigation animate">
      <div className="w-1/3 font-[parisienne] text-start text-['max(2vw, 2rem)'] cursor-pointer">
        <Link to="/">#timmawedstimmi</Link>
      </div>
      <ul className="w-2/3 flex flex-row space-between items-left text-center text-nav">
        <li className="w-1/5">
          <Link to="/">Home</Link>
        </li>
        <li className="w-1/5">
          <Link to="/thebigday">TheDay&#9829;</Link>
        </li>
        <li className="w-1/5">
          <Link to="/details">Details</Link>
        </li>
        <li className="w-1/5">
          <Link to="/rituals">Rituals</Link>
        </li>
        <li className="w-1/5">
          <Link to="/registry">Registry</Link>
        </li>
        <li className="w-1/5">
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

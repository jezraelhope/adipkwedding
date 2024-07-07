import { Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./Components/navigation";
import Home from "./Views/Home";
// import Footer from "./Components/footer";
import TheBigDay from "./Views/TheBigDay";
import Details from "./Views/Details";
import Rsvp from "./Views/RSVP";
import Registry from "./Views/Registry";
import Rituals from "./Views/Rituals";
import Footer from "./Components/footer";

import { useEffect, useState } from "react";
function App() {
  const [offset, setOffset] = useState(0);
  const [firstPageLoad, setFirstPageLoad] = useState(true);
  const isHomePage = window.location.pathname === "/";
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app bg-pineTree text-metallic">
      {isHomePage && firstPageLoad ? (
        offset > 20 && <Nav setFirstPageLoad={setFirstPageLoad} />
      ) : (
        <Nav setFirstPageLoad={setFirstPageLoad} />
      )}
      <Routes>
        <Route path="/" element={<Home firstPageLoad={firstPageLoad} />} />
        <Route path="/thebigday" element={<TheBigDay />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rituals" element={<Rituals />} />
      </Routes>
      {isHomePage && firstPageLoad ? offset > 40 && <Footer /> : <Footer />}
    </div>
  );
}

export default App;

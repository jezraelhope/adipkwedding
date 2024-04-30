import { Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./Components/navigation";
import Home from "./Views/Home";
// import Footer from "./Components/footer";
import TheBigDay from "./Views/TheBigDay";
import Details from "./Views/Details";
import Rsvp from "./Views/RSVP";
import Registry from "./Views/Registry";

function App() {
  return (
    <div className="app bg-pineTree text-metallic">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thebigday" element={<TheBigDay />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

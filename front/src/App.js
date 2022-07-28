import "./App.scss";
import Gallery from "./Gallery/Gallery";
import Homepage from "./Homepage/Homepage";
import Photos from "./myGallery/My_gallery";
import { Link } from "react-router-dom";
import Rates from "./Rates/Rates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

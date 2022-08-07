import "./App.scss";
import Gallery from "./Gallery/Gallery";
import Homepage from "./Homepage/Homepage";
import Photos from "./myGallery/My_gallery";
import Rates from "./Rates/Rates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:4000/auth/verify", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setLoginStatus(response.data.auth);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route
            path="/photos"
            element={loginStatus ? <Photos /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

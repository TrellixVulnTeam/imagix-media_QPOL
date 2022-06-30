import './App.scss';
import Gallery from './Gallery/Galleryy';
import Homepage from './Homepage/Homepage';
import { Link } from "react-router-dom"
import Rates from './Rates/Rates';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/rates' element={<Rates/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

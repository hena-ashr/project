import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="Home/Footer" element={<Footer />} />
          <Route path="*" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
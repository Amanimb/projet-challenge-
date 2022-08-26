import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {Routes,Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Product from "./pages/Product"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

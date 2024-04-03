import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/1.home/Home";
import Products from "./pages/2.products/Products";
import Team from "./pages/3.team/Team";
import Contact from "./pages/4.contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/contact" element={<Contact/>} />

        </Routes>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;

// className='w-screen h-screen bg-blue-800'

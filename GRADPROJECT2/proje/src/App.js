import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Mayor } from "./components/Mayor";
import { Menu } from "./components/Menu";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Mayor />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

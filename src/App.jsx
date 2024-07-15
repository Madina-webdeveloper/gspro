import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./components/Footer";
import { Sertificate } from "./pages/Sertificate/Sertificate";
import { Delivery } from "./pages/Delivery/Delivery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sertificate" element={<Sertificate/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

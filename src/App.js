import Header from "./containers/App/Header/Header";
import Home from "./containers/Home/Home";
import Catalog from "./containers/Catalog/Catalog";
import Cart from "./containers/Cart/Cart";
import Footer from "./containers/App/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

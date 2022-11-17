import Header from "./common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./common/footer/Footer";
import FullMainProducts from "./components/mainProducts/FullMainProducts";
import ProductDetails from "./components/productDetails/ProductDetails";
import CartPage from "./pages/CartPage";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mainProducts/fullList"
              element={<FullMainProducts />}
            />
            <Route
              path="/mainProducts/fullList/:id"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

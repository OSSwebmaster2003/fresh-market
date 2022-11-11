import Header from "./common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./common/footer/Footer";
import FullMainProducts from "./components/mainProducts/FullMainProducts";

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
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

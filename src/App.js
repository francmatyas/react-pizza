import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';

import { useState } from "react";

import DUMMY_PRODUCTS from "./data/DUMMY_PRODUCTS.json";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Delivery from "./components/Delivery/Delivery";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body products={products} />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

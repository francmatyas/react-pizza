import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import DUMMY_PRODUCTS from "./data/DUMMY_PRODUCTS.json";

import Body from "./components/Body/Body";

function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Body products={products}/>
      
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { Route, Routes } from "react-router-dom";

import DUMMY_PRODUCTS from "./data/DUMMY_PRODUCTS.json";

import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Delivery from "./components/Delivery/Delivery";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Editor from "./components/Editor/Editor";

function App() {
  const [cookies, setCookies] = useCookies("filter");

  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const [filter, setFilter] = useState(
    cookies.filter || {
      meat: false,
      fish: false,
      vegetarian: false,
      spicy: false,
      mushroom: false,
      cheese: false,
      olive: false,
      onion: false,
    }
  );

  function addToCartHandler(data) {
    setCartCount(cartCount + 1);
    setCartTotal(cartTotal + data.price);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === data.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === data.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...data, amount: 1 }];
      }
    });

    setProducts((prevProducts) => {
      const existingItem = prevProducts.find((item) => item.id === data.id);
      if (existingItem) {
        return prevProducts.map((item) =>
          item.id === data.id ? { ...item, cart } : item
        );
      } else {
        return [...prevProducts, { ...data }];
      }
    });
  }

  function updateAmountHandler(data, amountAction) {
    if (amountAction) {
      setCartCount(cartCount + 1);
      setCartTotal(cartTotal + data.price);

      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.id === data.id ? { ...item, amount: item.amount + 1 } : item
        );
      });
    } else {
      if (data.amount === 1) {
        removeItemHandler(data);
      } else {
        setCartCount(cartCount - 1);
        setCartTotal(cartTotal - data.price);

        setCart((prevCart) => {
          return prevCart.map((item) =>
            item.id === data.id ? { ...item, amount: item.amount - 1 } : item
          );
        });
      }
    }
  }
  function removeItemHandler(data) {
    setCartCount(cartCount - data.amount);
    setCartTotal(cartTotal - data.price * data.amount);

    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== data.id);
    });

    setProducts((prevProducts) => {
      return prevProducts.map((item) =>
        item.id === data.id ? { ...item, cart: false } : item
      );
    });
  }
  function clearCartHandler() {
    setCartCount(0);
    setCartTotal(0);
    setCart([]);
    setProducts((prevProducts) => {
      return prevProducts.map((item) => ({ ...item, cart: false }));
    });
  }

  function updateFilterHandler(data) {
    setCookies("filter", data, { path: "/" });
    setFilter(data);
  }

  const filteredProducts = products.filter((product) => {
    if (filter.meat && !product.tags.includes("meat")) {
      return false;
    }
    if (filter.fish && !product.tags.includes("fish")) {
      return false;
    }
    if (filter.vegetarian && !product.tags.includes("veggie")) {
      return false;
    }
    if (filter.spicy && !product.tags.includes("spicy")) {
      return false;
    }
    if (filter.mushroom && !product.tags.includes("mushrooms")) {
      return false;
    }
    if (filter.cheese && !product.tags.includes("cheese")) {
      return false;
    }
    if (filter.olive && product.tags.includes("olive")) {
      return false;
    }
    if (filter.onion && product.tags.includes("onion")) {
      return false;
    }
    return true;
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header cartCount={cartCount} />
              <ProductGrid
                products={filteredProducts}
                onCartAdd={addToCartHandler}
                onFilterUpdate={updateFilterHandler}
                filter={filter}
              />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header cartCount={cartCount} />
              <Cart
                total={cartTotal}
                count={cartCount}
                items={cart}
                onCartChange={updateAmountHandler}
                onRemoveItem={removeItemHandler}
                onRemoveAll={clearCartHandler}
              />
            </>
          }
        />
        <Route
          path="/delivery"
          element={
            <>
              <Header cartCount={cartCount} />
              <Delivery />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header cartCount={cartCount} />
              <Contact />
            </>
          }
        />
        <Route
          path="/edit"
          element={
            <Editor products={products}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

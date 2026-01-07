import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

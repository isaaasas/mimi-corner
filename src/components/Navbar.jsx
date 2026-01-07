// src/components/Navbar.jsx
import "./Navbar.css";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar">
      <nav className="menu">
        <Link to="/products">БҮХ БҮТЭЭГДЭХҮҮН</Link>
        <a href="#">АРЬС АРЧИЛГАА</a>
        <a href="#">БРЭНД</a>
        <a href="#">НҮҮР БУДАЛТ & ҮС</a>
        <a href="#">АШИГТАЙ БАКТЕРИ</a>
        <a href="#">ЭМЭГТЭЙЧҮҮД</a>
        <a href="#">ТҮГЭЭМЭЛ АСУУЛТ ХАРИУЛТ</a>
        <a href="#">БАГЦ</a>
      </nav>

      <div className="icons">
        <FiHeart size={20} />

        <Link to="/cart" className="cart-icon">
          <FiShoppingBag size={20} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>

        <FiUser size={20} />
      </div>
    </div>
  );
};

export default Navbar;

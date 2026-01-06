// src/components/Navbar.jsx
import "./Navbar.css";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <FiShoppingBag size={20} />
        <FiUser size={20} />
      </div>
    </div>
  );
};



export default Navbar;

// src/components/Header.jsx
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        200,000₮ дээш захиалгад хүргэлт үнэгүй.
      </div>

      <div className="header-center">
        <Link to="/">
          <img src={logo} alt="Mimi Corner Beauty" className="logo" />
        </Link>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Хайх"
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;

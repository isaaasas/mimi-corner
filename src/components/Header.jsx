import { useEffect, useState } from "react"
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import logo from "../assets/logo.png"
import "./Header.css"

const images = [f1, f2]

function Header() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        200,000₮ дээш захиалгад хүргэлт үнэгүй.
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
         <img src={logo} alt="Mimi Corner Logo" />
        </div>


        <input
          className="search"
          type="text"
          placeholder="Хайх"
        />

        <div className="icons">
         <FiHeart size={20} />
         <FiShoppingBag size={20} />
         <FiUser size={20} />
        </div>


        <nav className="menu">
          <a href="#">БҮХ БҮТЭЭГДЭХҮҮН</a>
          <a href="#">АРЬС АРЧИЛГАА</a>
          <a href="#">БРЭНД</a>
          <a href="#">НҮҮР БУДАЛТ & ҮС</a>
          <a href="#">АШИГТАЙ БАКТЕРИ</a>
          <a href="#">ЭМЭГТЭЙЧҮҮД</a>
          <a href="#">ТҮГЭЭМЭЛ АСУУЛТ ХАРИУЛТ</a>
          <a href="#">БАГЦ</a>
        </nav>
      </header>

      {/* Hero Slider */}
      <section className="hero">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </section>
    </>
  )
}

export default Header
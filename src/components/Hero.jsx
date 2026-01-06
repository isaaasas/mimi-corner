// src/components/Hero.jsx
import { useEffect, useState } from "react";
import "./Hero.css";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";

const images = [f1, f2];

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5500)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </section>
  );
};

export default Hero;

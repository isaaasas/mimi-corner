import React from "react";
import { products } from "../data/productsData";
import "./Products.css";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="products-page">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-wrapper">
            <img
              src={product.image}
              className="main-img"
              alt={product.name}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                className="hover-img"
                alt=""
              />
            )}
          </div>

          <h4>{product.name}</h4>
          <p>{product.price.toLocaleString()}₮</p>

          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Сагслах
          </button>
        </div>
      ))}
    </div>
  );
}

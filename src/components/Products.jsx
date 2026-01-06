import React from "react";
import { products } from "../data/productsData";
import "./Products.css";

export default function Products() {
  return (
    <div className="products-page">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-wrapper">
            <img src={product.image} className="main-img" alt={product.name} />
            {product.hoverImage && (
              <img src={product.hoverImage} className="hover-img" alt="" />
            )}
          </div>
          <h4>{product.name}</h4>
          <p>{product.price.toLocaleString()}₮</p>
        </div>
      ))}
    </div>
  );
}

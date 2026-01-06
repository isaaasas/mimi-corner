import React from "react";
import { products } from "../data/productsData";
import "./SaleProducts.css";

export default function SaleProducts() {
  const saleProducts = products.filter((p) => p.category === "sale");

  return (
    <section className="sale-products">
      <h2>ХЯМДРАЛ</h2>
      <div className="products-grid">
        {saleProducts.map((product) => (
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
    </section>
  );
}

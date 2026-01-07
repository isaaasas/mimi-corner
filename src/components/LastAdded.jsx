// src/components/LastAdded.jsx
import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";
import "./LastAdded.css";

export default function LastAdded() {
  const { addToCart } = useCart();

  const lastAddedProducts = products.filter(
    (product) => product.category === "new"
  );

  return (
    <section className="last-added">
      <h2>Сүүлд нэмэгдсэн</h2>

      <div className="products-grid">
        {lastAddedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.image} className="main-img" />
              {product.hoverImage && (
                <img src={product.hoverImage} className="hover-img" />
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
    </section>
  );
}

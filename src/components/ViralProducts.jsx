import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";
import "./ViralProducts.css";

export default function ViralProducts() {
  const { addToCart } = useCart();

  const viralProducts = products.filter(
    (product) => product.category === "viral"
  );

  return (
    <section className="viral-products">
      <h2>Эрэлттэй бүтээгдэхүүнүүд</h2>

      <div className="products-grid">
        {viralProducts.map((product) => (
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

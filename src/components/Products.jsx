import coolDive1 from "../assets/coolDive1.jpeg";
import coolDive2 from "../assets/coolDive2.jpeg";
import bebe1 from "../assets/bebe1.jpeg";
import bebe2 from "../assets/bebe2.jpeg";
import seoul1 from "../assets/seoul1.jpeg";
import seoul2 from "../assets/seoul2.jpeg";
import mask from "../assets/mask.jpg";
import cream from "../assets/cream.webp";
import "./Products.css";
const products = [
    {
        id: 1,
        name: "AMUSE Jel-Fit Tint 12 Cool Dive",
        price: 31920,
        image: coolDive1,
        hoverImage: coolDive2,
    },
    {
        id: 2,
        name: "AMUSE BEBE TINT 01 BOKSOONGA LOVE",
        price: 31920,
        image: bebe1,
        hoverImage: bebe2,
    },
    {
        id: 3,
        name: "AMUSE Jel-Fit Tint 06 Seoul Girl",
        price: 31920,
        image: seoul1,
        hoverImage: seoul2,
    },
    {
        id: 4,
        name: "Jigott 10ш Маскны багц",
        price: 9900,
        image: mask,
    },
    {
        id: 5,
        name: "DR.ALTHEA 345 Relief Cream",
        price: 59900,
        image: cream,
    },
];

export default function Products(){
    return (
        <div className="products">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <div className="image-wrapper">
                        <img src={product.image} className="main-img" />
                        <img src={product.hoverImage} className="hover-img" />
                    </div>

                    <h4>{product.name}</h4>
                    <p>{product.price.toLocaleString()}₮</p>
                </div>
            ))}
        </div>
    );
}

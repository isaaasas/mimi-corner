import {useCart} from "../context/CartContext";
import "./Cart.css";
export default function Cart() {
    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalPrice,
    } = useCart();

    return (
        <div className="cart">
            <h2>Таны сагс</h2>
            {cartItems.length === 0 && <p>Сагс хоосон байна</p>}

            {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.price.toLocaleString()}₮</p>

                        <div className="qty">
                            <button onClick={() => decreaseQty(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item.id)}>+</button>
                        </div>

                        <button onClick={() => removeFromCart(item.id)}>
                            Устгах
                            </button>
                    </div>
                </div>
            ))}
            <h3>Нийт дүн: {totalPrice.toLocaleString()}₮</h3>
            </div>
         );
}
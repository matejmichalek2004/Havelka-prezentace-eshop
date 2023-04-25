import { useEffect, useState } from "react";

const ShoppingCart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0);

    const click = (item) => {
        const newCart = cart.filter((product) => product.title !== item.title);
        setCart(newCart);
    }

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });

        total = Math.round(total * 100) / 100;
        setTotal(total);
    }


    useEffect(() => {
        totalPrice();
    }, [cart]);

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <p>total price: {total}</p>
            {cart.length !== 0 ? cart.map((item) => (
                <div key={item.title} className="cart-item">
                    <p>{item.title}</p>
                    {item.isCool == null ? <p>✅</p> : <p>❌</p>}
                    <p>{item.price}</p>
                    <button onClick={() => click(item)} >remove from cart</button>
                </div>
            )) : <p>There are no items in your cart.</p>}
        </div>
    );
}

export default ShoppingCart;
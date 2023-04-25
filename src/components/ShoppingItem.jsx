const ShoppingItem = ({ title, isCool, price, click }) => {

    return (
        <div className="shopping-item">
            <p>{title}</p>
            {isCool ? <p>✅</p> : <p>❌</p>}
            <p>{price}</p>
            <button onClick={click}>add to cart</button>
        </div>
    )
};

export default ShoppingItem;
import ShoppingItem from "./ShoppingItem"


const ShoppingList = ({ products, cart, setCart }) => {

    const click = (product) => {
        console.log("clicked")
        setCart([...cart, product])
    }

    return (
        <div className="shopping-list">
            <h1>Our Products</h1>
            {products.map((product) => (
                <ShoppingItem key={product.id} title={product.title} price={product.price} isCool={true} click={() => click(product)} />
            ))}
        </div>
    )
}

export default ShoppingList
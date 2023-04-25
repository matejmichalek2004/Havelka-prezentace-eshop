import { useState, useEffect } from 'react';
import './App.scss';
import FilterDropdown from './components/FilterDropdown';
import SearchBar from './components/SearchBar';
import ShoppingList from './components/ShoppingList';
import ShoppingCart from './components/ShoppingCart';

// -------------------------------------

const filterOptions = [
  {
    title: "Price low to high",
    value: "lh"
  },
  {
    title: "Price high to low",
    value: "hl"
  },
  {
    title: "Alphabetically",
    value: "az"
  },
]

// -------------------------------------

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    FetchProducts();

  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredProducts(filteredProducts);
  }, [search]);

  const FetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  }

  // -------------------------------------

  return (

    <div className="App">

      <div className="flex">
        <SearchBar search={search} setSearch={setSearch} placeholder="Search term" />
        <FilterDropdown items={filterOptions} />
      </div>

      <ShoppingList products={filteredProducts} cart={cart} setCart={setCart} />
      <hr />
      <ShoppingCart products={cart} cart={cart} setCart={setCart} />

    </div>
  );
}

export default App;

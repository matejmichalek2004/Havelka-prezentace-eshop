
const SearchBar = (props) => {
    const { placeholder, search, setSearch } = props
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholder} onChange={(event => {
                setSearch(event.target.value);
            })} />
            <button>Search</button>
        </div>
    )
};

export default SearchBar;
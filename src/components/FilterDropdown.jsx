

const FilterDropdown = (props) => {
    const { items, search, setSearch } = props;
    return (
        <div className="filter-dropdown">
            <input type="checkbox" />
            <select>
                {items.map(({ title, value }) => {
                    return <option value={value} key={value}>{title}</option>
                })}
            </select>
        </div>
    )
};

export default FilterDropdown;
const FilterForm = ({ filterText, onFilterChange }) => {
  return (
    <div className="filter-form">
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterForm;
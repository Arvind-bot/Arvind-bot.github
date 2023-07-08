import "./SearchBox.styles.css";

const SearchBox = (props) => {
  const { className, onChangeHandler, placeholder } = props || {};
  return (
    <div>
      <input
        className={className}
        type="search"
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;

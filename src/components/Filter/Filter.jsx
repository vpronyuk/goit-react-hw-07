import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import css from "./Filter.module.css";
import { selectNameFilter } from "../../redux/selectors";

const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filterInput" className={css.label}>
        Filter contacts by name:{" "}
      </label>
      <input
        className={css.input}
        type="text"
        id="filterInput"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;

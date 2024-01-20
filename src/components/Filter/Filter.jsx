import styles from './filter.module.css';

const Filter = ({ changeFilter }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filterID">Find contacts by name</label>
      <input
        onChange={changeFilter}
        id="filterID"
        name="filter"
        placeholder="Search"
      />
    </div>
  );
};
export default Filter;

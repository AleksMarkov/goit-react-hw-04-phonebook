import styles from './contact-list.module.css';

const MyPhoneList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={styles.contacts}>
      {name}: {number}{' '}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <>
      {/* <div className={styles.filter}>
        <label htmlFor="filterID">Find contacts by name</label>
        <input
          onChange={changeFilter}
          id="filterID"
          name="filter"
          placeholder="Search"
        />
      </div> */}
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default MyPhoneList;

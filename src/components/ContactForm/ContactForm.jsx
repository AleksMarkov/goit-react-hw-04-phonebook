import { useState, useMemo, memo, useCallback } from 'react';
import { nanoid } from 'nanoid';

import styles from './contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;

    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ ...state });

    reset();
  };

  const reset = useCallback(() => {
    setState({ ...INITIAL_STATE });
  }, []);

  const phoneBookID = useMemo(() => nanoid(), []);
  const phoneNumberID = useMemo(() => nanoid(), []);

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.phonebook}>
        <label htmlFor={phoneBookID}>Name</label>
        <input
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          id={phoneBookID}
          placeholder="enter new contact"
          required
        ></input>
        <label htmlFor={phoneNumberID}>Number</label>
        <input
          value={number}
          type="tel"
          name="number"
          onChange={handleChange}
          id={phoneNumberID}
          placeholder="enter phone number"
          required
        ></input>
        <button className={styles.phonebtn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default memo(ContactForm);

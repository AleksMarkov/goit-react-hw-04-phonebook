import { useState } from 'react';
import { nanoid } from 'nanoid';

import styles from './contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ ...state });

    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const phoneBookID = nanoid();
  const phoneNumberID = nanoid();

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

/*
class ContactForm extends Component {
  phoneBookID = nanoid();
  phoneNumberID = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
    // this.setState({ [number]: value });
    // console.log('handleChange');
    // console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { phoneBookID, phoneNumberID, handleSubmit, handleChange } = this;
    const { name, number } = this.state;
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
  }
}
*/

export default ContactForm;

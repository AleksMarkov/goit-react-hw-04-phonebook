import { useState, useEffect, useRef, useCallback } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import styles from './app.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('my-contacts'));
    return data || [];
  });
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const isDublicate = ({ name }) => {
    const normolizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normolizedName;
    });
    return Boolean(dublicate);
  };

  const addContact = useCallback(data => {
    if (isDublicate(data)) {
      return alert(` ${data.name} is already in contacts`);
    }
    setContacts(prevContacts => {
      const newContact = { id: nanoid(), ...data };
      return [...prevContacts, newContact];
    });
  }, []);

  const deleteContact = useCallback(id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  }, []);

  const changeFilter = useCallback(({ target }) => {
    setFilter(target.value);
  }, []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contacts => {
      const normolizedName = contacts.name.toLowerCase();
      return normolizedName.includes(normalizedFilter);
    });
    return filteredContacts;
  };

  const items = getFilteredContacts();
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList items={items} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import css from '../components/App.module.css';

import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const inContacts = contacts.find(contact => contact.name === data.name);

    if (inContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, { ...data, id: nanoid(10) }]);
  };

  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  const deleteContactByClick = event => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== event.target.id)
    );
  };

  const filterContactListByQuery = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase())
      );
    }
    return contacts;
  };

  return (
    <div className={css.app}>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter query={filter} onChange={handleInputChange} />
        <ContactList
          list={filterContactListByQuery()}
          onClick={deleteContactByClick}
        />
      </Section>
    </div>
  );
}

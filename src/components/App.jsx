import css from '../components/App.module.css';

import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { contactAdded, contactDeleted } from 'redux/contacts/contactsSlice';
import { filterChange } from 'redux/filter/filterSlice';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const formSubmitHandler = data => {
    const inContacts = contacts.find(contact => contact.name === data.name);

    if (inContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(contactAdded(data));
  };

  const handleInputChange = event => {
    dispatch(filterChange(event.target.value));
  };

  const deleteContactByClick = event => {
    dispatch(contactDeleted(event.target.id));
  };

  const filterContactListByQuery = () => {
    if (filter && contacts) {
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

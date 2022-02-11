import { useEffect, useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactFilter from "./components/ContactFilter/ContactFilter";
import Section from "./components/Section";
import { ciEquals, getFromLocalStorage, saveToLocalStorage } from "./helpers";

import "./index.css";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = getFromLocalStorage("contacts");
    storedContacts && setContacts(storedContacts);
  }, []);

  useEffect(() => {
    saveToLocalStorage("contacts", contacts);
  }, [contacts]);

  const onFilterName = (e) => setFilter(e.target.value);

  const addContact = (contact) => {
    if (contacts.some((item) => ciEquals(item.name, contact.name))) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  const removeContact = (id) => {
    alert("Вы собираетесь удалить елемент с ID: " + id);
    setContacts(contacts.filter((item) => item.id !== id));
  };

  const filterContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const filtered = filterContacts();

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <ContactFilter filter={filter} handleFilterName={onFilterName} />
        <ContactList contacts={filtered} removeContact={removeContact} />
      </Section>
    </div>
  );
};

export default App;

import { useState } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactFilter from "./components/ContactFilter/ContactFilter";
import Section from "./components/Section";
import { ciEquals } from "./helpers";

import "./index.css";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onFilterName = (e) => setFilter(e.target.value);
  const onChangeNumber = (e) => setNumber(e.target.value);

  const addContact = (e) => {
    e.preventDefault();
    const contact = { id: uuid(), name, number };
    if (contacts.some((item) => ciEquals(item.name, contact.name))) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    // Reset all fields
    setName("");
    setNumber("");
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
        <ContactForm
          name={name}
          number={number}
          handleNameInput={onChangeName}
          handleNumberInput={onChangeNumber}
          addContact={addContact}
        />
      </Section>
      <Section title="Contacts">
        <ContactFilter filter={filter} handleFilterName={onFilterName} />
        <ContactList contacts={filtered} removeContact={removeContact} />
      </Section>
    </div>
  );
};

export default App;

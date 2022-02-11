import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import "./ContactForm.css";

export default function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onChangeName = (e) => setName(e.target.value);
  const onChangeNumber = (e) => setNumber(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    const contact = { id: uuid(), name, number };
    addContact(contact);
    reset();
  };

  return (
    <form onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChangeName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          className="form-control"
          id="number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChangeNumber}
        />
      </div>
      <input type="submit" value="Add contact" className="btn btn-primary" />
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

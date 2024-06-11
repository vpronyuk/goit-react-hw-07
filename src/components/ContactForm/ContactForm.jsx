import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const isDuplicateContact = (name) => {
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (isDuplicateContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="nameInput" className={css.label}>
        Name:{" "}
      </label>
      <input
        className={css.input}
        type="text"
        id="nameInput"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="numberInput" className={css.label}>
        Number:{" "}
      </label>
      <input
        className={css.input}
        type="tel"
        id="numberInput"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <button type="submit" className={css.addBtn}>
        Add Contact
      </button>
    </form>
  );
};
export default ContactForm;

import css from "../ContactListItem/ContactListItem.module.css";

const ContactListItem = ({ contact, onDeleteContact }) => (
  <li className={css.container}>
    <div className={css.name}>{contact.name}</div>
    <div className={css.number}>{contact.number}</div>
    <button
      className={css.btn}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

export default ContactListItem;

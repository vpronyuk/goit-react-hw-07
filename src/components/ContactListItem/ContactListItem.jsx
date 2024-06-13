import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "../ContactListItem/ContactListItem.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.container}>
      <div className={css.name}>{contact.name}</div>
      <div className={css.number}>{contact.number}</div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

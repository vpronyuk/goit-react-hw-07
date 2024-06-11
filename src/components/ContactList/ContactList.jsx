import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { deleteContact } from "../../redux/contactsOps";
import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.trim().toLowerCase())
    );
  });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

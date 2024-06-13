import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
// import { deleteContact } from "../../redux/contactsOps";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  // const contacts = useSelector((state) => {
  //   return state.contacts.items.filter((contact) =>
  //     contact.name.toLowerCase().includes(state.filter.trim().toLowerCase())
  //   );
  // });

  // const handleDelete = (id) => {
  //   dispatch(deleteContact(id));
  // };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          // onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

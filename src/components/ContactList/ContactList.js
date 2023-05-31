import { ContactItem, ContactName, ContactNumber, ContactBtn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
        <ul>
            {contacts.map(contact => {
                return (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}:</ContactName>
                        <ContactNumber>{contact.number}</ContactNumber>
                        <ContactBtn type="button" onClick={() => handleDelete(contact.id)}>
                           Delete
                        </ContactBtn>
                    </ContactItem>)
            })}
        </ul>
    )
};

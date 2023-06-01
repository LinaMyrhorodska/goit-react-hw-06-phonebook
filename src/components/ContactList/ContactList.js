import { ContactItem, ContactName, ContactNumber, ContactBtn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
        <ul>
            {filteredContacts.map(contact => {
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

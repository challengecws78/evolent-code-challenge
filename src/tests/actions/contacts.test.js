import { fetchContacts, addContact, updateContact, removeContact } from '../../actions/contacts';
import { contacts } from '../fixtures/contacts';

test('should set data in contacts action object', () => {
    const action = fetchContacts(contacts);
    expect(action).toEqual({
        type: 'FETCH_CONTACTS',
        contacts
    });
});

test('should add a new contact action object', () => {
    const contact = { 
        firstName: 'Aaron', 
        lastName: "Rogers",
        email:'packers.com', 
        phone: '571-356-9383',
        "status": "active" 
    };
    const action = addContact(contact);
    expect(action).toEqual({
        type: 'ADD_CONTACT',
        contact: {
            ...contact,
            id: expect.any(String)
        }
    });
});

test('should edit a contact action object', () => {
    const edittedContact = { 
        firstName: 'benben', 
        lastName:'two',
        email:'joehill.com', 
        phone: '703-356-9383' 
    };
    const action = updateContact('abc123', edittedContact);
    expect(action).toEqual({
        type: 'UPDATE_CONTACT',
        id: 'abc123',
        contact: edittedContact
    });
});

test('should setup remove contact action object', () => {
    const contact = { 
        firstName: 'Aaron', 
        lastName: "Rogers",
        email:'packers.com', 
        phone: '571-356-9383',
        "status": "inactive"
    };
    const action = removeContact('123', contact);
    expect(action).toEqual({
        type: 'REMOVE_CONTACT',
        id: '123',
        contact
    });
});
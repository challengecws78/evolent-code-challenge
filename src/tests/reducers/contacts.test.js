import { contacts } from '../fixtures/contacts';
import contactsReducer from '../../reducers/contacts';

test('the default state should be set', () => {
    const state = contactsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should update status of contact to inactive with the same argument id', () => {
    const contact = { ...contacts[0], status: 'inactive' };
    const action = { 
        type: 'REMOVE_CONTACT', 
        id: contacts[0].id, 
        contact
    };
    const state = contactsReducer(contacts, action);
    expect(state[0].status).toEqual(contact.status);
});

test('should not make any contact status inactive if the argument id isnt found', () => {
    const action = { 
        type: 'REMOVE_CONTACT', 
        id: '1b2',
        contact: contacts[0]
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual(contacts);
});

test('sets the data when contacts are fetched', () => {
    const action = { type: 'FETCH_CONTACTS', contacts };
    const state = contactsReducer([], action);
    expect(state).toEqual(contacts);
});

test('sets the data when contacts are fetched', () => {
    const action = { type: 'FETCH_CONTACTS', contacts };
    const state = contactsReducer([], action);
    expect(state).toEqual(contacts);
});

test('sets the data when contacts are fetched', () => {
    const contact = { 
        firstName: "Benbentwo",
        lastName: "Joe",
        phone: '703-356-9383' 
    };
    const action = { 
        type: 'UPDATE_CONTACT', 
        id: '3',
        contact, 
    };
    const state = contactsReducer(contacts, action);
    expect(state[2].firstName).toEqual(contact.firstName);
    expect(state[2].lastName).toEqual(contact.lastName);
    expect(state[2].phone).toEqual(contact.phone);
});
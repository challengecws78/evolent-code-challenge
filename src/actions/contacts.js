import * as types from '../utils/types';
import uuid from 'uuid';

export const fetchContacts = contacts => ({
    type: types.FETCH_CONTACTS,
    contacts
});

export const addContact = contact => ({
    type: types.ADD_CONTACT,
    contact: {
        id: uuid(),
        ...contact
    }
});

export const updateContact = (id , contact) => ({
    type: types.UPDATE_CONTACT,
    id,
    contact
});

export const removeContact = (id, contact) => ({
    type: types.REMOVE_CONTACT,
    id,
    contact
});

import filterContacts from '../../utils/filters';
import { contacts } from '../fixtures/contacts';

test('contacts will return the same value when filters are empty', () => {
    const filters = {
        searchText: '',
        sort: ''
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual(contacts);
});

test('contacts will be filtered by text value "@eggmail"', () => {
    const filters = {
        searchText: '@eggmail',
        sort: ''
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual([contacts[2]]);
});

test('contacts will be sorted by a-z"', () => {
    const filters = {
        searchText: '',
        sort: 'asc'
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual([contacts[0], contacts[2], contacts[1]]);
});

test('contacts will be sorted by z-a"', () => {
    const filters = {
        searchText: '',
        sort: 'desc'
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual([contacts[1], contacts[2], contacts[0]]);
});

test('contacts will be filtered by text value "gmailio.com" and sort by a-z', () => {
    const filters = {
        searchText: 'gmailio.com',
        sort: 'asc'
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual([contacts[0], contacts[1]]);
});

test('contacts will be filtered by text value "gmailio.com" and sort by z-a', () => {
    const filters = {
        searchText: 'gmailio.com',
        sort: 'desc'
    }
    const result = filterContacts(contacts, filters);
    expect(result).toEqual([contacts[1], contacts[0]]);
});
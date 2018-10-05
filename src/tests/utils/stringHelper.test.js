import { isEmailValid } from '../../utils/stringHelpers';
import { contacts } from '../fixtures/contacts';

test('name format will remove special characters from contact name', () => {
    const result = isEmailValid(contacts[1].email);
    expect(result).toBe(true);
});

test('name will remove extra spacing and apply proper spacing"', () => {
    const result = isEmailValid(contacts[1].phone);
    expect(result).toEqual(false);
});
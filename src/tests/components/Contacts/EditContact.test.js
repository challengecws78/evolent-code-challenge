import React from 'react';
import { shallow } from 'enzyme';
import { EditContact } from '../../../components/Contacts/EditContact';
import { contacts } from '../../fixtures/contacts';


let removeContact, updateContact, history, wrapper;

beforeEach(() => {
  updateContact = jest.fn();
  removeContact = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditContact
      updateContact={updateContact}
      removeContact={removeContact}
      history={history}
      contact={contacts[1]}
    />
  );
});

test('should render EditContact', () => {
  expect(wrapper).toMatchSnapshot()
});

test('should handle handle editing a contact', () => {
  wrapper.find('ContactForm').prop('onSubmit')(contacts[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(updateContact).toHaveBeenLastCalledWith(contacts[1].id, contacts[1]);
});

test('should handle removing a contact', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeContact).toHaveBeenLastCalledWith(contacts[1].id, {...contacts[1], "status": "inactive"});
});

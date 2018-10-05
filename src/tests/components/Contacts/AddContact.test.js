import React from 'react';
import { shallow } from 'enzyme';
import { AddContact } from '../../../components/Contacts/AddContact';
import { contacts } from '../../fixtures/contacts';

let onSubmit, history, wrapper;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddContact onSubmit={onSubmit} history={history} />);
});

test('should render AddContact component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ContactForm').prop('onSubmit')(contacts[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith({...contacts[0], status: "active"});
});

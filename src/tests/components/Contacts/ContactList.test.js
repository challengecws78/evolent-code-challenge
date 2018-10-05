import React from 'react';
import { shallow } from 'enzyme';
import { ContactList } from '../../../components/Contacts/ContactList';
import { contacts } from '../../fixtures/contacts';


test('should render ContactList with contacts data', () => {
    const wrapper = shallow(<ContactList contacts={contacts} />);
    expect(wrapper).toMatchSnapshot();
});
  
test('should render ContactList with empty message', () => {
    const wrapper = shallow(<ContactList contacts={[]} />);
    expect(wrapper).toMatchSnapshot();
});
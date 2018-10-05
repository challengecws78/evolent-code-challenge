import React from 'react';
import { shallow } from 'enzyme';
import { ContactItem } from '../../../components/Contacts/ContactItem';
import { contacts } from '../../fixtures/contacts';

test('will render the ContactItem', () => {
    const wrapper = shallow(<ContactItem  {...contacts[1]}/>);
    expect(wrapper).toMatchSnapshot();
});
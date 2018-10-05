import React from 'react';
import { shallow } from 'enzyme';
import { ContactPage } from '../../../components/Contacts/ContactPage';


test('will render the ContactPage', () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper).toMatchSnapshot();
});
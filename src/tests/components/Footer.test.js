import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../src/components/Footer';


test('will render the ContactPage', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});
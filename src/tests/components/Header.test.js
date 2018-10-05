import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/components/Header';

test('will render the ContactPage', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
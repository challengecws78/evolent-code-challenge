import React from 'react'
import { ValidatedInput } from '../../../components/Inputs/ValidatedInput';
import { shallow } from 'enzyme';
import { contacts } from '../../fixtures/contacts';

test('should render ValidatedInput with an empty value', ()=> {
    const onChange = jest.fn();
    const validate = jest.fn();
    const wrapper = shallow(
        <ValidatedInput 
            label="First Name" 
            name="firstName"
            type="text"
            placeholder="First Name"
            value=''
            validate={validate}
            onChange={onChange}
        />
    ); 
    expect(wrapper).toMatchSnapshot();
});

test('should render with value', ()=> {
    const onChange = jest.fn();
    const validate = jest.fn();
    const wrapper = shallow(
        <ValidatedInput
            label="First Name" 
            name="firstName"
            type="text"
            placeholder="First Name"
            value={contacts[0].name}
            validate={validate}
            onChange={onChange}
        />
    ); 
    expect(wrapper).toMatchSnapshot();
});

test('should throw error if name is empty', ()=> {
    const onChange = jest.fn();
    const name = 'firstName'
    const value = '';
    const wrapper = shallow(
        <ValidatedInput
            label="First Name" 
            name={name}
            type="text"
            placeholder="First Name"
            value={value}
            validate={val => (val ? false : 'First Name is Required')}
            onChange={onChange}
        />
    ); 
    wrapper.find('input').simulate('change', {
      target: { name, value }
    });
    expect(wrapper.state('error')).toBe('First Name is Required');
});

test('should not error if name is not empty', ()=> {
    const onChange = jest.fn();
    const name = 'firstName'
    const value = 'Aaron';
    const wrapper = shallow(
        <ValidatedInput
            label="First Name" 
            name={name}
            type="text"
            placeholder="First Name"
            value={value}
            validate={val => (val ? false : 'First Name is Required')}
            onChange={onChange}
        />
    ); 
    wrapper.find('input').simulate('change', {
      target: { name, value }
    });
    expect(wrapper.state('error')).toBe(false);
});
import React from 'react';
import { shallow } from 'enzyme';
import { ContactForm } from '../../../components/Contacts/ContactForm';
import { contacts } from '../../fixtures/contacts';

test('should render the ContactForm correctly', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit}/>);
    expect(wrapper).toMatchSnapshot();
});
  
test('should render the ContactForm correctly with contact data', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} {...contacts[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should disable button for invalid form submission', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.find('button').props().disabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    const name = 'firstName'
    const value = 'Aaron';
    wrapper.find('ValidatedInput').at(0).simulate('change', {
      name, value 
    });
    expect(wrapper.state('firstName')).toBe(value);
});

test('should set name on input change', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    const name = 'lastName'
    const value = 'Rodgers';
    wrapper.find('ValidatedInput').at(0).simulate('change', {
      name, value 
    });
    expect(wrapper.state('lastName')).toBe(value);
});

test('should set email on input change', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    const name = 'email'
    const value = 'thegoat@packers.com';
    wrapper.find('ValidatedInput').at(1).simulate('change', {
      name, value 
    });
    expect(wrapper.state('email')).toBe(value);
});

test('should set phone number on input change', () => {
    const onSubmit = jest.fn(); 
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    const name = 'phone'
    const value = '202-345-7898';
    wrapper.find('ValidatedInput').at(1).simulate('change', {
      name, value 
    });
    expect(wrapper.state('phone')).toBe(value);
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmit = jest.fn();  
    const wrapper = shallow(<ContactForm {...contacts[1]} onSubmit={onSubmit}/>);
    wrapper.find('form').simulate('submit' , {
        preventDefault: () => { }
    });
    expect(wrapper.find('button').props().disabled).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith({
        firstName: contacts[1].firstName,
        lastName: contacts[1].lastName,
        email: contacts[1].email,
        phone: contacts[1].phone
    });
});

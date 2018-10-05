import React from 'react';
import { shallow } from 'enzyme';
import { ContactFilters } from '../../../components/Contacts/ContactFilters';


let wrapper, filters, setContactFilter;
beforeEach(() => {
    filters = { searchText: '.com', sort: '' };
    setContactFilter = jest.fn();
    wrapper = shallow(
      <ContactFilters
        filters={filters}
        setContactFilter={setContactFilter}
      />
    )
});

test('should render ContactFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
  
test('should render ContactFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: { sort: 'asc'}
    });
    expect(wrapper).toMatchSnapshot();
});
  
test('should handle text change in input', () => {
    const name = 'searchText';
    const value = '.com';
    wrapper.find('input').simulate('change', {
        target: { name, value }
    });
    expect(setContactFilter).toHaveBeenLastCalledWith(name, value);
});

test('should handle a-z button click', () => {
    const name = 'sort';
    const value = 'asc';
    wrapper.find('button').at(0).simulate('click', {
        target: { name, value }
    });
    expect(setContactFilter).toHaveBeenLastCalledWith(name, value);
});

test('should handle z-a button click', () => {
    const name = 'sort';
    const value = 'desc';
    wrapper.find('button').at(1).simulate('click', {
        target: { name, value }
    });
    expect(setContactFilter).toHaveBeenLastCalledWith(name, value);
});
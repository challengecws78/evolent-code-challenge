import { setContactFilter } from '../../actions/filters';

test('should get name and value to set for the filters action object', () => {
    const action = setContactFilter('sort', 'dsc')
    expect(action).toEqual({
        type: 'CONTACT_FILTER',
        name: 'sort',
        value: 'dsc'
    })
});
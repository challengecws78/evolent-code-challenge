import filtersReducer from '../../reducers/filters';

let initialState
beforeEach(() => {
    initialState = {
        searchText: '',
        sort: ''
    }
});
test('should setup default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
});

test('should set state for searchText', () => {
    const action = {
        type: 'CONTACT_FILTER',
        name: 'searchText',
        value: '.com'
    };
    const state = filtersReducer(initialState, action);
    expect(state['searchText']).toEqual('.com');
});

test('should set state for sort', () => {
    const action = {
        type: 'CONTACT_FILTER',
        name: 'sort',
        value: 'desc'
    }
    const state = filtersReducer(initialState, action);
    expect(state['sort']).toEqual('desc');
});

import * as types from '../utils/types';

const initialState = {
    searchText: '',
    sort: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.CONTACT_FILTER:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
}
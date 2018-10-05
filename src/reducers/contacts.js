import * as types from '../utils/types';

export default (state=[], action) => {
    switch(action.type) {
        case types.FETCH_CONTACTS:
            return action.contacts
        case types.ADD_CONTACT:
            return [
                ...state,
                action.contact
            ]
        case types.UPDATE_CONTACT:
            return state.map(contact => {
                if(contact.id === action.id){
                    return {
                      ...contact,
                      ...action.contact
                    }
                } else {
                    return contact
                }
            });
        case types.REMOVE_CONTACT:
            return state.map(contact => {
                if(contact.id === action.id){
                    return {
                    ...contact,
                    ...action.contact
                    }
                } else {
                    return contact
                }
            });
        default:
            return state;
    }
}
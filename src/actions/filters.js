import * as types from '../utils/types';

export const setContactFilter = (name , value) => ({
    type: types.CONTACT_FILTER,
    name,
    value
});
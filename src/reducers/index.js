import { combineReducers } from 'redux';
import contactReducers from './contacts';
import filterReducers from './filters';
 
const reducers = combineReducers({
    contacts: contactReducers,
    filters: filterReducers
});


export default reducers;
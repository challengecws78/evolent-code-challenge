import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fetchContacts } from './actions/contacts';
import reducers from './reducers';
import { contacts } from './utils/contacts';
import './components/Contacts/contacts.scss';
const store = createStore(reducers);
store.dispatch(fetchContacts(contacts));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("app")
);
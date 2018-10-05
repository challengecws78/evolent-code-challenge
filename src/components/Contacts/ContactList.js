import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import filterContacts from '../../utils/filters';
import PropTypes from 'prop-types';

const ContactsTable = ({ contacts }) => {
    return (
        <table className="contactTable">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="tableBody" >
            {
                contacts.map((contact) =>(           
                    <ContactItem key={contact.id} {...contact} />                   
                ))        
            }
            </tbody>
        </table>
    );
}

const NoContacts = () => {
    return <p className="no-results">No Contacts Available</p>
}

export const ContactList = ({ contacts }) => (
    <div className="tableContainer">
        {
            contacts.length === 0 ? 
            <NoContacts /> :
            <ContactsTable contacts={contacts}/>     
        }
    </div>
);


const mapStateToProps = ({ contacts, filters }) => { 
    const contactsList = contacts.filter(contact => contact.status === "active")
    return {
        contacts: filterContacts(contactsList, filters)
    }
};

ContactList.propTypes = {
    contacts: PropTypes.array
}

export default connect(mapStateToProps)(ContactList);
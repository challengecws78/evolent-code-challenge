import React from 'react';
import ContactList from './ContactList';
import ContactFilters from './ContactFilters';

export const ContactPage = () => (
    <div>
      <ContactFilters />
      <ContactList />
    </div>
)

export default ContactPage;

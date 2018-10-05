import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Contacts/ContactForm';
import { addContact } from '../../actions/contacts';
import PropTypes from 'prop-types';

export class AddContact extends Component {
  onSubmit = contact => {
    this.props.onSubmit({
      ...contact,
      status: "active",
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="contact-input">
        <h1>Add Contact</h1>
        <ContactForm
          title="Add Contact"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: contact => dispatch(addContact(contact))
});

AddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired
}



export default connect(undefined, mapDispatchToProps)(AddContact);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { updateContact, removeContact } from '../../actions/contacts';
import PropTypes from 'prop-types';

export class EditContact extends Component {
    onSubmit = (contact) => {
      this.props.updateContact(this.props.contact.id, contact)
      this.props.history.push('/');
    }
    

    onRemove = () => {
        const inactiveContact = {
          ...this.props.contact, 
          status: "inactive"
        };
        this.props.removeContact(this.props.contact.id, inactiveContact);
        this.props.history.push('/');
    }
  
    render() {
      return (
        <div className="contact-input">
            <h1>Edit Contact</h1>
            <ContactForm
                title="Update Contact"
                {...this.props.contact}
                onSubmit={this.onSubmit}
            />
            <button className="btn-danger btn remove" onClick={this.onRemove}>remove</button>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({ contacts }, props) => ({
    contact: contacts.find(contact => contact.id === props.match.params.id)
  });
  
  const matchDispatchToProps = (dispatch) => ({
    updateContact: (id, contact) => dispatch(updateContact(id, contact)),
    removeContact: (id, contact) => dispatch(removeContact(id, contact))
  });
  
  EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    updateContact: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(EditContact);
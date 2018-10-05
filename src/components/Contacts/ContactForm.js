import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidatedInput from '../Inputs/ValidatedInput';
import { isEmailValid } from '../../utils/stringHelpers';
export class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.firstName || '',
            lastName: props.lastName || '',
            email: props.email || '',
            phone: props.phone || '',
        }
    }
    

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string
    }
    

    handleChange = ({ name, value }) => {
        this.setState({
            [name]: value
        });
    }

    get getValidation () {
        const { firstName, lastName, email, phone } = this.state;
        const firstNameLength = firstName.length;
        const lastNameLength = lastName.length;
        const emailValid = email.length;
        const phoneLength = phone.length;

        if (firstNameLength > 0 && lastNameLength > 0 && emailValid && phoneLength > 0) {
            return false;
        } else {
            return true;
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, email, phone } = this.state;   
        this.props.onSubmit({
            firstName,
            lastName,
            email,
            phone, 
        });
    }
    
    render() {
        return (
            <div>
                <form className="contact-form" onSubmit={this.onSubmit}>
                    <ValidatedInput
                        label="First Name" 
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        validate={val => (val ? false : 'First Name is Required')}
                    />
                    <ValidatedInput
                        label="Last Name" 
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        validate={val => (val ? false : 'Last Name is Required')}
                    />
                    <ValidatedInput
                        label="Email" 
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        validate={val => (isEmailValid(val) ? false : 'Invalid Email')}
                    />
                    <ValidatedInput
                        label="Phone" 
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        validate={val => (val ? false : 'Phone is Required')}
                    />
                    <button type="submit" className="btn btn-primary" disabled={this.getValidation}>{this.props.title}</button>
                </form>
            </div>
        );
    }
}



export default ContactForm;
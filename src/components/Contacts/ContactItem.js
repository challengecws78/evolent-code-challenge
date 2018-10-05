import React from 'react';
import { Link } from 'react-router-dom';


export const ContactItem = ({ id, firstName, lastName, email, phone, status }) => (
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{status}</td>
        <td><Link to={`/edit/${id}`} className="btn-primary btn">edit</Link></td>
    </tr>
)

export default ContactItem;
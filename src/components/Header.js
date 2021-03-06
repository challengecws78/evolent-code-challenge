import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <h1>Contact</h1>
    <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Contact</NavLink>
    </nav>
  </header>
);

export default Header;
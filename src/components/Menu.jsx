import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/context-example">Context Example</NavLink>
      <NavLink to="/api-example">Api Example</NavLink>
      <NavLink to="/form-example">From Example</NavLink>
    </nav>
  );
};

export default Menu;

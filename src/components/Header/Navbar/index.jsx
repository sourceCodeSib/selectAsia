// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const { active } = props;
  const location = useLocation();
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <Link to={'/'}>home</Link>
      {location.pathname === '/' && (
        <a href="#features">features</a>
      )}
      {location.pathname === '/' && (
        <a href="#products">products</a>
      )}
      {location.pathname === '/' && (
        <a href="#categories">categories</a>
      )}
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

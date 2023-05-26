// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <Link to={'/'}>home</Link>
      <a href="#features">features</a>
      <a href="#products">products</a>
      <a href="#categories">categories</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

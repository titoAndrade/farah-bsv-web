import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top">
      <Link to='/' className="nav-logo">Home</Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to='/' onClick={() => setIsOpen(!isOpen)}>Inicio</Link>
        <Link to='/Tablas' onClick={() => setIsOpen(!isOpen)}>Tablas</Link>
        <Link to='/Panes' onClick={() => setIsOpen(!isOpen)}>Panes</Link>
        <Link to='/Nosotros' onClick={() => setIsOpen(!isOpen)}>Nosotros</Link>
        <Link to='/Contacto' onClick={() => setIsOpen(!isOpen)}>Contacto</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};


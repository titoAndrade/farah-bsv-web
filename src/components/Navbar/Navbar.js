import React, { useState } from "react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top">
      <a className="nav-logo" href="/">home</a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Inicio</a>
        <a href="/about">Tablas</a>
        <a href="/service">Panes</a>
        <a href="/contact">Sobre nosotros</a>
        <a href="/contact" id="last">Contacto</a>
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


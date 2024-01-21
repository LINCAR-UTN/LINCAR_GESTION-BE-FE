import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarCustom() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
      <Link to="/" className="navbar-brand">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          LINCAR
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Autopartes" className="nav-link">Autopartes</Link>
            <Link to="/OrdenesProduccion" className="nav-link">Ordenes Produccion</Link>
            <Link to="/ModelosProductos" className="nav-link">Modelos</Link>
            <Link to="/OrdenesAutopartes" className="nav-link">Ordenes Autopartes</Link>
            <Link to="/Personas" className="nav-link">Personas</Link>
            <Link to="/SectoresProduccion" className="nav-link">Sectores Produccion</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;

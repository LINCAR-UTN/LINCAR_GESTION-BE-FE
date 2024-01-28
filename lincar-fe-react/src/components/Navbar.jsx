import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function NavbarCustom() {
  return (
    <>
 <Navbar bg="primary-lincar" variant="dark" expand="lg">
 <Container>
      <Navbar.Brand as={Link} to="/">Lincar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarColor01" />
      <Navbar.Collapse id="navbarColor01">
        <Nav className="me-auto">
        <NavDropdown title="Ordenes" id="autopartes-dropdown">
            <NavDropdown.Item as={Link} to="/OrdenesProduccion">Ordenes de Producciones</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/OrdenesAutopartes">Ordenes de Autopartes</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Autopartes" id="autopartes-dropdown">
            <NavDropdown.Item as={Link} to="/autopartes">Ver Autopartes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/AgregarAutopartes">Agregar Autopartes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/eliminar-autopartes">Eliminar Autopartes</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sectores" id="sectores-dropdown">
            <NavDropdown.Item as={Link} to="/sectoresProduccion">Ver Sectores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/agregar-sector">Agregar Sector</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/eliminar-sector">Eliminar Sector</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Modelos de Producción" id="modelos-dropdown">
            <NavDropdown.Item as={Link} to="/ModelosProductos">Ver Modelos de Producción</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/agregar-modelo">Agregar Modelo de Producción</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/eliminar-modelo">Eliminar Modelo de Producción</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Personas" id="personas-dropdown">
            <NavDropdown.Item as={Link} to="/Personas">Personas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/AgregarCliente">Agregar Cliente</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/AgregarEmpleado">Agregar Empleado</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarCustom;

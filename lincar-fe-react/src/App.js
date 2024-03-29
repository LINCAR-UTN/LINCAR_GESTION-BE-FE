import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/bootstrap.min.css'; 

import Home from './components/Home';
import Autopartes from './components/Autopartes/Autopartes';
import ModelosProductos from './components/ModelosProductos';
import OrdenesAutopartes from './components/OrdenesAutopartes';
import OrdenesProduccion from './components/OrdenesProduccion';
import Personas from './components/Personas/Personas';
import SectoresProduccion from './components/SectoresProduccion';
import AgregarCliente from './components/Personas/AgregarCliente'
import AgregarEmpleado from './components/Personas/AgregarEmpleado'
import Navbar from './components/Navbar'
import AgregarAutoparte from './components/Autopartes/AgregarAutoparte';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Autopartes" element={<Autopartes />} />
        <Route path="/ModelosProductos" element={<ModelosProductos />} />
        <Route path="/OrdenesAutopartes" element={<OrdenesAutopartes />} />
        <Route path="/AgregarAutopartes" element={<AgregarAutoparte />} />
        <Route path="/OrdenesProduccion" element={<OrdenesProduccion />} />
        <Route path="/Personas" element={<Personas />} />
        <Route path="/AgregarCliente" element={<AgregarCliente />} />
        <Route path="/AgregarEmpleado" element={<AgregarEmpleado />} />
        <Route path="/SectoresProduccion" element={<SectoresProduccion />} />
      </Routes>
    </Router>
    
  );
}

export default App;

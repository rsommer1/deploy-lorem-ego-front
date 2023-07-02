import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import mapa from '../../../public/assets/images/base_map/base_map.png';
import UserCheck from '../../views/protected/UserCheck';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Title />
      <NavBar />
      <img className="logo" src={mapa} alt="Mapa" />
      <h2>Un Juego de Estrategía con información parcial</h2>
      <UserCheck inverse>
        <div>
          <Link to="/Login">
            <button className="login-button">Iniciar Sesión</button>
          </Link>
          <Link to="/Signup">
            <button className="signup-button">Crear Cuenta</button>
          </Link>
        </div>
      </UserCheck>
    </>
  );
}

export default App;

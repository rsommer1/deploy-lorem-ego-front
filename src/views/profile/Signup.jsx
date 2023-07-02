import React, { useState } from 'react';
import axios from 'axios';
import Title from "../../common/Title/Title";
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/signup`, {
      username: username,
      email: email,
      password: password
    })
    .then((response) => {
      console.log('Registro exitoso! Ahora puedes volver y loguearte');
      setError(false);
      setMsg('Registro exitoso! Ahora puedes volver y loguearte');
      navigate('/Login');
    })
    .catch((error) => {
      console.error('Ocurrió un error:', error);
      setError(true);
    });
  }

  return (
    <div className="Login">
      <Title />
      {msg.length > 0 && <div className="successMsg"> {msg} </div>}

      {error && <div className="error">Hubo un error con el Registro, por favor trata nuevamente.</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Crear Cuenta" />
      </form>
    </div>
  );
}

export default Signup;

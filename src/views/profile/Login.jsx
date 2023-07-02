import React, { useState, useContext } from 'react';
import Title from "../../common/Title/Title";
import './Login.css';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password
    };

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, data)
      .then((response) => {
        const access_token = response.data.accessToken;
        setToken(access_token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Login">
      <Title />
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import NavBar from "../../common/NavBar/NavBar";
import Title from "../../common/Title/Title";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from 'jwt-decode'
import "./MainPage.css";
import UserCheck from "../protected/UserCheck";
import VITE_BACKEND_URL from "../../config";


function MainPage() {
  const [inProgressGames, setInProgressGames] = useState([]);
  const [openGames, setOpenGames] = useState([]);

  const token = localStorage.getItem("token");
  const userId = jwtDecode(token).sub;


  useEffect(() => {
  

    //Despliegues

    // Despliegue de Partidas en Curso
    const fetchInProgressGames = async () => {
      try {
        const response = await axios.get(`${VITE_BACKEND_URL}/game/ongoing/${userId}`);
        const { games } = response.data;
        setInProgressGames(games);
      } catch (error) {
        console.log(error);
      }
    };

    // Despliegue de Partidas para Unirse
    const fetchOpenGames = async () => {
      try {
        const response = await axios.get(`${VITE_BACKEND_URL}/game/joinable/${userId}`);
        const { games } = response.data;
        setOpenGames(games);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInProgressGames();
    fetchOpenGames();
  }, []);

  // Crear Partida
  const handleCreateGame = async () => {

    const data = {
      userid: userId,
    };

    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/game/create`, data);

    } catch (error) {
      console.log(error);
    }
  };

  // Unirse a Partida
  const handleJoinGame = async (gameId) => {
    const data = {
      userid: userId,
      gameid: gameId,
    };

    try {
      await axios.post(`${VITE_BACKEND_URL}/game/join`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <UserCheck>
        <Title />
        <NavBar />
        <div className="create-game-container">
          <button className="create-game-button" onClick={handleCreateGame}>
            Crear Partida
          </button>
        </div>
        <div className="container">
          <div className="left-section">
            <h2>Partidas en Curso</h2>
            {inProgressGames && inProgressGames.length > 0 ? (
              inProgressGames.map((gameId) => (
                <div key={gameId[0]} className="game-item">
                  <p>{`Partida en curso ${gameId[0]}`}</p>
                  <Link to={`/Game/${gameId[0]}/${gameId[1]}/${gameId[2]}`}>
                    <button className="return-to-game-button">Volver a la partida</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>No hay partidas en curso.</p>
            )}
          </div>
          <div className="right-section">
            <h2>Unirse a Partida</h2>
            {openGames && openGames.length > 0 ? (
              openGames.map((gameId) => (
                <div key={gameId} className="game-item">
                  <p>{`Partida abierta ${gameId}`}</p>
                  <button className="join-game-button" onClick={() => handleJoinGame(gameId)}>
                    Unirse a la partida
                  </button>
                </div>
              ))
            ) : (
              <p>No hay partidas abiertas.</p>
            )}
          </div>
        </div>
      </UserCheck>
    </>
  );
}

export default MainPage;

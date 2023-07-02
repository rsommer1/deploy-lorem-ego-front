import { useParams } from "react-router-dom";
import "./Game.css";
import Board from "../../common/board/Board";
import Title from "../../common/Title/Title";
import NavBar from "../../common/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import UserCheck from "../protected/UserCheck";
import axios from "axios";
import VITE_BACKEND_URL from "../../config";

function Game() {
  const { id, playerid, color } = useParams();
  const [turnColor, setTurnColor] = useState("");
  const [gameStage, setGameStage] = useState("");

  React.useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/game/${playerid}`)
      .then((response) => {
        const turn = response.data.turn;
        const stage = response.data.stage;
        if (turn % 2 === 0) {
          setTurnColor("Red");
        } else {
          setTurnColor("Blue");
        }
        setGameStage(stage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UserCheck>
      <div className="game-container">
        <Title />
        <NavBar />

        <div className="game-content">
          <div className="sidebar-left">
            <div className="turn-container">
              {gameStage === "finished" ? (
                <div className="game-finished">Partida Terminada</div>
              ) : (
                <>
                  <div className="turn-label">Turno actual: {turnColor}</div>
                  <div className="turn-player">
                    <div
                      className="player-color"
                      style={{ backgroundColor: turnColor }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="main-content">
            <Board id={id} playerid={playerid} color={color} />
          </div>
        </div>
      </div>
    </UserCheck>
  );
}

export default Game;



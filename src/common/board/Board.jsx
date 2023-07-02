import React, { useEffect } from "react";
import "./Board.css";
import Tile from "../Tile/Tile";
import axios from "axios";

import bandera_rojo from "../../../public/assets/images/tokens/token_bandera/bandera_rojo.png";
import bandera_azul from "../../../public/assets/images/tokens/token_bandera/bandera_azul.png";
import kamikaze_rojo from "../../../public/assets/images/tokens/token_kamikaze/kamikaze_rojo.png";
import kamikaze_azul from "../../../public/assets/images/tokens/token_kamikaze/kamikaze_azul.png";
import explorador_rojo from "../../../public/assets/images/tokens/token_explorador/explorador_rojo.png";
import explorador_azul from "../../../public/assets/images/tokens/token_explorador/explorador_azul.png";
import medusa_rojo from "../../../public/assets/images/tokens/token_medusa/medusa_rojo.png";
import medusa_azul from "../../../public/assets/images/tokens/token_medusa/medusa_azul.png";
import saltador_rojo from "../../../public/assets/images/tokens/token_saltador/saltador_rojo.png";
import saltador_azul from "../../../public/assets/images/tokens/token_saltador/saltador_azul.png";
import francotirador_rojo from "../../../public/assets/images/tokens/token_francotirador/francotirador_rojo.png";
import francotirador_azul from "../../../public/assets/images/tokens/token_francotirador/francotirador_azul.png";
import profeta_rojo from "../../../public/assets/images/tokens/token_profeta/profeta_rojo.png";
import profeta_azul from "../../../public/assets/images/tokens/token_profeta/profeta_azul.png";
import maldito_rojo from "../../../public/assets/images/tokens/token_maldito/maldito_rojo.png";
import maldito_azul from "../../../public/assets/images/tokens/token_maldito/maldito_azul.png";
import mago_rojo from "../../../public/assets/images/tokens/token_mago/mago_rojo.png";
import mago_azul from "../../../public/assets/images/tokens/token_mago/mago_azul.png";
import campeon_rojo from "../../../public/assets/images/tokens/token_campeon/campeon_rojo.png";
import campeon_azul from "../../../public/assets/images/tokens/token_campeon/campeon_azul.png";
import demonio_rojo from "../../../public/assets/images/tokens/token_demonio/demonio_rojo.png";
import demonio_azul from "../../../public/assets/images/tokens/token_demonio/demonio_azul.png";
import oculto_rojo from "../../../public/assets/images/tokens/token_oculto/oculto_rojo.png";
import oculto_azul from "../../../public/assets/images/tokens/token_oculto/oculto_azul.png";



const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g"];



function Board({ id, playerid, color }) {

  const [pieces, setPieces] = React.useState([]);

    React.useEffect(()=> {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/pieces/${id}`)
        .then((response) => {
            const setUpPieces = response.data.result.map((piece) => {
            let image;
                    
            if (piece.hidden === false) {
                switch (piece.type) {
                  case "Bandera":
                    image = piece.color === "red" ? bandera_rojo : bandera_azul;
                    break;
                  case "Kamikaze":
                    image = piece.color === "red" ? kamikaze_rojo : kamikaze_azul;
                    break;
                  case "Explorador":
                    image = piece.color === "red" ? explorador_rojo : explorador_azul;
                    break;
                  case "Medusa":
                    image = piece.color === "red" ? medusa_rojo : medusa_azul;
                    break;
                  case "Saltador":
                    image = piece.color === "red" ? saltador_rojo : saltador_azul;
                    break;
                  case "Francotirador":
                    image = piece.color === "red" ? francotirador_rojo : francotirador_azul;
                    break;
                  case "Profeta":
                    image = piece.color === "red" ? profeta_rojo : profeta_azul;
                    break;
                  case "Maldito":
                    image = piece.color === "red" ? maldito_rojo : maldito_azul;
                    break;
                  case "Mago":
                    image = piece.color === "red" ? mago_rojo : mago_azul;
                    break;
                  case "Campeon":
                    image = piece.color === "red" ? campeon_rojo : campeon_azul;
                    break;
                  case "Demonio":
                    image = piece.color === "red" ? demonio_rojo : demonio_azul;
                    break;
                  default:
                    image = undefined;
                    break;
                }
            } else {
                switch (piece.type) {
                    case "Bandera":
                      if (color === "red") {
                        image = piece.color === "red" ? bandera_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? bandera_azul : oculto_rojo;
                      }
                      break;
                    case "Kamikaze":
                      if (color === "red") {
                        image = piece.color === "red" ? kamikaze_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? kamikaze_azul : oculto_rojo;
                      }
                      break;
                    case "Explorador":
                      if (color === "red") {
                        image = piece.color === "red" ? explorador_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? explorador_azul : oculto_rojo;
                      }
                      break;
                    case "Medusa":
                      if (color === "red") {
                        image = piece.color === "red" ? medusa_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? medusa_azul : oculto_rojo;
                      }
                      break;
                    case "Saltador":
                      if (color === "red") {
                        image = piece.color === "red" ? saltador_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? saltador_azul : oculto_rojo;
                      }
                      break;
                    case "Francotirador":
                      if (color === "red") {
                        image = piece.color === "red" ? francotirador_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? francotirador_azul : oculto_rojo;
                      }
                      break;
                    case "Profeta":
                      if (color === "red") {
                        image = piece.color === "red" ? profeta_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? profeta_azul : oculto_rojo;
                      }
                      break;
                    case "Maldito":
                      if (color === "red") {
                        image = piece.color === "red" ? maldito_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? maldito_azul : oculto_rojo;
                      }
                      break;
                    case "Mago":
                      if (color === "red") {
                        image = piece.color === "red" ? mago_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? mago_azul : oculto_rojo;
                      }
                      break;
                    case "Campeon":
                      if (color === "red") {
                        image = piece.color === "red" ? campeon_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? campeon_azul : oculto_rojo;
                      }
                      break;
                    case "Demonio":
                      if (color === "red") {
                        image = piece.color === "red" ? demonio_rojo : oculto_azul;
                      } else {
                        image = piece.color === "blue" ? demonio_azul : oculto_rojo;
                      }
                      break;
                    default:
                      image = undefined;
                      break;
                }
            }
              return {
                ...piece,
                x: piece.position_x,
                y: piece.position_y,
                image,
              };
            });
            setPieces(setUpPieces);
            })
            .catch((error) => {
                console.log(error);
            })
        }, [id]);


  const [gridX, setGridX] = React.useState(0);
  const [gridY, setGridY] = React.useState(0);
  const [pieceSelected, setPieceSelected] = React.useState(null);
  const boardRef = React.useRef(null);
  // 
  // conseguir id juego con el id del player a traves del endpoint

  
  async function checkValidMoves(x_inicial, y_inicial, x_final, y_final) {
    // Hacer la llamada al endpoint del backend para obtener los posibles movimientos
    // y devolverlos directamente. usar x_inicial, y_inicial

    // conseguir id juego con el id del player a traves del endpoint

    const data = {
        initial_x: x_inicial,
        initial_y: y_inicial,
        final_x: x_final,
        final_y: y_final,
        playerid: playerid // Reemplaza con el ID del jugador correspondiente
      };

    
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pieces/move`, data);
        const isValidMove = response.data.result; // Reemplaza "isValidMove" con la propiedad correcta de la respuesta del backend
    
        return isValidMove;
      } catch (error) {
        console.log(error);
        return false;
      }
  }
  

  function grabPiece(e) {
    const element = e.target;
    board =boardRef.current;
    if (element.classList.contains("piece")) {
      

      setGridX(Math.max(0,Math.min(6,Math.floor((e.clientX - board.offsetLeft- 5) / 61))))
      setGridY(Math.min(9,Math.abs(Math.min(0,Math.floor((e.clientY - board.offsetTop + 61 + window.scrollY - 630 + 8) / 61)))))

      const x = e.clientX - 30.5;
      const y = e.clientY - 30.5 + window.scrollY;

      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setPieceSelected(element);

    }
  }


  function movePiece(e) {
    if (pieceSelected) {


      const x = e.clientX - 22.5;
      const y = e.clientY - 22.5 + window.scrollY; 

      // Obtener los límites del tablero
      const boardRect = boardRef.current.getBoundingClientRect();
      const minX = boardRect.left;
      const minY = boardRect.top + window.scrollY;
      const maxX = boardRect.right - 43; // 61
      const maxY = boardRect.bottom - 43 + window.scrollY;

      // Limitar las coordenadas dentro de los límites del tablero
      const clampedX = Math.min(Math.max(x, minX), maxX);
      const clampedY = Math.min(Math.max(y, minY), maxY);

      pieceSelected.style.position = "absolute";
      pieceSelected.style.left = `${clampedX}px`;
      pieceSelected.style.top = `${clampedY}px`;

    }

  }

  async function dropPiece(e) {
    board = boardRef.current;
  
    if (pieceSelected) {
      const x = Math.max(0, Math.min(6, Math.floor((e.clientX - board.offsetLeft - 5) / 61)));
      const y = Math.min(9, Math.abs(Math.min(0, Math.floor((e.clientY - board.offsetTop + 61 + window.scrollY - 630 + 8) / 61))));
  
      const pieceToMove = pieces.find(p => p.x === gridX && p.y === gridY);
      if (pieceToMove) {
        try {
          const isValidMove = await checkValidMoves(gridX, gridY, x, y);
          if (isValidMove) {
            // Realizar el movimiento y actualizar el tablero
            pieceToMove.x = x;
            pieceToMove.y = y;

          } else {
            // Restablecer la posición del elemento seleccionado
            pieceSelected.style.position = "relative";
            pieceSelected.style.removeProperty("top");
            pieceSelected.style.removeProperty("left");
          }
          setPieceSelected(null);
        } catch (error) {
          console.log(error);
          setPieceSelected(null);
        }
      } else {
        setPieceSelected(null);
      }
    }
  }
  

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${j},${i}`} number={number} image={image} />);
    }
  }

  return (
    <>
      <div 
      ref={boardRef}
      onMouseMove={movePiece} 
      onMouseDown={grabPiece} 
      onMouseUp={dropPiece}
      id="board">{board}
      </div> 
    </>
  );
}

export default Board;

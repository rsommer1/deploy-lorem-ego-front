import React, { createContext, useState } from "react";
import NavBar from "../../common/NavBar/NavBar";
import Title from "../../common/Title/Title";
import "./instructions.css";
import banderaImage from "../../../public/assets/images/tokens/token_bandera/bandera.png";
import kamikazeImage from "../../../public/assets/images//tokens/token_kamikaze/kamikaze.png";
import exploradorImage from "../../../public/assets/images/tokens/token_explorador/explorador.png";
import medusaImage from "../../../public/assets/images/tokens/token_medusa/medusa.png";
import saltadorImage from "../../../public/assets/images/tokens/token_saltador/saltador.png";
import francotiradorImage from "../../../public/assets/images/tokens/token_francotirador/francotirador.png";
import profetaImage from "../../../public/assets/images/tokens/token_profeta/profeta.png";
import malditoImage from "../../../public/assets/images/tokens/token_maldito/maldito.png";
import magoImage from "../../../public/assets/images/tokens/token_mago/mago.png";
import campeonImage from "../../../public/assets/images/tokens/token_campeon/campeon.png";
import demonioImage from "../../../public/assets/images/tokens/token_demonio/demonio.png";

export const RuleContext = createContext(null);

const rulesTexts = {
  1: "1- Al iniciar la partida las piezas de ambos jugadores se posicionan de manera totalmente aleatoria, salvo por la bandera, la cual se posicionara aleatoriamente solo en la ultima fila de cada jugador. El jugador azul comenzara y sera seguido por el rojo.",
  2: "2- Durante tu turno, puedes seleccionar una de tus piezas y moverla en el tablero. Ciertas piezas pueden moverse de manera distinta a las demas. Puedes mover una pieza hacia una casilla vacía o hacia una casilla ocupada por una pieza enemiga, lo que puede desencadenar un enfrentamiento. ",
  3: "3- En caso de enfrentamiento entre dos piezas, se determinará el resultado en función de los puntos de poder de cada pieza. En caso de victoria, tu pieza ocupará la posición de la pieza derrotada. Si resultas derrotado, tu pieza será destruida y la pieza enemiga ocupará su lugar. En caso de un empate, ambas piezas serán destruidas. Una vez que se haya resuelto el enfrentamiento, el turno llega a su fin y pasa al siguiente jugador.",
  4: "4- Existen situaciones especiales que alteran las reglas habituales. En el caso del Kamikaze, su enfrentamiento resulta en la destrucción de ambas piezas. Por otro lado, el Francotirador se enfrenta a distancia. En caso de ganar un enfrentamiento, el Francotirador permanece en su posición original, mientras que en caso de perder, no sufre consecuencias. En un enfrentamiento entre Francotiradores, el ganador es quien comienza el ataque.",
  5: "5- Una vez que se ha resuelto un movimiento o un enfrentamiento de piezas, el turno llega a su fin y pasa al siguiente jugador.",
  6: "6- La partida termina cuando eliminas la Bandera del enemigo o cuando eliminas a todas las piezas del ejército enemigo. También puede haber un empate si ambas Banderas son las únicas piezas restantes en el tablero.",
};

const pieceUrls = [
  ["Bandera", banderaImage, "La Bandera es el corazón de tu ejército, el símbolo de tu causa. Esta valiosa pieza debe ser protegida a toda costa, ya que si cae en manos enemigas, significaría la derrota segura. Para asegurar su resguardo, debes colocarla estratégicamente en un punto vital, ya que una vez colocada, la Bandera permanecerá fija en su posición durante toda la partida", "Poder de ataque: 0", "Especial: No se mueve y pierdes si es atacada"],
  ["Kamikaze", kamikazeImage, "El Kamikaze es una fuerza destructiva que no conoce límites. Dotado de un poder explosivo sin igual, esta pieza tiene la capacidad de eliminar a cualquier adversario, incluso a las piezas más poderosas que se interpongan en su camino. Sin embargo, ten en cuenta que su ataque letal le cuesta la vida.", "Poder de ataque: 1", "Especial: Si se enfrenta a una pieza en su mismo espacio, ambas son destruidas"],
  ["Explorador", exploradorImage, "El Explorador es un intrépido aventurero sin límites, posee la habilidad excepcional de desplazarse a voluntad por todo el tablero en cualquier dirección que elija, permitiéndole explorar cada rincón del campo de batalla con audacia. Sin embargo, su valentía no pasa desapercibida, ya que al caer en combate, revela la identidad de su asesino, dejando su presencia marcada de forma permanente a lo largo de toda la partida.", "Poder de ataque: 2", "Especial: Puede moverse multiples espacios en linea recta hasta chocar contra una pieza. Si es destruida por una ficha, esta sera revelada por el resto de la partida"],
  ["Medusa", medusaImage, "La Medusa es una entidad misteriosa y peligrosa, portadora de un poder ancestral.", "Poder de ataque: 3", "Especial: No tiene"],
  ["Saltador", saltadorImage, "El Saltador es un guerrero ágil y versátil. Con la capacidad de moverse en todas las direcciones, este hábil estratega es impredecible en el campo de batalla. Su movilidad sin restricciones le permite superar obstáculos y sorprender a sus oponentes con ataques inesperados desde todas las direcciones.", "Poder de ataque: 4", "Especial: Puede moverse en diagonal."],
  ["Francotirador", francotiradorImage, "El Francotirador es un maestro del combate a distancia. Con precisión letal, puede eliminar objetivos desde 2 casillas de distancia en cualquiera de las 4 direcciones. Sin embargo, ten en cuenta que el Francotirador no puede disparar a una casilla de distancia ni enfrentarse en combate cuerpo a cuerpo, ya que esto significa una muerte segura.", "Poder de ataque: 1", "Especial: Esta pieza puede atacar a distancia de 1 casilla extra, si lo hace su ataque se convierte en 5, esta no se mueve y solo puede ser destruida por un francotirador."],
  ["Profeta", profetaImage, "El Profeta es un ser enigmático, dotado de una percepción excepcional. A través de su sabiduría y experiencia, puede discernir las intenciones ocultas de sus oponentes. Siempre un paso adelante, el Profeta es un estratega formidable y una guía confiable en el campo de batalla.", "Poder de ataque: 6", "Especial: No tiene"],
  ["Maldito", malditoImage, "El Maldito es un guerrero atormentado, marcado por una tragedia del pasado. Su presencia misma es una advertencia para aquellos que se atreven a enfrentarlo. Con una ferocidad despiadada y una sed inextinguible de venganza, El Maldito se convierte en un oponente temible, capaz de hacer frente a cualquier desafío con una determinación inquebrantable.", "Poder de ataque: 7", "Especial: No tiene"],
  ["Mago", magoImage, "El Mago es un hechicero dotado de poderes arcanos. Sus conjuros y encantamientos le otorgan el control absoluto sobre el flujo de la batalla.  Su presencia es una fuerza imponente que infunde temor en el corazón de sus enemigos y brinda esperanza a sus aliados.", "Poder de ataque: 8", "Especial: No tiene"],
  ["Campeon", campeonImage, "El Campeón es un guerrero de élite, cuyo nombre se susurra con reverencia en todos los rincones del reino. Dotado de habilidades excepcionales y una fuerza sobrehumana, es una fuerza imparable en el campo de batalla. Su determinación y valentía lo convierten en un líder inspirador para tus tropas.", "Poder de ataque: 9", "Especial: No tiene"],
  ["Rey Demonio", demonioImage, "El Rey Demonio, una entidad que encarna la oscuridad y la maldad en su forma más pura. Este ser temido y reverenciado es el gobernante indiscutible de las fuerzas infernales. Su poderío destructivo es inigualable, capaz de desatar la destrucción y la muerte en cada rincón del campo de batalla. Su presencia es aterradora, y su dominio absoluto infunde un miedo profundo en el corazón de aquellos que se atreven a desafiarlo. El Rey Demonio es la encarnación misma del mal, y su legado de devastación y caos perdura en los anales de la historia.", "Poder de ataque: 10", "Especial: Su poder de ataque la vuelve vulnerable solo a un Kamikaze u otro Rey Demonio"],
];

function Instructions() {
  const [rule, setRule] = useState(1);
  const [piece, setPiece] = useState(0);

  const nextRule = () => {
    if (rule === 6) {
      setRule(1);
    } else {
      setRule(rule + 1);
    }
  };

  const lastRule = () => {
    if (rule === 1) {
      setRule(6);
    } else {
      setRule(rule - 1);
    }
  };

  const nextPiece = () => {
    if (piece === 10) {
      setPiece(0);
    } else {
      setPiece(piece + 1);
    }
  };

  const lastPiece = () => {
    if (piece === 0) {
      setPiece(10);
    } else {
      setPiece(piece - 1);
    }
  };

  return (
    <RuleContext.Provider value={rule}>
      <Title />
      <NavBar />
      <div>
        <h1 className="instructions-title">Reglas y fichas</h1>
        <p className="instruction-text">{rulesTexts[rule]}</p>
        <div className="buttons-container">
          <button className="instruction-button" onClick={lastRule}>
            Last
          </button>
          <button className="instruction-button" onClick={nextRule}>
            Next
          </button>
        </div>
        <div className="piece-container">
          <p className="piece-name">{pieceUrls[piece][0]}</p>
          <img className="instruction-image" src={pieceUrls[piece][1]} alt="" />
          <div className="piece-description">
            {pieceUrls[piece][2]}<br/>
            {pieceUrls[piece][3]}<br/>
            {pieceUrls[piece][4]}
            </div>
          <div className="buttons-container">
            <button className="instruction-button" onClick={lastPiece}>
              Last
            </button>
            <button className="instruction-button" onClick={nextPiece}>
              Next
            </button>
          </div>
        </div>
      </div>
    </RuleContext.Provider>
  );
}

export default Instructions;

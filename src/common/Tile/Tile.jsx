import React from 'react';
import "./Tile.css";

const Tile = ({ number, image, highlight }) => {
  const className = ["tile",
    number % 2 === 0 && "orange-tile",
    number % 2 !== 0 && "red-tile",
    highlight && "tile-highlight",
    image && "piece-tile"].filter(Boolean).join(' ');

  return (
    <div className={className}>
      {image && <div style={{ backgroundImage: `url(${image})` }} className="piece"></div>}
    </div>
  );
};

export default Tile;




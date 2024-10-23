// PlayersList.js
import React from 'react';
import Player from './player'; // Assurez-vous que le chemin est correct
import players from './players'; // Assurez-vous que le chemin est correct

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

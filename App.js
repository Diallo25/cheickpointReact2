// App.js
import React from 'react';
import './App.css';
import PlayersList from './playersList'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div>
      <h1>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;

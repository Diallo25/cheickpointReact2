// Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team} <br />
          <strong>Nationalité:</strong> {nationality} <br />
          <strong>Numéro de maillot:</strong> {jerseyNumber} <br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Définir des props par défaut
Player.defaultProps = {
  name: 'Nom inconnu',
  team: 'Équipe inconnue',
  nationality: 'Nationalité inconnue',
  jerseyNumber: 'N/A',
  age: 'N/A',
  image: 'https://via.placeholder.com/150' // Image par défaut
};

// Définir les types de props
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string,
};

export default Player;

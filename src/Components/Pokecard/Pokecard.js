import React from 'react';
import './Pokecard.css';

export default function PokeCard({ url_image, pokemon, type_1, speed, attack, defense }) {
  return (
    <div className="pokecard">
      <h2> Name: {pokemon} </h2>
      <img src={url_image} />
      <div className="stats">
        <h3> Type: {type_1} </h3>
        <h3> Speed: {speed} </h3>
        <h3> Attack: {attack} </h3>
        <h3> Defense: {defense} </h3>
      </div>
    </div>
  );
}

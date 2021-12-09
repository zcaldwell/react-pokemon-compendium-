import React from 'react';

export default function PokeCard({ url_image, pokemon, type_1, shape, speed, attack, defense }) {
  return (
    <div className="pokecard">
      <img src={url_image} />
      <h2> Name: {pokemon} </h2>
      <h3> Type: {type_1} </h3>
      <h3> Speed: {speed} </h3>
      <h3> Attack: {attack} </h3>
      <h3> Defense: {defense} </h3>
    </div>
  );
}

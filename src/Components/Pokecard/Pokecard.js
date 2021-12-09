import React from 'react';

export default function PokeCard({ url_image, pokemon, type_1 }) {
  return (
    <div className="pokecard">
      <img src={url_image} />
      <h2> Name:{pokemon} </h2>
      <h3> Type:{type_1} </h3>
    </div>
  );
}

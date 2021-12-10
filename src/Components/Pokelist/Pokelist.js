import React from 'react';
import PokeCard from '../Pokecard/Pokecard';
import './pokelist.css';

export default function PokeList({ pokemon }) {
  return (
    <div className="card-container">
      {pokemon.map((poke) => (
        <PokeCard key={poke.pokemon} {...poke} />
      ))}
    </div>
  );
}

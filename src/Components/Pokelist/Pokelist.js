import React from 'react';
import PokeCard from '../Pokecard/Pokecard';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <PokeCard key={poke.pokemon} {...poke} />
      ))}
    </div>
  );
}

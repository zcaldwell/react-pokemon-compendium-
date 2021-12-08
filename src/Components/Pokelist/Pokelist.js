export default function PokeList({ pokemon }) {
  return (
    <div className="pokeCard">
      {pokemon.map((poke) => (
        <p key={poke.id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}

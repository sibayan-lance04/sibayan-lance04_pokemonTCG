"use client";

function Card({ pokemon }) {
  return (
    <article className="card">
      <img src={pokemon.images.small} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>
      <p>HP: {pokemon.hp}</p>
      <p>Type: {pokemon.types?.[0]}</p>
    </article>
  );
}

export default Card;
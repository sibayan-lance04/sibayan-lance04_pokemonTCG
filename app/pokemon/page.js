"use client";

import { useGetPokemonQuery } from "../rtk/pokemonApi";

export default function Page() {
  const { data, isLoading, isError } = useGetPokemonQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;

  const cards = data?.data || [];

  return (
    <div style={grid}>
      {cards.map((pokemon) => (
        <div key={pokemon.id} style={card}>
          <img
            src={pokemon.images?.small}
            alt={pokemon.name}
            style={image}
          />
          <h3 style={title}>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}


const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px"
};

const card = {
  width: "200px",
  padding: "10px",
  borderRadius: "8px",
  background: "white",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const image = {
  width: "100%",
  objectFit: "contain"
};

const title = {
  marginTop: "10px",
  fontSize: "18px",
  fontWeight: "bold"
};
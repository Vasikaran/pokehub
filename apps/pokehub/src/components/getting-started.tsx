"use client";
import { AppState } from "@/store";
import { Button } from "@pokehub/components";
import { formatDate } from "@pokehub/utils";
import { useSelector } from "react-redux";

export const GettingStarted = () => {
  const pokemons = useSelector((state: AppState) => state.pokemon.pokemons);
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

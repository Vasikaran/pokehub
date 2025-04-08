import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PokemonCard } from "./pokemon-card";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof PokemonCard> = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the Pokemon",
    },
    image: {
      control: "text",
      description: "URL of the Pokemon image",
    },
    types: {
      control: "object",
      description: "Array of Pokemon types",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when card is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

export const Default: Story = {
  args: {
    name: "pikachu",
  },
};

export const WithImage: Story = {
  args: {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
};

export const WithTypes: Story = {
  args: {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  },
};

export const WithMultipleTypes: Story = {
  args: {
    name: "dragalge",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
    types: ["poison", "dragon", "water"],
  },
};

export const Interactive: Story = {
  args: {
    name: "eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    types: ["normal"],
    onClick: action("PokemonCard clicked"),
  },
};

export const PokemonCollection: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        maxWidth: "950px",
      }}
    >
      <PokemonCard
        name="pikachu"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        types={["electric"]}
        onClick={action("Pikachu clicked")}
      />
      <PokemonCard
        name="squirtle"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        types={["water"]}
        onClick={action("Squirtle clicked")}
      />
      <PokemonCard
        name="charmander"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        types={["fire"]}
        onClick={action("Charmander clicked")}
      />
      <PokemonCard
        name="jigglypuff"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
        types={["normal", "fairy"]}
        onClick={action("Jigglypuff clicked")}
      />
      <PokemonCard
        name="gengar"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
        types={["ghost", "poison"]}
        onClick={action("Gengar clicked")}
      />
      <PokemonCard
        name="mewtwo"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
        types={["psychic"]}
        onClick={action("Mewtwo clicked")}
      />
    </div>
  ),
};

export const LongName: Story = {
  args: {
    name: "crabominable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
    types: ["fighting", "ice"],
  },
};

export const NoImage: Story = {
  args: {
    name: "missingno",
    types: ["glitch", "normal"],
  },
};

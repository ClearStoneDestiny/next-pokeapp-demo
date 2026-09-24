import { IPokemonDetails } from "@pokemon/data/pokemon/interfaces";

export function getEnglishPokemonName({ pokemon, species }: IPokemonDetails) {
  return (
    species.names.find(({ language }) => language.name === "en")?.name ??
    pokemon.name
      .split("-")
      .map((namePart) => namePart.charAt(0).toUpperCase() + namePart.slice(1))
      .join(" ")
  );
}
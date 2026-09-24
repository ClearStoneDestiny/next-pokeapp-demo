import { pokemonCardTypeNames, PokemonCardTypeT } from "@common/components/PokemonCard";

const pokemonCardTypeSet = new Set<string>(pokemonCardTypeNames);

export function normalizePokemonType(type: string): PokemonCardTypeT {
  return pokemonCardTypeSet.has(type) ? (type as PokemonCardTypeT) : "normal";
}

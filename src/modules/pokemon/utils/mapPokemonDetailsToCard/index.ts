import { IPokemonCardData } from "@common/components/PokemonCard";
import { IPokemonDetails } from "@pokemon/data/pokemon/interfaces";
import { getEnglishPokemonName } from "../getEnglishPokemonName";
import { normalizePokemonType } from "../normalizePokemonType";
import { getPokemonRarity } from "../getPokemonRarity";

export function mapPokemonDetailsToCard({
  pokemon,
  species,
}: IPokemonDetails): IPokemonCardData {
  const primaryType = pokemon.types.reduce((selectedType, currentType) =>
    currentType.slot < selectedType.slot ? currentType : selectedType,
  );

  return {
    id: pokemon.id,
    name: getEnglishPokemonName({ pokemon, species }),
    imageSrc:
      pokemon.sprites.other["official-artwork"].front_default ??
      pokemon.sprites.other.home.front_default ??
      pokemon.sprites.front_default ??
      "",
    type: normalizePokemonType(primaryType.type.name),
    rarity: getPokemonRarity(species),
  };
}

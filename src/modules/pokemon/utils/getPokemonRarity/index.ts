import { RarityBadgeColorT } from "@common/interfaces/rarityBadge";
import { IPokemonDetails } from "@pokemon/data/pokemon/interfaces";

export function getPokemonRarity(
  species: IPokemonDetails["species"],
): RarityBadgeColorT {
  if (species.is_legendary || species.is_mythical) {
    return "legendary";
  }

  if (species.capture_rate <= 15) {
    return "epic";
  }

  if (species.capture_rate <= 45) {
    return "rare";
  }

  if (species.capture_rate <= 120) {
    return "uncommon";
  }

  return "common";
}

import authEn from "./locales/en/auth.json";
import commonEn from "./locales/en/common.json";
import pokemonEn from "./locales/en/pokemon.json";

export const resources = {
  en: {
    auth: authEn,
    common: commonEn,
    pokemon: pokemonEn,
  },
} as const;

export type Resources = (typeof resources)["en"];

import "server-only";

import type { IPaginationParams } from "@common/index";
import type {
  IPokemon,
  IPokemonCatalogPage,
  IPokemonDetails,
  IPokemonList,
  IPokemonSpecies,
} from "./interfaces";
import { pokeApiFetch } from "@pokemon/api";
import configs from "@configs/index";

type PokemonIdentifierT = number | string;

export async function getPokemonList(
  params: IPaginationParams = {},
): Promise<IPokemonList> {
  const { limit, offset } = normalizePaginationParams(params);

  return pokeApiFetch<IPokemonList>("pokemon", {
    searchParams: { limit, offset },
    tags: ["pokemon-list"],
  });
}

export async function getPokemonCatalogPage(
  params: IPaginationParams,
): Promise<IPokemonCatalogPage> {
  const list = await getPokemonList(params);
  const results = await Promise.all(
    list.results.map((pokemon) => getPokemonByName(pokemon.name)),
  );

  return {
    count: list.count,
    next: list.next,
    previous: list.previous,
    results,
  };
}

export async function getPokemonById(id: number): Promise<IPokemon> {
  return getPokemonByIdentifier(id);
}

export async function getPokemonByName(name: string): Promise<IPokemon> {
  return getPokemonByIdentifier(name);
}

export async function getPokemonByIdentifier(
  identifier: PokemonIdentifierT,
): Promise<IPokemon> {
  const normalizedIdentifier = normalizeIdentifier(identifier);

  return pokeApiFetch<IPokemon>(`pokemon/${normalizedIdentifier}`, {
    tags: ["pokemon", `pokemon:${normalizedIdentifier}`],
  });
}

export async function getPokemonSpeciesById(
  id: number,
): Promise<IPokemonSpecies> {
  return getPokemonSpeciesByIdentifier(id);
}

export async function getPokemonSpeciesByName(
  name: string,
): Promise<IPokemonSpecies> {
  return getPokemonSpeciesByIdentifier(name);
}

export async function getPokemonSpeciesByIdentifier(
  identifier: PokemonIdentifierT,
): Promise<IPokemonSpecies> {
  const normalizedIdentifier = normalizeIdentifier(identifier);

  return pokeApiFetch<IPokemonSpecies>(
    `pokemon-species/${normalizedIdentifier}`,
    {
      tags: ["pokemon-species", `pokemon-species:${normalizedIdentifier}`],
    },
  );
}

export async function getPokemonDetails(
  identifier: PokemonIdentifierT,
): Promise<IPokemonDetails> {
  const pokemon = await getPokemonByIdentifier(identifier);
  const species = await getPokemonSpeciesByIdentifier(pokemon.species.name);

  return {
    pokemon,
    species,
  };
}

function normalizePaginationParams(params: IPaginationParams) {
  const limit = params.limit ?? configs.PAGINATION.DEFAULT_POKEMON_LIMIT;
  const offset = params.offset ?? 0;

  assertNonNegativeInteger(limit, "limit");
  assertNonNegativeInteger(offset, "offset");

  return { limit, offset };
}

function normalizeIdentifier(identifier: PokemonIdentifierT) {
  if (typeof identifier === "number") {
    assertPositiveInteger(identifier, "identifier");
    return identifier;
  }

  const normalizedIdentifier = identifier.trim().toLowerCase();

  if (!normalizedIdentifier) {
    throw new TypeError("Pokemon identifier must not be empty.");
  }

  return normalizedIdentifier;
}

function assertPositiveInteger(value: number, fieldName: string) {
  if (!Number.isInteger(value) || value <= 0) {
    throw new TypeError(`${fieldName} must be a positive integer.`);
  }
}

function assertNonNegativeInteger(value: number, fieldName: string) {
  if (!Number.isInteger(value) || value < 0) {
    throw new TypeError(`${fieldName} must be a non-negative integer.`);
  }
}

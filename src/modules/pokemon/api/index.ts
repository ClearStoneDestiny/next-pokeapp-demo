import "server-only";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";
const POKEAPI_REVALIDATE_SECONDS = 60 * 60 * 24;

export class PokeApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly url: string,
  ) {
    super(message);
    this.name = "PokeApiError";
  }
}

type PokeApiFetchOptionsT = {
  searchParams?: Record<string, number | string | undefined>;
  tags?: string[];
};

export async function pokeApiFetch<T>(
  pathname: string,
  options: PokeApiFetchOptionsT = {},
): Promise<T> {
  const url = buildPokeApiUrl(pathname, options.searchParams);

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: POKEAPI_REVALIDATE_SECONDS,
      tags: ["pokeapi", ...(options.tags ?? [])],
    },
  });

  if (!response.ok) {
    const details = await response.text();
    throw new PokeApiError(
      `PokéAPI request failed with ${response.status}${details ? `: ${details}` : ""}`,
      response.status,
      url,
    );
  }

  return (await response.json()) as T;
}

function buildPokeApiUrl(
  pathname: string,
  searchParams: PokeApiFetchOptionsT["searchParams"],
) {
  const url = new URL(pathname.replace(/^\/+/, ""), POKEAPI_BASE_URL);

  for (const [key, value] of Object.entries(searchParams ?? {})) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
}

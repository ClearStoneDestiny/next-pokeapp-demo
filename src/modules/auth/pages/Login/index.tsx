import { LoginActionSection, LoginInfoSection } from "@auth/components";
import { Container } from "@common/components";
import { getPokemonDetails } from "@pokemon/data/pokemon/queries";
import {
  mapPokemonDetailsToCard,
  FEATURED_POKEMON_IDENTIFIERS,
} from "@pokemon/index";

export const LoginPage = async () => {
  const pokemonDetails = await Promise.all(
    FEATURED_POKEMON_IDENTIFIERS.map((identifier) =>
      getPokemonDetails(identifier),
    ),
  );
  const pokemonCards = pokemonDetails.map(mapPokemonDetailsToCard);

  return (
    <Container
      dots
      dotsColor="muted"
      className="grid min-h-screen w-full grid-cols-1 bg-primary lg:grid-cols-[minmax(0,1.1fr)_minmax(440px,0.9fr)]"
    >
      <LoginInfoSection
        pokemonCards={pokemonCards}
        stats={{
          species: new Set(pokemonDetails.map(({ species }) => species.id))
            .size,
          rarity: new Set(pokemonCards.map(({ rarity }) => rarity)).size,
        }}
      />
      <LoginActionSection />
    </Container>
  );
};

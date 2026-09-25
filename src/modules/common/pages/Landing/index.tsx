import { Header } from "@common/components/Header";
import "./styles.css";
import { Container, HeroSection } from "@common/components";
import {
  FEATURED_POKEMON_IDENTIFIERS,
  getPokemonDetails,
  getPokemonList,
} from "@pokemon/index";

export const LandingPage = async () => {
  const pokemons = await getPokemonList();

  const pokemonDetails = await Promise.all(
    FEATURED_POKEMON_IDENTIFIERS.map((identifier) =>
      getPokemonDetails(identifier),
    ),
  );

  return (
    <Container className="w-full h-full">
      <Header variant="landing"></Header>
      <Container dots className="h-full">
        {/* Hero section */}
        <HeroSection pokemons={pokemons} pokemonDetails={pokemonDetails} />
      </Container>
    </Container>
  );
};

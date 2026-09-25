"use client";

import type {
  IPokemonDetails,
  IPokemonList,
} from "@pokemon/data/pokemon/interfaces";
import { mapPokemonDetailsToCard } from "@pokemon/utils/mapPokemonDetailsToCard";
import { Button } from "../Button";
import { Chip } from "../Chip";
import { Container } from "../Container";
import { PokemonCard } from "../PokemonCard";
import { Typography } from "../Typography";
import { useTranslation } from "react-i18next";

interface IHeroSectionProps {
  pokemons: IPokemonList;
  pokemonDetails: IPokemonDetails[];
}

const cardLayoutSettings = [
  {
    wrapperClassName: "relative z-10 translate-y-6",
    className: "h-[240px]",
    levitationDelay: "0s",
  },
  {
    wrapperClassName: "relative z-20 -ml-10 -translate-y-6",
    className: "h-[240px]",
    levitationDelay: "0.45s",
  },
  {
    wrapperClassName: "relative z-30 -ml-10 translate-y-10",
    className: "h-[240px]",
    levitationDelay: "0.9s",
  },
];

export const HeroSection = ({
  pokemons,
  pokemonDetails,
}: IHeroSectionProps) => {
  const { t } = useTranslation("common", { keyPrefix: "HeroSection" });

  const pokemonCards = pokemonDetails.map(mapPokemonDetailsToCard);

  return (
    <Container className="relative flex overflow-hidden px-40 py-15 gap-30">
      <div
        aria-hidden="true"
        className="absolute -top-[120px] -right-[80px] h-[520px] w-[520px] rounded-full bg-[oklch(0.62_0.19_300_/_0.14)]"
      />

      <Container className="relative z-10">
        <Chip className="flex justify-center max-w-80 text-xs font-bold tracking-[0.14em] uppercase">
          {t("chipTitle", { pokemonCount: pokemons.count })}
        </Chip>
        <Container className="my-5">
          <Typography className="text-6xl" weight="extrabold">
            {t("titleFirstLine")}
          </Typography>
          <Typography className="text-6xl" weight="extrabold">
            {t("titleSecondLine")}
          </Typography>
          <Typography className="text-6xl text-primary" weight="extrabold">
            {t("titleThirdLine")}
          </Typography>
        </Container>

        <Typography>{t("description")}</Typography>

        <Container className="flex gap-5 my-10">
          <Button shadow animation="press" className="text-lg px-6 py-3">
            {t("startButton")}
          </Button>
          <Button
            shadow
            animation="press"
            color="white"
            className="text-lg px-6 py-3"
          >
            {t("pricingButton")}
          </Button>
        </Container>

        <Container className="flex gap-10">
          <Typography size="xs" className="tracking-[0.06em]">
            {t("noCardRequired")}
          </Typography>
          <Typography size="xs" className="tracking-[0.06em]">
            {t("cancelAnytime")}
          </Typography>
        </Container>
      </Container>
      <Container className="relative z-10 flex min-h-[520px] items-center justify-center">
        {pokemonCards.map((pokemonCard, index) => {
          const layoutSettings = cardLayoutSettings[index];

          return (
            <div
              key={pokemonCard.id}
              className={layoutSettings?.wrapperClassName}
            >
              <PokemonCard
                {...pokemonCard}
                levitating
                className={layoutSettings?.className}
                levitationDelay={layoutSettings?.levitationDelay}
              />
            </div>
          );
        })}
      </Container>
    </Container>
  );
};

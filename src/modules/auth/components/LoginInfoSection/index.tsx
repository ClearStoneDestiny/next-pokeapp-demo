"use client";

import { Badge, Container, PokemonCard, Typography } from "@common/components";
import { IPokemonCardData } from "@common/components/PokemonCard";
import { useTranslation } from "react-i18next";

interface ILoginInfoSectionProps {
  pokemonCards: IPokemonCardData[];
  stats: {
    species: number;
    rarity: number;
  };
}

const cardLayoutSettings = [
  { className: "mt-5", levitationDelay: "0s" },
  { className: "mt-0", levitationDelay: "0.45s" },
  { className: "mt-10", levitationDelay: "0.9s" },
];

export const LoginInfoSection = ({
  pokemonCards,
  stats,
}: ILoginInfoSectionProps) => {
  const { t } = useTranslation("auth", { keyPrefix: "LoginInfoSection" });

  return (
    <Container
      dots
      className="relative hidden min-h-screen overflow-hidden border-r-[3px] border-border-main bg-primary py-12 px-8 text-white lg:flex lg:flex-col xl:p-8"
    >
      <div className="relative z-10 flex items-center gap-3">
        <Badge text="C" color="white" shadow className="h-10 w-10" />
        <Typography as="span" size="xl" weight="black">
          Cardex
        </Typography>
      </div>

      <div className="relative z-10 my-auto max-w-[720px] py-16">
        <Typography className="text-[clamp(1rem,3.5vw,5.8rem)] leading-[0.92] font-black tracking-[-0.055em]">
          {t("title")}
        </Typography>
        <p className="mt-7 max-w-[480px] text-[18px] leading-7 font-semibold text-white/75">
          {t("description")}
        </p>

        <div
          aria-label="Featured Pokemon cards"
          className="mt-5 flex items-start gap-7 xl:gap-10"
        >
          {pokemonCards.map((pokemonCard, index) => {
            const layoutSettings = cardLayoutSettings[index];

            return (
              <PokemonCard
                key={pokemonCard.id}
                {...pokemonCard}
                levitating
                className={layoutSettings?.className}
                levitationDelay={layoutSettings?.levitationDelay}
              />
            );
          })}
        </div>
      </div>

      <footer className="relative z-10 flex gap-5">
        <Typography size="sm">
          {t("species", { species: stats.species })}
        </Typography>
        <Typography size="sm">
          {t("rarity", { rarity: stats.rarity })}
        </Typography>
        <Typography size="sm">{t("dailyPacks")}</Typography>
      </footer>
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-8 h-24 w-24 rounded-full border-[3px] border-border-main bg-blob-purple"
      />
    </Container>
  );
};

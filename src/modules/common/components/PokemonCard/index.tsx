import type { RarityBadgeColorT } from "@common/interfaces/rarityBadge";
import { mergeClasses } from "@common/utils/mergeClasses";
import Image from "next/image";
import { Container } from "../Container";
import { RarityBadge } from "../RarityBadge";

export const pokemonCardTypeNames = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
] as const;

export type PokemonCardTypeT = (typeof pokemonCardTypeNames)[number];

export interface IPokemonCardData {
  id: number;
  name: string;
  imageSrc: string;
  type: PokemonCardTypeT;
  rarity: RarityBadgeColorT;
}

interface IPokemonCardProps extends IPokemonCardData {
  className?: string;
  levitating?: boolean;
  levitationDelay?: string;
}

const typeBackgroundStyles: Record<PokemonCardTypeT, string> = {
  normal: "bg-card-normal",
  fire: "bg-card-fire",
  water: "bg-card-water",
  electric: "bg-card-electric",
  grass: "bg-card-grass",
  ice: "bg-card-ice",
  fighting: "bg-card-fighting",
  poison: "bg-card-poison",
  ground: "bg-card-ground",
  flying: "bg-card-flying",
  psychic: "bg-card-psychic",
  bug: "bg-card-bug",
  rock: "bg-card-rock",
  ghost: "bg-card-ghost",
  dragon: "bg-card-dragon",
  dark: "bg-card-dark",
  steel: "bg-card-steel",
  fairy: "bg-card-fairy",
};

export const PokemonCard = ({
  name,
  imageSrc,
  type,
  rarity,
  className,
  levitating = false,
  levitationDelay,
}: IPokemonCardProps) => {
  return (
    <article
      className={mergeClasses(
        "grid h-[200px] w-[170px] grid-rows-[1fr_3px_49px] overflow-hidden rounded-[16px] border-[3px] border-border-main bg-background text-foreground shadow-[7px_7px_0px_#17161d]",
        levitating && "animate-card-levitate",
        className,
      )}
      style={levitationDelay ? { animationDelay: levitationDelay } : undefined}
    >
      <Container
        dots
        dotsSize="sm"
        className={mergeClasses(
          "flex h-full items-center justify-center p-5",
          typeBackgroundStyles[type],
        )}
      >
        {imageSrc ? (
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="180px"
              className="object-contain drop-shadow-[0_12px_0_rgba(23,22,29,0.14)]"
            />
          </div>
        ) : (
          <span className="text-5xl font-black capitalize">{name[0]}</span>
        )}
      </Container>

      <div className="h-[3px] bg-border-main" />

      <div className="flex h-[49px] items-center justify-between gap-3 bg-background px-4">
        <h3 className="truncate text-[17px] font-black capitalize">{name}</h3>
        <RarityBadge color={rarity} />
      </div>
    </article>
  );
};

import { RarityBadgeColorT } from "@common/interfaces/rarityBadge";
import { mergeClasses } from "@common/utils/mergeClasses";

interface IRarityBadgeProps {
  color?: RarityBadgeColorT;
}

const colorStyles: Record<RarityBadgeColorT, string> = {
  common: "bg-rarity-common",
  uncommon: "bg-rarity-uncommon",
  rare: "bg-rarity-rare",
  epic: "bg-rarity-epic",
  legendary: "bg-rarity-legendary",
};

export const RarityBadge = ({ color = "common" }: IRarityBadgeProps) => {
  return (
    <div
      className={mergeClasses(
        "flex-none h-[14px] w-[14px] border-[2px] border-border-main rounded-[3px]",
        colorStyles[color],
      )}
    ></div>
  );
};

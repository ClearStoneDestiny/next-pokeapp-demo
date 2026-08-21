import { BadgeColorT } from "@common/interfaces/badgeColor";
import { mergeClasses } from "@common/utils/mergeClasses";

interface IBadgeProps {
  color?: BadgeColorT;
  text?: string;
}

const colorStyles: Record<BadgeColorT, string> = {
  red: "bg-primary text-background",
  purple: "bg-rarity-epic text-background",
  black: "bg-foreground text-background",
};

export const Badge = ({ color = "red", text = "" }: IBadgeProps) => {
  return (
    <div
      className={mergeClasses(
        "grid place-items-center text-lg font-black h-[44px] w-[44px] border-[3px] border-border-main rounded-[12px]",
        colorStyles[color],
      )}
    >
      {text}
    </div>
  );
};

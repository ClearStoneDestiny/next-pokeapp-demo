import { ChipColorT } from "@common/interfaces/chipColor";
import { mergeClasses } from "@common/utils/mergeClasses";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface IChipProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  color?: ChipColorT;
  shadow?: boolean;
  hasStartElement?: boolean;
  children?: ReactNode;
}

const colorStyles: Record<ChipColorT, string> = {
  default: "bg-surface text-foreground",
  normal: "bg-chip-normal text-white",
  fire: "bg-chip-fire text-white",
  water: "bg-chip-water text-white",
  electric: "bg-chip-electric text-white",
  grass: "bg-chip-grass text-white",
  ice: "bg-chip-ice text-white",
  fighting: "bg-chip-fighting text-white",
  poison: "bg-chip-poison text-white",
  ground: "bg-chip-ground text-white",
  flying: "bg-chip-flying text-white",
  psychic: "bg-chip-psychic text-white",
  bug: "bg-chip-bug text-white",
  rock: "bg-chip-rock text-white",
  ghost: "bg-chip-ghost text-white",
  dragon: "bg-chip-dragon text-white",
  dark: "bg-chip-dark text-white",
  steel: "bg-chip-steel text-white",
  fairy: "bg-chip-fairy text-white",
};

export const Chip = forwardRef<HTMLDivElement, IChipProps>(
  (
    {
      color = "default",
      text,
      shadow = false,
      hasStartElement = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          "flex items-center gap-[9px] py-[7px] pr-[15px] pl-[12px] border-[3px] border-border-main rounded-full",
          colorStyles[color],
          hasStartElement ? "pl-[6px]" : "pl-[12px]",
          shadow && "shadow-[rgb(23,22,29)_4px_4px_0px]",
          className,
        )}
        {...props}
      >
        {children ?? <span className="text-sm font-semibold">{text}</span>}
      </div>
    );
  },
);

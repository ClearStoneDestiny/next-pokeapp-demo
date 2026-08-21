import { BadgeColorT } from "@common/interfaces/badge";
import { mergeClasses } from "@common/utils/mergeClasses";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  color?: BadgeColorT;
  text?: string;
  shadow?: boolean;
  children?: ReactNode;
}

const colorStyles: Record<BadgeColorT, string> = {
  red: "bg-primary text-background",
  purple: "bg-rarity-epic text-background",
  black: "bg-foreground text-background",
};

export const Badge = forwardRef<HTMLDivElement, IBadgeProps>(
  (
    { color = "red", text, shadow = false, className, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          "grid place-items-center text-lg font-black h-[44px] w-[44px] border-[3px] border-border-main rounded-[9px]",
          colorStyles[color],
          shadow && "shadow-[3px_3px_0px_#17161d]",
          className,
        )}
        {...props}
      >
        {children ?? text}
      </div>
    );
  },
);

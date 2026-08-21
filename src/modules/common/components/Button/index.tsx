import { ButtonAnimationT } from "@common/interfaces/buttonAnimation";
import { ButtonColorT } from "@common/interfaces/buttonColor";
import { mergeClasses } from "@common/utils/mergeClasses";
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

interface IButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  color?: ButtonColorT;
  shadow?: boolean;
  animation?: ButtonAnimationT;
  cursorType?: CSSProperties["cursor"];
  children: ReactNode;
}

const colorStyles: Record<ButtonColorT, string> = {
  red: "bg-primary text-white",
  white: "bg-background text-foreground",
  purple: "bg-rarity-epic text-white",
  lilac: "bg-surface text-white",
};

// Each preset is a standalone set of classes for the hover state.
// To add a new animation:
// 1) add a value to ButtonAnimation,
// 2) define the classes here.
const animationStyles: Record<Exclude<ButtonAnimationT, "none">, string> = {
  press:
    "hover:[transform:translate(2px,2px)]! hover:[box-shadow:rgb(23,22,29)_2px_2px_0px]!",
};

export function Button({
  color = "red",
  shadow = false,
  animation = "none",
  cursorType = "pointer",
  className,
  style,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      className={mergeClasses(
        "inline-flex items-center justify-center",
        "border-[3px] border-border-main rounded-full",
        "font-extrabold text-[15px] px-5 py-2.5",
        "transition-all duration-150",
        colorStyles[color],
        shadow && "shadow-[rgb(23,22,29)_4px_4px_0px]",
        animation !== "none" && animationStyles[animation],
        className,
      )}
      style={{ cursor: cursorType, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

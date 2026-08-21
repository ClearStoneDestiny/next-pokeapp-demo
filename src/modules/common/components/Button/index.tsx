import {
  ButtonVariantT,
  ButtonColorT,
  ButtonAnimationT,
} from "@common/interfaces/button";
import { mergeClasses } from "@common/utils/mergeClasses";
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

interface IButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  color?: ButtonColorT;
  variant?: ButtonVariantT;
  shadow?: boolean;
  animation?: ButtonAnimationT;
  cursorType?: CSSProperties["cursor"];
  children: ReactNode;
}

const colorStyles: Record<ButtonVariantT, Record<ButtonColorT, string>> = {
  filled: {
    red: "bg-primary text-white",
    white: "bg-background text-foreground",
    purple: "bg-rarity-epic text-white",
    lilac: "bg-surface text-white",
  },
  text: {
    red: "text-primary",
    white: "text-foreground",
    purple: "text-rarity-epic",
    lilac: "text-foreground",
  },
};

// Each preset is a standalone set of classes for the hover state.
// To add a new animation:
// 1) add a value to ButtonAnimation,
// 2) define the classes here.
const animationStyles: Record<
  ButtonVariantT,
  Partial<Record<Exclude<ButtonAnimationT, "none">, string>>
> = {
  filled: {
    press:
      "hover:[transform:translate(2px,2px)]! hover:[box-shadow:rgb(23,22,29)_2px_2px_0px]!",
  },
  text: {
    press: "hover:[transform:translate(2px,2px)]!",
  },
};

export const Button = ({
  color = "red",
  variant = "filled",
  shadow = false,
  animation = "none",
  cursorType = "pointer",
  className,
  style,
  children,
  ...props
}: IButtonProps) => {
  const isFilled = variant === "filled";

  return (
    <button
      className={mergeClasses(
        "inline-flex items-center justify-center",
        "font-extrabold text-[15px]",
        "transition-all duration-150",
        isFilled && "border-[3px] border-border-main rounded-full px-5 py-2.5",
        colorStyles[variant][color],
        isFilled && shadow && "shadow-[4px_4px_0px_#17161d]",
        animation !== "none" && animationStyles[variant][animation],
        className,
      )}
      style={{ cursor: cursorType, ...style }}
      {...props}
    >
      {children}
    </button>
  );
};

import {
  TypographySizeT,
  TypographyVariantT,
  TypographyWeightT,
} from "@common/interfaces/typography";
import { mergeClasses } from "@common/utils/mergeClasses";
import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

const variantStyles: Record<TypographyVariantT, string> = {
  display: "mt-[22px] text-balance",
  body: "mt-6 max-w-[470px] text-body",
  mono: "text-[12px] font-mono",
};

const sizeStyles: Record<TypographySizeT, string> = {
  xs: "text-[12px]",
  sm: "text-[14px]",
  md: "text-[16px]",
  lg: "text-[19px]",
  xl: "text-[24px]",
  "2xl": "text-[40px]",
  display: "text-[70px] leading-[0.94] tracking-[-0.045em]",
};

const weightStyles: Record<TypographyWeightT, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const variantDefaults: Record<
  TypographyVariantT,
  { size: TypographySizeT; weight: TypographyWeightT }
> = {
  display: { size: "display", weight: "black" },
  body: { size: "lg", weight: "normal" },
  mono: { size: "xs", weight: "normal" },
};

const defaultElement: Record<TypographyVariantT, ElementType> = {
  display: "h1",
  body: "p",
  mono: "span",
};

interface ITypographyOwnProps<E extends ElementType> {
  as?: E;
  variant?: TypographyVariantT;
  size?: TypographySizeT;
  weight?: TypographyWeightT;
  italic?: boolean;
  children: ReactNode;
  className?: string;
}

type TypographyPropsT<E extends ElementType> = ITypographyOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ITypographyOwnProps<E>>;

export function Typography<E extends ElementType = "p">({
  as,
  variant = "body",
  size,
  weight,
  italic = false,
  className,
  children,
  ...props
}: TypographyPropsT<E>) {
  const Component = as || defaultElement[variant];
  const isMono = variant === "mono";
  const defaults = variantDefaults[variant];

  return (
    <Component
      className={mergeClasses(
        variantStyles[variant],
        !isMono && sizeStyles[size ?? defaults.size],
        !isMono && weightStyles[weight ?? defaults.weight],
        italic && "italic",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

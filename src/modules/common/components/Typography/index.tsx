import { mergeClasses } from "@common/utils/mergeClasses";
import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

export type TypographyVariantT = "display" | "body" | "bodyBold" | "mono";

const variantStyles: Record<TypographyVariantT, string> = {
  display:
    "mt-[22px] text-[70px] leading-[0.94] font-black tracking-[-0.045em] text-balance",
  body: "mt-6 max-w-[470px] text-[19px] text-body",
  bodyBold: "mt-6 max-w-[470px] text-[17px] font-extrabold text-body",
  mono: "text-[12px] font-mono",
};

const defaultElement: Record<TypographyVariantT, ElementType> = {
  display: "h1",
  body: "p",
  bodyBold: "p",
  mono: "span",
};

interface ITypographyOwnProps<E extends ElementType> {
  as?: E;
  variant?: TypographyVariantT;
  children: ReactNode;
  className?: string;
}

type TypographyPropsT<E extends ElementType> = ITypographyOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ITypographyOwnProps<E>>;

export function Typography<E extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyPropsT<E>) {
  const Component = as || defaultElement[variant];

  return (
    <Component
      className={mergeClasses(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

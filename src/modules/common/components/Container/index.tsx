import { mergeClasses } from "@common/index";
import { HTMLAttributes, ReactNode } from "react";

type DotsSizeT = "sm" | "md" | "lg";
type DotsColorT = "default" | "muted" | "dark";

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  dots?: boolean;
  dotsSize?: DotsSizeT;
  dotsColor?: DotsColorT;
  children: ReactNode;
}

const dotsSizeStyles: Record<DotsSizeT, string> = {
  sm: "[background-size:12px_12px]",
  md: "[background-size:18px_18px]",
  lg: "[background-size:24px_24px]",
};

const dotsColorStyles: Record<DotsColorT, string> = {
  default:
    "[background-image:radial-gradient(circle,#17161d33_1px,transparent_1px)]",
  muted:
    "[background-image:radial-gradient(circle,#17161d1a_1px,transparent_1px)]",
  dark: "[background-image:radial-gradient(circle,#17161d_1px,transparent_1px)]",
};

export const Container = ({
  dots = false,
  dotsSize = "md",
  dotsColor = "default",
  className,
  style,
  children,
  ...props
}: IContainerProps) => {
  return (
    <div
      className={mergeClasses(
        dots && dotsSizeStyles[dotsSize],
        dots && dotsColorStyles[dotsColor],
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

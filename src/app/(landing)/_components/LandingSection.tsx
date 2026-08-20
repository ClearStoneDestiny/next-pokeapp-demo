import type { ReactNode } from "react";

export function LandingSection({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}

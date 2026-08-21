import { Sidebar } from "@common/components";
import type { ReactNode } from "react";

export default async function DexLayout({ children }: { children: ReactNode }) {
  // TODO: Replace on real data later
  const user = 23;
  const progress = 60;

  return (
    <div className="flex">
      <Sidebar user={user} progress={progress} />
      <div className="app-content">{children}</div>
    </div>
  );
}

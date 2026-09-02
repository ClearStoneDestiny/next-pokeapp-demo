import { Sidebar } from "@common/components";
import type { ReactNode } from "react";

export default async function DexLayout({ children }: { children: ReactNode }) {
  // TODO: Replace on real data later
  const user = { id: "0", name: "Trainer", email: "trainer@pokeapp.local" };
  const progress = 60;

  return (
    <div className="flex">
      <Sidebar user={user} progress={progress} />
      <div className="app-content">{children}</div>
    </div>
  );
}

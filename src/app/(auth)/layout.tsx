import { Header, Sidebar } from "@common/components";
import { redirect } from "next/navigation";

const isAuthenticated = false;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated) {
    redirect("/");
  }

  // TODO: Replace on real data later
  const user = 23;
  const progress = 60;

  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header variant="app" />
      <div className="flex flex-1">
        <Sidebar user={user} progress={progress} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

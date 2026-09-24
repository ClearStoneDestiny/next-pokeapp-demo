import { Header, Sidebar } from "@common/components";
import configs from "@configs/index";
import { prisma } from "@lib/prisma";
import { getSession } from "@lib/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.userId) {
    redirect(configs.ROUTES.LOGIN);
  }

  const user = await prisma.user.findUnique({ where: { id: session.userId } });

  if (!user) {
    redirect(configs.ROUTES.LOGIN);
  }

  // TODO: Replace on real data later
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

import { LoginForm } from "@auth/components";
import configs from "@configs/index";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Log in</h1>

        <LoginForm />

        <p className="text-sm text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link
            href={configs.ROUTES.REGISTER}
            className="font-medium underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

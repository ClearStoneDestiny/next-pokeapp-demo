import { RegisterForm } from "@auth/components";
import configs from "@configs/index";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Create an account</h1>

        <RegisterForm />

        <p className="text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href={configs.ROUTES.LOGIN} className="font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

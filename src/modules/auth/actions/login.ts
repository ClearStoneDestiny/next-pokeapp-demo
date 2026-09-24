"use server";

import * as v from "valibot";
import bcrypt from "bcryptjs";
import {
  LoginFormFields,
  loginFormSchema,
  LoginFormStateT,
} from "@auth/components/LoginForm/schema";
import { prisma } from "@lib/prisma";
import { createSession } from "@lib/session";
import { redirect } from "next/navigation";
import configs from "@configs/index";

export async function login(
  _prevState: LoginFormStateT,
  formData: FormData,
): Promise<LoginFormStateT> {
  const validatedFields = v.safeParse(loginFormSchema, {
    [LoginFormFields.EMAIL]: formData.get(LoginFormFields.EMAIL),
    [LoginFormFields.PASSWORD]: formData.get(LoginFormFields.PASSWORD),
  });

  if (!validatedFields.success) {
    return { errors: v.flatten(validatedFields.issues).nested };
  }

  const { email, password } = validatedFields.output;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { message: "Invalid password or email" };
  }

  await createSession(user.id);
  redirect(configs.ROUTES.DASHBOARD);
}

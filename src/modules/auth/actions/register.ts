"use server";

import * as v from "valibot";
import bcrypt from "bcryptjs";
import {
  RegisterFormFields,
  registerFormSchema,
  RegisterFormState,
} from "@auth/components/RegisterForm/schema";
import { prisma } from "@lib/prisma";
import { createSession } from "@lib/session";
import { redirect } from "next/navigation";
import { getTranslation } from "@common/index";
import configs from "@configs/index";

const t = getTranslation("auth");

export async function register(
  _prevState: RegisterFormState,
  formData: FormData,
): Promise<RegisterFormState> {
  const validatedFields = v.safeParse(registerFormSchema, {
    [RegisterFormFields.NAME]: formData.get(RegisterFormFields.NAME),
    [RegisterFormFields.EMAIL]: formData.get(RegisterFormFields.EMAIL),
    [RegisterFormFields.PASSWORD]: formData.get(RegisterFormFields.PASSWORD),
  });

  if (!validatedFields.success) {
    return { errors: v.flatten(validatedFields.issues).nested };
  }

  const { name, email, password } = validatedFields.output;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return { errors: { email: [t("register.userWithThatEmailExist")] } };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, passwordHash },
  });

  await createSession(user.id);
  redirect(configs.ROUTES.DASHBOARD);
}

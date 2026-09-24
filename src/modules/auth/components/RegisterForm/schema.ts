import configs from "@configs/index";
import * as v from "valibot";
import type { AuthFormStateT } from "@auth/types/authForm";

export const RegisterFormFields = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export const registerFormSchema = v.object({
  [RegisterFormFields.NAME]: v.pipe(v.string(), v.nonEmpty("Name is required")),
  [RegisterFormFields.EMAIL]: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email("Please enter a valid email address"),
  ),
  [RegisterFormFields.PASSWORD]: v.pipe(
    v.string(),
    v.nonEmpty("Password is required"),
    v.minLength(
      configs.VALIDATION.PASSWORD_MIN_LENGTH,
      `Password should be at least ${configs.VALIDATION.PASSWORD_MIN_LENGTH} symbols`,
    ),
    v.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "The password must contain uppercase and lowercase letters, as well as a number",
    ),
  ),
});

export type RegisterFormDataT = v.InferOutput<typeof registerFormSchema>;

export type RegisterFormStateT = AuthFormStateT;

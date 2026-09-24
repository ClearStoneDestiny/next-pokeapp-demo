import * as v from "valibot";
import type { AuthFormStateT } from "@auth/types/authForm";

export const LoginFormFields = {
  EMAIL: "email",
  PASSWORD: "password",
} as const;

const loginFormSchema = v.object({
  [LoginFormFields.EMAIL]: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email("Please enter a valid email address"),
  ),
  [LoginFormFields.PASSWORD]: v.pipe(
    v.string(),
    v.nonEmpty("Password is required"),
  ),
});

type LoginFormDataT = v.InferOutput<typeof loginFormSchema>;

export type LoginFormStateT = AuthFormStateT;

export { loginFormSchema };
export type { LoginFormDataT };

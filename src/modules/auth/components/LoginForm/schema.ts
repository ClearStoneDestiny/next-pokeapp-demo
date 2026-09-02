import * as v from "valibot";
import { getTranslation } from "@common/index";

export const LoginFormFields = {
  EMAIL: "email",
  PASSWORD: "password",
} as const;

const t = getTranslation("auth");

const loginFormSchema = v.object({
  [LoginFormFields.EMAIL]: v.pipe(
    v.string(),
    v.nonEmpty(t("validation.emailRequired")),
    v.email(t("validation.emailInvalid")),
  ),
  [LoginFormFields.PASSWORD]: v.pipe(
    v.string(),
    v.nonEmpty(t("validation.passwordRequired")),
  ),
});

type LoginFormData = v.InferOutput<typeof loginFormSchema>;

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export { loginFormSchema };
export type { LoginFormData };

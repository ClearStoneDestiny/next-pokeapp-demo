import { getTranslation } from "@common/index";
import configs from "@configs/index";
import * as v from "valibot";

const t = getTranslation("auth");

export const RegisterFormFields = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export const registerFormSchema = v.object({
  [RegisterFormFields.NAME]: v.pipe(
    v.string(),
    v.nonEmpty(t("validation.nameRequired")),
  ),
  [RegisterFormFields.EMAIL]: v.pipe(
    v.string(),
    v.nonEmpty(t("validation.emailRequired")),
    v.email(t("validation.emailInvalid")),
  ),
  [RegisterFormFields.PASSWORD]: v.pipe(
    v.string(),
    v.nonEmpty(t("validation.passwordRequired")),
    v.minLength(
      configs.VALIDATION.PASSWORD_MIN_LENGTH,
      t("validation.passwordMinLength", {
        passwordLength: configs.VALIDATION.PASSWORD_MIN_LENGTH,
      }),
    ),
    v.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      t("validation.passwordRegEx"),
    ),
  ),
});

export type RegisterFormData = v.InferOutput<typeof registerFormSchema>;

export type RegisterFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

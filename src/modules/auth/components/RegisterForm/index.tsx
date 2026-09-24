"use client";

import { register } from "@auth/actions/register";
import { RegisterFormFields } from "./schema";
import { useTranslation } from "react-i18next";
import { AuthForm } from "../AuthForm";

export const RegisterForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "RegisterForm" });

  return (
    <AuthForm
      action={register}
      title={t("title")}
      description={t("description")}
      fields={[
        {
          name: RegisterFormFields.NAME,
          label: t("name"),
          type: "text",
          placeholder: t("namePlaceholder"),
          autoComplete: "name",
        },
        {
          name: RegisterFormFields.EMAIL,
          label: t("email"),
          type: "email",
          placeholder: t("emailPlaceholder"),
          autoComplete: "email",
        },
        {
          name: RegisterFormFields.PASSWORD,
          label: t("password"),
          type: "password",
          placeholder: t("passwordPlaceholder"),
          autoComplete: "new-password",
        },
      ]}
      checkboxLabel={t("agreement")}
      checkboxRequired
      submitLabel={t("signUp")}
      pendingLabel={t("signingUp")}
      showPasswordLabel={t("showPassword")}
      hidePasswordLabel={t("hidePassword")}
    />
  );
};

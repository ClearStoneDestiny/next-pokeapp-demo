"use client";

import { LoginFormFields } from "./schema";
import { login } from "@auth/actions/login";
import { useTranslation } from "react-i18next";
import { AuthForm } from "../AuthForm";
import { useSnackbar } from "notistack";

export const LoginForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "LoginForm" });
  const { enqueueSnackbar } = useSnackbar();

  return (
    <AuthForm
      action={login}
      title={t("title")}
      description={t("description")}
      fields={[
        {
          name: LoginFormFields.EMAIL,
          label: t("email"),
          type: "email",
          placeholder: t("emailPlaceholder"),
          autoComplete: "email",
        },
        {
          name: LoginFormFields.PASSWORD,
          label: t("password"),
          type: "password",
          placeholder: t("passwordPlaceholder"),
          autoComplete: "current-password",
        },
      ]}
      checkboxLabel={t("rememberMe")}
      submitLabel={t("signIn")}
      pendingLabel={t("signingIn")}
      showPasswordLabel={t("showPassword")}
      hidePasswordLabel={t("hidePassword")}
      forgotPasswordLabel={t("forgotPassword")}
      onForgotPassword={() =>
        enqueueSnackbar(t("forgotPasswordSent"), { variant: "success" })
      }
    />
  );
};

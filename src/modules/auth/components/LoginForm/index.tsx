"use client";

import { useActionState } from "react";
import { LoginFormFields } from "./schema";
import { login } from "@auth/actions/login";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "LoginForm" });

  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor={LoginFormFields.EMAIL}>{t("email")}</label>
        <input
          id={LoginFormFields.EMAIL}
          name={LoginFormFields.EMAIL}
          type="email"
          placeholder={t('email')}
        />
        {state?.errors?.email && <p>{state.errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor={LoginFormFields.PASSWORD}>{t("password")}</label>
        <input
          id={LoginFormFields.PASSWORD}
          name={LoginFormFields.PASSWORD}
          type="password"
        />
        {state?.errors?.password && <p>{state.errors.password[0]}</p>}
      </div>
      {state?.message && <p>{state.message}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? t("signingIn") : t("signIn")}
      </button>
    </form>
  );
};

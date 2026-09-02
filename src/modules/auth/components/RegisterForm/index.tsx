"use client";

import { register } from "@auth/actions/register";
import { useActionState } from "react";
import { RegisterFormFields } from "./schema";
import { useTranslation } from "react-i18next";

export const RegisterForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "RegisterForm" });

  const [state, formAction, isPending] = useActionState(register, undefined);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor={RegisterFormFields.NAME}>{t("name")}</label>
        <input
          id={RegisterFormFields.EMAIL}
          name={RegisterFormFields.EMAIL}
          type="text"
          placeholder={t("name")}
        />
        {state?.errors?.email && <p>{state.errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor={RegisterFormFields.EMAIL}>{t("email")}</label>
        <input
          id={RegisterFormFields.EMAIL}
          name={RegisterFormFields.EMAIL}
          type="email"
          placeholder={t("email")}
        />
        {state?.errors?.email && <p>{state.errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor={RegisterFormFields.PASSWORD}>{t("password")}</label>
        <input
          id={RegisterFormFields.PASSWORD}
          name={RegisterFormFields.PASSWORD}
          type="password"
        />
        {state?.errors?.password && <p>{state.errors.password[0]}</p>}
      </div>
      {state?.message && <p>{state.message}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? t("signingUp") : t("signUp")}
      </button>
    </form>
  );
};

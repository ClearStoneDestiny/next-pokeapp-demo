"use client";

import { LoginFormTypesEnum } from "@auth/enums/loginFormTypes";
import { LoginFormTabs } from "../LoginFormTabs";
import { useState } from "react";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import { useTranslation } from "react-i18next";

export const LoginActionSection = () => {
  const { t } = useTranslation("auth", { keyPrefix: "LoginActionSection" });

  const [loginFormType, setLoginFormType] = useState<LoginFormTypesEnum>(
    LoginFormTypesEnum.SignIn,
  );
  const isSignIn = loginFormType === LoginFormTypesEnum.SignIn;

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-surface px-5 py-8 sm:px-10 lg:px-12 xl:px-16">
      <div className="w-full max-w-[520px]">
        <LoginFormTabs value={loginFormType} onChange={setLoginFormType} />

        <div
          id={`${loginFormType}-panel`}
          role="tabpanel"
          aria-labelledby={`${loginFormType}-tab`}
          className="mt-9"
        >
          {isSignIn ? (
            <LoginForm key="sign-in" />
          ) : (
            <RegisterForm key="sign-up" />
          )}
        </div>

        <div className="flex items-center justify-center mt-6 gap-2">
          {isSignIn ? t("newToCardex") : t("alreadyCollecting")}{" "}
          <button
            type="button"
            onClick={() =>
              setLoginFormType(
                isSignIn
                  ? LoginFormTypesEnum.SignUp
                  : LoginFormTypesEnum.SignIn,
              )
            }
            className="cursor-pointer font-extrabold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
          >
            {isSignIn ? t("createAccount") : t("signIn")}
          </button>
        </div>
      </div>
    </section>
  );
};

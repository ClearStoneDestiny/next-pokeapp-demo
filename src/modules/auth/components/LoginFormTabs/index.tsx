"use client";

import { LoginFormTypesEnum } from "@auth/enums/loginFormTypes";
import { useTranslation } from "react-i18next";

interface ILoginFormTabsProps {
  value: LoginFormTypesEnum;
  onChange: (value: LoginFormTypesEnum) => void;
}

export const LoginFormTabs = ({ value, onChange }: ILoginFormTabsProps) => {
  const { t } = useTranslation("auth", { keyPrefix: "LoginFormTabs" });

  const formTabs = [
    {
      label: t("signIn"),
      value: LoginFormTypesEnum.SignIn,
    },
    {
      label: t("signUp"),
      value: LoginFormTypesEnum.SignUp,
    },
  ];

  return (
    <div
      role="tablist"
      aria-label={t("ariaLabel")}
      className="flex h-14 rounded-full border-[3px] border-foreground bg-background px-2 py-1"
    >
      {formTabs.map((tab) => {
        const isActive = value === tab.value;

        return (
          <button
            key={tab.value}
            id={`${tab.value}-tab`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${tab.value}-panel`}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`flex flex-1 cursor-pointer items-center justify-center rounded-full px-4 text-[15px] font-extrabold transition-all duration-200 ${
              isActive
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

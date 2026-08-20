"use client";

import { SnackbarProvider } from "notistack";
import type { ReactNode } from "react";
import { I18nProvider } from "./I18nProvider";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <I18nProvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {children}
      </SnackbarProvider>
    </I18nProvider>
  );
};

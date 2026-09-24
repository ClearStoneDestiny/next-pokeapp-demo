"use client";

import type { AuthFormFieldNameT, AuthFormStateT } from "@auth/types/authForm";
import { Button, Typography } from "@common/components";
import { useActionState, useId, useState } from "react";

interface IAuthFormField {
  name: AuthFormFieldNameT;
  label: string;
  type: "email" | "password" | "text";
  placeholder: string;
  autoComplete: string;
}

interface IAuthFormProps {
  action: (
    previousState: AuthFormStateT,
    formData: FormData,
  ) => Promise<AuthFormStateT>;
  title: string;
  description: string;
  fields: IAuthFormField[];
  checkboxLabel: string;
  checkboxRequired?: boolean;
  submitLabel: string;
  pendingLabel: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  forgotPasswordLabel?: string;
  onForgotPassword?: () => void;
}

export const AuthForm = ({
  action,
  title,
  description,
  fields,
  checkboxLabel,
  checkboxRequired = false,
  submitLabel,
  pendingLabel,
  showPasswordLabel,
  hidePasswordLabel,
  forgotPasswordLabel,
  onForgotPassword,
}: IAuthFormProps) => {
  const [state, formAction, isPending] = useActionState(action, undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const checkboxId = useId();

  return (
    <div>
      <div className="mb-8">
        <Typography size="3xl" weight="bold">
          {title}
        </Typography>
        <Typography size="md">{description}</Typography>
      </div>

      <form action={formAction} className="flex flex-col gap-5">
        {fields.map((field) => {
          const error = state?.errors?.[field.name]?.[0];
          const errorId = `${field.name}-error`;
          const isPassword = field.type === "password";

          return (
            <div key={field.name} className="flex flex-col gap-2">
              <div className="flex min-h-6 items-center justify-between gap-4">
                <label
                  htmlFor={field.name}
                  className="text-[10px] font-extrabold tracking-[0.04em] uppercase"
                >
                  {field.label}
                </label>

                {isPassword && forgotPasswordLabel && onForgotPassword && (
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="cursor-pointer text-[13px] font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-primary-hover"
                  >
                    {forgotPasswordLabel}
                  </button>
                )}
              </div>

              <div className="relative">
                <input
                  id={field.name}
                  name={field.name}
                  type={isPassword && isPasswordVisible ? "text" : field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? errorId : undefined}
                  className="h-14 w-full rounded-2xl border-[3px] border-border-main bg-background px-4 pr-20 text-[15px] font-semibold outline-none transition-[box-shadow,transform] placeholder:text-foreground/35 focus:-translate-y-0.5 focus:shadow-[4px_4px_0px_#17161d]"
                />

                {isPassword && (
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                    aria-label={
                      isPasswordVisible ? hidePasswordLabel : showPasswordLabel
                    }
                    className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-[13px] font-extrabold text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {isPasswordVisible ? hidePasswordLabel : showPasswordLabel}
                  </button>
                )}
              </div>

              {error && (
                <p
                  id={errorId}
                  role="alert"
                  className="text-[13px] font-semibold text-primary"
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <label
          htmlFor={checkboxId}
          className="flex cursor-pointer items-start gap-3 text-[14px] leading-5 font-semibold text-foreground/70"
        >
          <input
            id={checkboxId}
            name="consent"
            type="checkbox"
            required={checkboxRequired}
            className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer accent-primary"
          />
          <span>{checkboxLabel}</span>
        </label>

        {state?.message && (
          <p
            role="alert"
            aria-live="polite"
            className="rounded-xl border-2 border-primary/30 bg-primary/10 px-4 py-3 text-[13px] font-semibold text-primary"
          >
            {state.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="mt-1 h-14 px-6 text-[15px] font-extrabold text-white shadow-[4px_4px_0px_#17161d] transition-all hover:bg-primary-hover hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#17161d] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-wait disabled:opacity-60"
        >
          {isPending ? pendingLabel : submitLabel}
        </Button>
      </form>
    </div>
  );
};

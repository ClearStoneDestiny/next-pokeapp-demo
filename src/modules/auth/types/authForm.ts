export type AuthFormFieldNameT = "name" | "email" | "password";

export type AuthFormStateT =
  | {
      errors?: Partial<Record<AuthFormFieldNameT, string[]>>;
      message?: string;
    }
  | undefined;

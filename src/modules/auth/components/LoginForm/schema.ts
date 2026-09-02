import * as v from "valibot";

export const LoginFormFields = {
  EMAIL: "email",
  PASSWORD: "password",
} as const;


const loginFormSchema = v.object({
  [LoginFormFields.EMAIL]: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email('Please enter a valid email address'),
  ),
  [LoginFormFields.PASSWORD]: v.pipe(
    v.string(),
    v.nonEmpty('Password is required'),
  ),
});

type LoginFormData = v.InferOutput<typeof loginFormSchema>;

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export { loginFormSchema };
export type { LoginFormData };

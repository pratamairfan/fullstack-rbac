"use server";

import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { SignInSchema, SignUpSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = SignUpSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return { error: validateFields.error.flatten().fieldErrors };
  }

  const { firstName, lastName, email, password } = validateFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { message: "Failed to Sign Up User" };
  }
  redirect("/sign-in");
};

// sign in creadential

export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return { error: validateFields.error.flatten().fieldErrors };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials" };
        default:
          return { message: "Something went wrong" };
      }
    }
    throw error;
  }
};

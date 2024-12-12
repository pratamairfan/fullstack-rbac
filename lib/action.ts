"use server";

import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { SignUpSchema } from "./zod";
import { hashSync } from "bcrypt-ts";

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

"use client";

import Link from "next/link";
import { signInCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import { Buttons } from "../ui/buttons";

const FormSignin = () => {
  const [state, formAction] = useFormState(signInCredentials, null);
  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{state.message}</span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@example.com"
          className="bg-gray-50 border border-gray-300 text-background text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-xs text-red-500 mt-2 ">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-foreground"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-background text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-xs text-red-500 mt-2 ">
            {state?.error?.password}
          </span>
        </div>
      </div>

      <Buttons text="Sign In" />
      <p className="text-sm font-light text-gray-500">
        Don&apos;t have an account yet?
        <Link href="/sign-up" className="text-teal-700 hover:underline">
          {" "}
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormSignin;

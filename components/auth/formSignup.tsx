"use client";

import Link from "next/link";
import { signUpCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import { Buttons } from "@/components/ui/buttons";

const FormSignup = () => {
  const [state, formAction] = useFormState(signUpCredentials, null);
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
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-foreground"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            className="bg-gray-50 border border-gray-300 text-background text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-xs text-red-500 mt-2 ">
              {state?.error?.firstName}
            </span>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-foreground"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            className="bg-gray-50 border border-gray-300 text-background text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-xs text-red-500 mt-2 ">
              {state?.error?.lastName}
            </span>
          </div>
        </div>
      </div>
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-foreground"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-background text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-xs text-red-500 mt-2 ">
            {state?.error?.confirmPassword}
          </span>
        </div>
      </div>
      <Buttons text="Sign Up" />
      <p className="text-sm font-light text-gray-500">
        Already have an account?
        <Link href="/sign-in" className="text-teal-700 hover:underline">
          {" "}
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default FormSignup;

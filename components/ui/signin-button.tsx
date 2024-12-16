import { signIn } from "@/auth";
import { Button } from "./button";
import Link from "next/link";

export function SignIn() {
  return (
    <Link href="/sign-in">
      <Button variant="custom" type="submit">
        Sign in
      </Button>
    </Link>
  );
}
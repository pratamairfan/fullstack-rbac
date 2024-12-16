import { SignIn } from "@/components/ui/signin-button";
import { ModeToggle } from "@/components/ui/toggle-dark";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Home page</h1>
        <div className="flex gap-3">
          <ModeToggle />
          <SignIn />
        </div>
      </div>
    </div>
  );
}

import { signOut } from "@/auth"
import { Button } from "./button"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo: "/"})
      }}
    >
      <Button variant='default' type="submit">Sign Out</Button>
    </form>
  )
}
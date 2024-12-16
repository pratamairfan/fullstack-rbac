import { auth } from "@/auth";
import { SignOut } from "@/components/ui/signout-button";

const Dashboard = async () => {
  const session = await auth()
  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <SignOut />
      </div>
      <h2 className="text-xl">
        Welcome back: <span className="font-bold">{session?.user?.email}</span>
      </h2>
    </div>
  );
};

export default Dashboard;

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  console.log("Session data in DashboardPage:", session);

  const user = session?.user;

  if (!user) {
    return redirect("/signin");
  }
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-20">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default DashboardPage;

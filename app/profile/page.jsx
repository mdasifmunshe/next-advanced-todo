import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation"

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/server")
  }
  return (
    <main>
      <div>Profile</div>
    </main>
  );
}

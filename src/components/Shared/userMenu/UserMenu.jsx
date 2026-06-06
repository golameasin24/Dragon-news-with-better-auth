"use client";

import Link from "next/link";
import Image from "next/image";

import userPlaceholder from "../../../../assets/user.png";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const UserMenu = () => {
  const { data } = useSession();
  const user = data?.user;
  if (user) {
    return (
      <div className="flex items-center gap-1">
        <div className="ml-4 rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
          <p>welcome, {user.name || user.email}</p>
        </div>
        <button
          className="ml-4 cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signup">
          <Image
            src={userPlaceholder}
            alt={user?.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        <Button variant="outline" asChild className="px-6 py-3">
          <Link href="/signin">Login</Link>
        </Button>
      </div>
    );
  }
};

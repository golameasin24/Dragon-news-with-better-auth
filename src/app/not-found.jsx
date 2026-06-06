import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 container mx-auto px-4">
      <h2 className="text-2xl text-center text-purple-400 font-bold">
        This page could not be found
      </h2>

      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import user from "../../../assets/user.png";
import { Button } from "../ui/button";

import { UserMenu } from "../Shared/userMenu/UserMenu";

const NavigationMenuBar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <div></div>
      <ul className="flex gap-4  items-center">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/cariyer">Career</Link>
        </li>

        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 ">
        {/* <Link href="/signup">
          <Image src={user} alt="User" width={40} height={40} />
        </Link> */}
        <Button variant="outline" asChild className="px-6 py-3">
          {/* <Link href="/signin">Login</Link> */}

          <UserMenu />
        </Button>
      </div>
    </div>
  );
};

export default NavigationMenuBar;

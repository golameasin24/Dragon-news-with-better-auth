import Image from "next/image";
import React from "react";
import BreakingNews from "../../../assets/logo.png";
import { format } from "date-fns";

const TopHeader = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="space-y-4">
        <Image
          className="mx-auto"
          src={BreakingNews}
          width={300}
          height={300}
          alt="logo"
        />
        <p className="text-gray-500 text-center">
          Journalism Without Fear or Favour
        </p>

        <p className="text-gray-500 text-center">
          {format(new Date("2025-11-27"), "eeee, MMMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default TopHeader;

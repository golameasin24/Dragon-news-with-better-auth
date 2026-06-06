import { breakingNewsItems } from "@/components/Shared/BrekingNewsData";
import { Button } from "@/components/ui/button";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container mx-auto p-1  bg-slate-400 text-white font-bold flex items-center ">
      <Button className={"bg-red-400 text-lg text-white px-5 py-2 rounded-md"}>
        {" "}
        Latest{" "}
      </Button>
      <Marquee pauseOnHover={true}>{breakingNewsItems}</Marquee>
    </div>
  );
};

export default BreakingNews;

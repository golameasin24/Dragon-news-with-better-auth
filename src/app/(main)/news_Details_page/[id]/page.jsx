import { All_News_Details } from "@/components/Shared/All_fetching_Data/Data";
import Right_sideBar from "@/components/Shared/Right_side_bar/Right_side_bar";
import { UserMenu } from "@/components/Shared/userMenu/UserMenu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const details_data = await All_News_Details(id);
  return (
    <div className="grid grid-cols-12 container mx-auto gap-4 p-4">
      <div className=" col-span-3 bg-gray-50 p-4 rounded-t-md"></div>
      <div className="card bg-base-100  border col-span-6 border-gray-100 rounded-md shadow-sm font-sans text-[#706F6F]">
        {details_data.map((dt) => {
          return (
            <div key={dt._id} className="card-body p-5 gap-4 ">
              <figure className="rounded-lg overflow-hidden  relative my-2">
                <Image
                  src={dt.thumbnail_url}
                  alt="News Thumbnail"
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </figure>
              <h2 className="text-xl font-bold text-[#403F3F] leading-snug">
                {dt.title ? dt.title : "Unknown Title"}
              </h2>

              <div
                asChild
                className="text-sm leading-relaxed border-b border-gray-200 pb-4"
              >
                <p className="inline">{dt.details}</p>
              </div>

              <Button className="text-white bg-red-500 px-5  py-3 font-semibold cursor-pointer  mt-2 ">
                <Link href={`/news/01`}>All news in this category</Link>
              </Button>
            </div>
          );
        })}
      </div>

      <div className="col-span-3">
        <Right_sideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;

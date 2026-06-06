import {
  All_News_Data,
  Categories_Data,
} from "@/components/Shared/All_fetching_Data/Data";
import React from "react";
import Dragon_news_card from "../../../../components/Dragon_news/Dragon_news_card/Dragon_news_card";
import All_Categories from "@/components/Shared/All_CategoriesMapping/All_Categories";
import Right_sideBar from "@/components/Shared/Right_side_bar/Right_side_bar";

// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";

const Dragon_news_Mpping = async ({ params }) => {
  const { newsid } = await params;

  const categories = await Categories_Data();
  const dragon_news_Data = await All_News_Data(newsid);

  // const session = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });

  // console.log("Session data in DashboardPage:", session);

  // const user = session?.user;

  // if (!user) {
  //   return redirect("/signin");
  // }

  return (
    <>
      <div className="grid grid-cols-12 container mx-auto gap-4 p-4">
        <div className="col-span-3">
          <h4 className="font-bold mb-3 text-lg">All Categories</h4>
          <All_Categories activeId={newsid} categories={categories} />
        </div>
        <div className="container mx-auto col-span-6">
          {dragon_news_Data.length > 0 ? (
            dragon_news_Data.map((news) => (
              <Dragon_news_card key={news._id} news={news} />
            ))
          ) : (
            <p className="text-center text-gray-500">News not found.</p>
          )}
        </div>
        <div className="col-span-3 bg-gray-50 p-4 rounded-md h-fit">
          <Right_sideBar />
        </div>
      </div>
    </>
  );
};

export default Dragon_news_Mpping;

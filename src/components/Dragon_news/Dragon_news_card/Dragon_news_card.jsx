import Image from "next/image";
import React from "react";
// নিচে তৈরি করা ছোট ক্লায়েন্ট কম্পোনেন্টগুলো ইমপোর্ট করছি
import ActionButtons from "../Shared_Dragon_news/ActionButtons";
import RatingToggle from "../Shared_Dragon_news/RatingToggle";
import ViewsToggle from "../Shared_Dragon_news/ViewsToggle";
import Link from "next/link";

const Dragon_news_card = ({ news }) => {
  return (
    <div className="card bg-base-100 w-full border border-gray-100 rounded-md shadow-sm font-sans text-[#706F6F]">
      {/* ১. হেডার সেকশন */}
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-t-md">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src={news.author.img}
                alt={news.author.name || "Author"}
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-neutral text-sm">
              {news.author.name ? news.author.name : "Unknown Author"}
            </h5>
            <p className="text-xs text-gray-400">
              {news.author.published_date
                ? news.author.published_date
                : "Unknown Date"}
            </p>
          </div>
        </div>

        {/* ক্লায়েন্ট কম্পোনেন্ট ১: বুকমার্ক ও শেয়ার */}
        <ActionButtons />
      </div>

      {/* কার্ড বডি */}
      <div className="card-body p-5 gap-4">
        <h2 className="text-xl font-bold text-[#403F3F] leading-snug">
          {news.title ? news.title : "Unknown Title"}
        </h2>

        <figure className="rounded-lg overflow-hidden w-full h-200 relative my-2">
          <Image
            src={news.thumbnail_url}
            alt="News Thumbnail"
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </figure>

        <div className="text-sm leading-relaxed border-b border-gray-200 pb-4">
          <p className="inline">
            {news.details.length > 200
              ? news.details.slice(0, 200) + "..."
              : news.details}
          </p>
          <Link
            href={`/news_Details_page/${news._id}`}
            className="text-orange-500 font-semibold cursor-pointer block mt-2 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* ৫. ফুটার সেকশন */}
        <div className="flex items-center justify-between pt-2">
          {/* ক্লায়েন্ট কম্পোনেন্ট ২: রেটিং টগল */}
          <RatingToggle ratingNumber={news?.rating?.number} />

          {/* ক্লায়েন্ট কম্পোনেন্ট ৩: ভিউজ টগল */}
          <ViewsToggle totalView={news.total_view} />
        </div>
      </div>
    </div>
  );
};

export default Dragon_news_card;

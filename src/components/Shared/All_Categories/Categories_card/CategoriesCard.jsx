"use client"; // ১. useParams ব্যবহারের জন্য ক্লায়েন্ট কম্পোনেন্ট করা বাধ্যতামূলক

import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const CategoriesCard = ({ category, activeId }) => {
  const isActive = activeId === category?.category_id;

  return (
    <div className="w-full my-1">
      <Button
        asChild
        variant={isActive ? "secondary" : "ghost"}
        className={`w-full justify-start py-6 text-base font-medium rounded-lg transition-all duration-200
          ${
            isActive
              ? "bg-[#EAEAEA] text-[#222222] font-semibold" // অ্যাক্টিভ স্টাইল
              : "text-[#9F9F9F] hover:bg-[#F5F5F5] hover:text-[#444444]" // ইনঅ্যাক্টিভ ও হোভার স্টাইল
          }`}
      >
        <Link href={`/news/${category.category_id}`}>
          {category?.category_name || "Unknown Category"}
        </Link>
      </Button>
    </div>
  );
};

export default CategoriesCard;

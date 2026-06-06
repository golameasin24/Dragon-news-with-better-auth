"use client";
import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

export default function ViewsToggle({ totalView }) {
  const [showViews, setShowViews] = useState(false);

  return (
    <div className="flex items-center gap-2 text-gray-500">
      <button
        onClick={() => setShowViews(!showViews)}
        className="text-xl btn btn-ghost p-1 h-auto min-h-0 hover:text-blue-500"
      >
        <IoEyeSharp />
      </button>
      {showViews && (
        <span className="text-sm font-medium pt-0.5">{totalView || 0}</span>
      )}
    </div>
  );
}

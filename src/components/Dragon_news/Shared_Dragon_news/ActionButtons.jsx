"use client";
import React, { useState } from "react";
import { FaBookmark, FaRegBookmark, FaShareAlt } from "react-icons/fa";

export default function ActionButtons() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  return (
    <div className="flex items-center gap-1 text-gray-500">
      <button
        onClick={() => setIsBookmarked(!isBookmarked)}
        className={`btn btn-ghost btn-sm btn-circle text-lg ${isBookmarked ? "text-orange-500" : ""}`}
      >
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>
      {isBookmarked && (
        <span className="text-xs font-semibold mr-1">Bookmarked!</span>
      )}

      <button
        onClick={() => setIsShared(!isShared)}
        className={`btn btn-ghost btn-sm btn-circle text-lg ${isShared ? "text-blue-500" : ""}`}
      >
        <FaShareAlt />
      </button>
      {isShared && (
        <span className="text-xs font-semibold text-blue-500 mr-2">
          Shared!
        </span>
      )}
    </div>
  );
}

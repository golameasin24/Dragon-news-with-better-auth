"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function RatingToggle({ ratingNumber }) {
  const [showRating, setShowRating] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowRating(!showRating)}
        className="flex gap-0.5 text-orange-400 text-lg btn btn-ghost p-1 h-auto min-h-0"
      >
        <FaStar />
      </button>
      {showRating && (
        <span className="font-semibold text-sm text-gray-600 pt-0.5">
          {ratingNumber || "N/A"}
        </span>
      )}
    </div>
  );
}

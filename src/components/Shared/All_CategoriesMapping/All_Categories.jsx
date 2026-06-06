import React from "react";
import { Categories_Data } from "../All_fetching_Data/Data";
import CategoriesCard from "../All_Categories/Categories_card/CategoriesCard";

const All_Categories = async ({ categories, activeId }) => {
  return (
    <>
      <div>
        {categories &&
          categories.map((cat) => (
            <CategoriesCard
              key={cat.category_id}
              category={cat}
              activeId={activeId}
            />
          ))}
      </div>
    </>
  );
};

export default All_Categories;

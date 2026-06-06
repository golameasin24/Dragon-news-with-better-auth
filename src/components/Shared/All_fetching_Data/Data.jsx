export const Categories_Data = async () => {
  const res = await fetch(
    " https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();

  return data.data.news_category;
};

export const All_News_Data = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );

  const data = await res.json();

  return data.data;
};

export const All_News_Details = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );

  const data = await res.json();

  return data.data;
};

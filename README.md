This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Dragoon News is a responsive front-end web application build with react that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using firebase authentication.let's build the project together. 😎

Base URL
The base URL for the API is: https://openapi.programming-hero.com/api

Endpoints
Get All News Categories

URL: /news/categories
Full URL: https://openapi.programming-hero.com/api/news/categories
Method: GET
Description: Retrieves a list of all available news categories.
Get All News in a Category

URL Format: /news/category/{category_id}
Full URL Example: https://openapi.programming-hero.com/api/news/category/01
Method: GET
Description: Retrieves all news articles within a specified category.
Path Parameter:
category_id (string): The unique ID of the category.
Get News Detail by ID

URL Format: /news/{news_id}
Full URL Example: https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
Method: GET
Description: Retrieves detailed information about a specific news article.
Path Parameter:
news_id (string): The unique ID of the news article.
Layouts & Design
There will be three layour for the project. watch below designs to understand layout structure/

News Layout

import { redirect } from "next/navigation";

// Dragon News এর মেইন হোমপেজ এসইও (SEO) মেটাডাটা
export const metadata = {
  title: "Dragon News | Latest Breaking News & Updates",
  description:
    "Welcome to Dragon News. Get the latest breaking news, world politics, technology, business, and entertainment updates instantly.",
  keywords: [
    "Dragon News",
    "Breaking News",
    "Latest Updates",
    "Online Newspaper",
  ],

  openGraph: {
    title: "Dragon News | Latest Breaking News & Updates",
    description:
      "Welcome to Dragon News. Get the latest breaking news, world politics, technology, business, and entertainment updates instantly.",
    url: "https://dragon-news.com",
    siteName: "Dragon News",
    type: "website",
  },
};

export default function Home() {
  redirect("/news/01");

  return null;
}

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

// Dragon News সাইটের জন্য ১০০% পারফেক্ট এসইও (SEO) মেটাডাটা
export const metadata = {
  title: {
    default: "Dragon News | Stay Updated with Latest Stories",
    template: "%s | Dragon News", // অন্য পেজে (যেমন: Login | Dragon News) স্বয়ংক্রিয়ভাবে দেখাবে
  },
  description:
    "Dragon News is your trusted source for breaking news, latest updates, politics, sports, entertainment, and worldwide stories.",
  keywords: [
    "Dragon News",
    "Breaking News",
    "Latest Updates",
    "World News",
    "Online News Portal",
  ],
  authors: [{ name: "Dragon News Team" }],
  creator: "Dragon News Media",

  // ফেসবুক/লিঙ্কডইন শেয়ারিং এসইও (Open Graph)
  openGraph: {
    title: "Dragon News | Stay Updated with Latest Stories",
    description:
      "Get the latest breaking news and top stories from world politics, technology, business, and entertainment.",
    url: "https://dragon-news.com", // পরে আপনার আসল ডোমেইন লিংক এখানে বসিয়ে দিয়েন
    siteName: "Dragon News",
    locale: "en_US",
    type: "website",
  },

  // টুইটার/X শেয়ারিং এসইও
  twitter: {
    card: "summary_large_image",
    title: "Dragon News | Latest Breaking News",
    description:
      "Get the latest breaking news and top stories from world politics, technology, business, and entertainment.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}

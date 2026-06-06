const breakingNewsData = [
  {
    id: "DN-2026-001",
    title: "Match Highlights: Germany vs Spain – as it happened",
  },
  {
    id: "DN-2026-002",
    title: "Global Tech Summit 2026: The Rise of AI Collaborators",
  },
  {
    id: "DN-2026-003",
    title: "Relief in Dhaka's air, forecast of rain throughout the week",
  }, // বাড়তি ব্র্যাকেট তুলে দিয়ে সরাসরি অবজেক্ট রাখা হয়েছে
];

export const breakingNewsItems = breakingNewsData.map((news) => (
  <div
    className="container mx-auto"
    key={news.id}
    style={{ marginRight: "30px" }}
  >
    <span>{news.title}</span>
  </div>
));

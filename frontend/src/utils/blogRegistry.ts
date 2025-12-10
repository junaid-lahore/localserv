// ui/src/utils/blogRegistry.ts

export interface BlogPost {
  title: string;
  path: string;
  // Publication date in YYYY-MM-DD format
  publishedAt: string;
}

// This registry will need to be manually updated with each new blog post.
export const blogRegistry: BlogPost[] = [
  {
    title: "Why AI is the Future of Local Services: Faster, Smarter, and Safer",
    path: "/whyaiisthefutureoflocalservices",
    publishedAt: "2024-10-24",
  },
  {
    title: "What Is LocalServ? The First AI-Powered Platform for Mobile Services in Los Angeles",
    path: "/whatislocalserv",
    publishedAt: "2024-10-27",
  },
  {
    title: "The Ultimate Guide to Local Services",
    path: "/blog/ultimate-guide", // Example path, assuming it exists
    publishedAt: "2024-10-20",
  },
  {
    title: "5 Pro Tips for Finding Reliable Pros",
    path: "/blog/pro-tips", // Example path, assuming it exists
    publishedAt: "2024-10-15",
  },
];

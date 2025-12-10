export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  path: string;
  publishedDate: string;
  author: {
    name: string;
    imageUrl: string;
  };
  categories: string[];
  featuredImage: {
    src: string;
    alt: string;
  };
  content?: string;
  readTime: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Why AI is the Future of Local Services: Faster, Smarter, and Safer",
    excerpt: "Discover how AI is revolutionizing the local service industry, making it easier than ever to find trusted professionals.",
    slug: "why-ai-is-the-future-of-local-services",
    path: "/why-ai-is-the-future-of-local-services",
    publishedDate: "2024-10-24",
    author: {
      name: "Neha Dogra",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    categories: ["AI", "Local Services", "Future of Work"],
    featuredImage: {
      src: "https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/1-%20Feature%20Image-min%20-blog3.webp",
      alt: "AI powered tools",
    },
    readTime: "5 min read",
  },
  {
    id: 2,
    title:
      "What Is LocalServ? The First AI-Powered Platform for Mobile Services in Los Angeles",
    excerpt:
      "Learn about LocalServ, the new platform that uses AI to connect you with top-rated mobile service professionals in Los Angeles.",
    slug: "what-is-localserv",
    path: "/what-is-localserv",
    publishedDate: "2024-10-27",
    author: {
      name: "Neha Dogra",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    categories: ["Local Services", "AI", "Los Angeles"],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "People working on laptops",
    },
    readTime: "4 min read",
  },
  {
    id: 3,
    title:
      "How LocalServ Works: AI Negotiation That Books You Services in Minutes, Not Days",
    excerpt:
      "Booking a service in Los Angeles often feels like a waiting game. You fill out forms, call providers, or drop a message on an app — and then, silence.",
    slug: "how-localserv-works",
    path: "/how-localserv-works",
    publishedDate: "2025-11-12",
    author: {
      name: "Neha Dogra",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    categories: ["AI", "Local Services", "Negotiation"],
    featuredImage: {
      src: "https://plus.unsplash.com/premium_photo-1682145930966-73f8372697d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "AI negotiation in action",
    },
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Tired of Overpaying for Car Detailing? How LocalServ Reduces Hidden Markups and Brings Fairness Back to Pricing",
    excerpt: "Discover how LocalServ eliminates advertising waste and hidden fees to bring transparent, fair pricing to car detailing in Los Angeles.",
    slug: "car-detailing-pricing-hidden-markups",
    path: "/car-detailing-pricing",
    publishedDate: "2025-11-28",
    author: {
      name: "LocalServ Team",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    categories: ["Industry Insights", "Pricing", "Car Detailing"],
    featuredImage: {
      src: "https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/1-Feature Image - blog4.png",
      alt: "Professional car detailing service in Los Angeles"
    },
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Professional Auto Detailing vs. DIY: Which Gives You Better Results in LA?",
    excerpt: "In Los Angeles, cars are more than transportation — they're part of the city's identity. Discover whether DIY or professional detailing delivers better long-term value.",
    slug: "professional-auto-detailing-vs-diy-la",
    path: "/professional-auto-detailing-vs-diy-la",
    publishedDate: "2025-12-02",
    author: {
      name: "LocalServ Team",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    categories: ["Car Detailing", "DIY vs Professional", "Los Angeles"],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Professional car detailing service"
    },
    readTime: "10 min read",
  },
];

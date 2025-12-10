import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogData } from "utils/blogData";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BlogPost } from "utils/blogData";

interface Heading {
  id: string;
  title: string;
  level: number;
}

interface Props {
  children: React.ReactNode;
  post: BlogPost;
}

const BlogLayout: React.FC<Props> = ({ children, post }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();

  useEffect(() => {
    const contentEl = document.querySelector(".blog-content");
    if (contentEl) {
      const headingEls = Array.from(
        contentEl.querySelectorAll("h2")
      );
      const newHeadings = headingEls.map((el, index) => {
        const id = el.id || `heading-${location.pathname}-${index}`;
        if (!el.id) {
          el.id = id;
        }
        return {
          id,
          title: el.textContent || "",
          level: Number(el.tagName.substring(1)),
        };
      });
      setHeadings(newHeadings);
    }
  }, [children, location.pathname]);

  const otherPosts = blogData
    .filter((p) => p.id !== post.id)
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    )
    .slice(0, 3);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground isolate">
      <Header />
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-bold uppercase tracking-wider text-gradient-smooth mb-2"
            >
              Local Serv Blog
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 px-4 sm:px-8 md:px-16 lg:px-32"
            >
              {post.title}
            </motion.h1>
             <motion.div
                className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full mx-auto mt-6"
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1.5, delay: 1 }}
            />
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 px-4 sm:px-6 lg:px-0">
        {/* Left Sidebar (Table of Contents) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start h-fit">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Jump To</h3>
              <ScrollArea className="h-60 [mask-image:linear-gradient(to_bottom,black_90%,transparent)] jump-to-scrollbar">
                <ul className="space-y-3 pr-4">
                  {headings.length > 0 ? (
                    headings.map((heading) => (
                      <li key={heading.id} className="text-sm">
                        <a
                          href={`#${heading.id}`}
                          className="block font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                          {heading.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p className="text-gray-500">No sections available.</p>
                    </li>
                  )}
                </ul>
              </ScrollArea>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="col-span-1 lg:col-span-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/60 blog-content">
          {children}
        </article>

        {/* Right Sidebar (Related Content) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start h-fit">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Other Blog Posts</h3>
              <ul className="space-y-4">
                {otherPosts.length > 0 ? (
                  otherPosts.map(post => (
                    <li key={post.id}>
                      <Link to={post.path} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <p className="text-sm text-gray-500">No other posts available.</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 shadow-2xl text-white">
              <h3 className="font-bold text-lg mb-4">Join Our Waitlist</h3>
              <p className="text-sm text-purple-100 mb-4">Get early access to the future of local services.</p>
              <div className="flex flex-col space-y-2">
                <Input type="email" placeholder="Enter your email" className="bg-purple-500/50 border-purple-400 placeholder-purple-200 text-white" />
                <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100">Join Waitlist</Button>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export { BlogLayout };

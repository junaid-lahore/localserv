import React from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { StickyHeader } from "components/StickyHeader";
import { Footer } from "components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";
import { blogData } from "utils/blogData";

export default function Blogs() {
  // const navigate = useNavigate();
  const router = useRouter();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <StickyHeader />

      <main className="pt-14">
        {/* Animated Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
            <motion.div
              className="absolute top-32 right-16 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
              animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700 font-medium">
                  {blogData.length} Articles
                </span>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-32 right-20 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 3 }}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700 font-medium">
                  AI Insights
                </span>
              </div>
            </motion.div>
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Our Insights
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our thoughts on the future of local services, AI, and
              community building.
            </motion.p>
          </div>
        </motion.section>

        {/* Blog Post Section */}
        <section className="py-24 px-4 bg-white z-10 relative -mt-24 rounded-t-3xl shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {blogData.map((blogPost, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ staggerChildren: 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-pointer"
                  onClick={() => router.push(blogPost.path)}
                >
                  <div className="lg:flex items-center">
                    <div className="lg:w-1/2 overflow-hidden h-full">
                      <motion.img
                        className="h-full w-full object-cover"
                        src={blogPost.featuredImage.src}
                        alt={blogPost.featuredImage.alt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-8 md:p-12 lg:w-1/2">
                      <motion.h2
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                      >
                        {blogPost.title}
                      </motion.h2>
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed mb-8"
                      >
                        {blogPost.excerpt}
                      </motion.p>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="flex items-center text-sm text-gray-500 mb-6">
                          <div className="flex items-center mr-6">
                            <User className="w-4 h-4 mr-2 text-blue-500" />
                            <span>{blogPost.author.name}</span>
                          </div>
                          <div className="flex items-center">
                            {React.createElement(CalendarIcon, { className: "w-4 h-4 mr-2 text-purple-500" })}
                            <span>{blogPost.publishedDate}</span>
                          </div>
                        </div>
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg transform hover:scale-105 transition-transform"
                        >
                          Read Full Article
                          <ArrowRight className="w-5 h-5 ml-3" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 text-center p-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-block"
              >
                <Sparkles className="w-12 h-12 text-purple-500 mb-4" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                More Insights Coming Soon!
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto">
                We're always working on new content. Stay tuned for more
                articles on AI, local business growth, and community stories.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

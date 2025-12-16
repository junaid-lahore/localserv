import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogData } from "utils/blogData";

export interface Props {}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export default function BlogSlider({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Number of cards visible at once based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl screens
      if (window.innerWidth >= 1024) return 3; // lg screens  
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 1; // default (SSR-safe to avoid hydration mismatches)
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, blogData.length - visibleCards);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        if (!isPaused && !isAnimating) {
          setCurrentIndex(prevIndex => {
            // Loop back to 0 when reaching the end
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
          });
        }
      }, 4000); // Slide every 4 seconds
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [maxIndex, isPaused, isAnimating]);

  // Handle manual navigation
  const handleManualNavigation = (callback: () => void) => {
    // Pause auto-slide
    setIsPaused(true);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Execute the navigation
    callback();

    // Resume auto-slide after 6 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    handleManualNavigation(() => {
      setIsAnimating(true);
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1); // Loop to beginning
      setTimeout(() => setIsAnimating(false), 300);
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    handleManualNavigation(() => {
      setIsAnimating(true);
      setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1); // Loop to end
      setTimeout(() => setIsAnimating(false), 300);
    });
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    handleManualNavigation(() => {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    });
  };

  const handleNavigateToBlog = (slug: string) => {
    // For now, just log - in future this would navigate to the blog post
    console.log(`Navigate to blog: ${slug}`);
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="blog-slider" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Stay updated with insights, tips, and stories from the Local Serv community
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

        {/* Cards Container */}
        <div className="overflow-hidden mx-8">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: hasMounted ? `translateX(-${currentIndex * (100 / visibleCards)}%)` : 'translateX(0%)'
            }}
          >
            {blogData.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 px-3"
                style={{ width: hasMounted ? `${100 / visibleCards}%` : '100%' }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                     onClick={() => handleNavigateToBlog(post.slug)}>
                  {/* Image */}
                  <div className="relative overflow-hidden">
                      <img
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.categories[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          {React.createElement(CalendarIcon, { className: "w-4 h-4" })}
                          <span>{post.publishedDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      
                      {/* Read More Button */}
                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {hasMounted &&
              Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => console.log('Navigate to blog page')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

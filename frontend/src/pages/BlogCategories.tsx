import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { StickyHeader } from 'components/StickyHeader';
import { Footer } from 'components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight,
  MessageSquare,
  Sparkles,
  Zap,
  Target,
  Heart,
  Briefcase,
  Home,
  Smartphone,
  Globe,
  Coffee,
  Clock,
  Search
} from 'lucide-react';

// Blog categories data with Local Serv themed content
const blogCategories = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'AI & Innovation',
    description: 'Discover how AI is transforming local service discovery and making connections smarter.',
    postCount: 24,
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    popular: true,
    tags: ['AI', 'Technology', 'Innovation']
  },
  {
    id: 2,
    icon: Users,
    title: 'Customer Stories',
    description: 'Real experiences from customers who found their perfect service providers through Local Serv.',
    postCount: 32,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: true,
    tags: ['Stories', 'Reviews', 'Experience']
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Business Growth',
    description: 'Tips and strategies for service providers to grow their business and reach more customers.',
    postCount: 18,
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    popular: false,
    tags: ['Business', 'Growth', 'Tips']
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Industry Trends',
    description: 'Stay updated with the latest trends and insights in the local services marketplace.',
    postCount: 21,
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    popular: false,
    tags: ['Trends', 'Market', 'Analysis']
  },
  {
    id: 5,
    icon: Heart,
    title: 'Community Impact',
    description: 'How Local Serv is building stronger communities by connecting neighbors with local professionals.',
    postCount: 15,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    popular: false,
    tags: ['Community', 'Impact', 'Local']
  },
  {
    id: 6,
    icon: Zap,
    title: 'Quick Tips',
    description: 'Fast, actionable advice for getting the most out of your Local Serv experience.',
    postCount: 28,
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    popular: true,
    tags: ['Tips', 'Quick', 'Advice']
  },
  {
    id: 7,
    icon: Target,
    title: 'How-To Guides',
    description: 'Step-by-step guides to help you navigate services, pricing, and getting the best results.',
    postCount: 19,
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    popular: false,
    tags: ['Guides', 'Tutorial', 'Help']
  },
  {
    id: 8,
    icon: Globe,
    title: 'Platform Updates',
    description: 'Latest features, improvements, and announcements from the Local Serv team.',
    postCount: 12,
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    popular: false,
    tags: ['Updates', 'Features', 'News']
  },
  {
    id: 9,
    icon: Coffee,
    title: 'Behind the Scenes',
    description: 'Get an inside look at how Local Serv works and the team building the future of local services.',
    postCount: 8,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    popular: false,
    tags: ['Company', 'Team', 'Culture']
  }
];

// Featured topics for the hero section
const featuredTopics = [
  'AI-Powered Matching',
  'Customer Success Stories',
  'Service Provider Growth',
  'Local Community Impact'
];

export default function BlogCategories() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion hooks
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '20%']);
  
  // Intersection observer hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isCategoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  // Auto-cycle through featured topics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % featuredTopics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Filter categories based on search
  const filteredCategories = blogCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Calculate total posts
  const totalPosts = blogCategories.reduce((sum, category) => sum + category.postCount, 0);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <StickyHeader />

      <main className="pt-14">
        {/* Hero Section with Chat Bubble Motifs */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden"
          style={{ y: heroY }}
        >
          {/* Background Elements - Chat Bubble Inspired */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large decorative chat bubbles */}
            <motion.div 
              className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.div 
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
            
            {/* Floating conversation elements */}
            <motion.div 
              className="absolute top-20 left-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-700 font-medium">Exploring blog topics...</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-32 right-16 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700 font-medium">{totalPosts}+ articles</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-32 right-20 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 3 }}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700 font-medium">AI insights</span>
              </div>
            </motion.div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <span className="text-gray-900">Explore Our</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Blog Categories
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Discover insights, stories, and tips about
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-bold"
                  key={currentTopic}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {' '}{featuredTopics[currentTopic]}
                </motion.span>
              </motion.p>
              
              {/* Search Bar */}
              <motion.div 
                className="max-w-md mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Stats Section */}
        <motion.section 
          ref={statsRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{blogCategories.length}</div>
                <div className="text-gray-600 font-medium">Categories</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{totalPosts}+</div>
                <div className="text-gray-600 font-medium">Articles</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Readers</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Categories Grid */}
        <motion.section 
          ref={categoriesRef}
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Interest
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI innovations to customer stories, find the content that speaks to you.
              </p>
            </motion.div>
            
            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredCard(category.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group cursor-pointer"
                  >
                    <Card className={`h-full transition-all duration-300 border-2 ${
                      hoveredCard === category.id 
                        ? 'border-purple-300 shadow-2xl scale-105' 
                        : 'border-gray-200 shadow-lg hover:shadow-xl'
                    } ${category.bgColor} relative overflow-hidden`}>
                    
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    {/* Popular badge */}
                    {category.popular && (
                      <motion.div 
                        className="absolute top-4 right-4 z-10"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={isCategoriesInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-bold px-3 py-1">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Popular
                        </Badge>
                      </motion.div>
                    )}
                    
                    <CardContent className="p-8 relative z-10">
                      {/* Icon with animated background */}
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl ${category.bgColor} border-2 border-white flex items-center justify-center mb-6 relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        />
                        <IconComponent className={`w-8 h-8 ${category.iconColor} relative z-10`} />
                      </motion.div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isCategoriesInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.1 }}
                            className="px-3 py-1 bg-white/80 text-gray-600 text-sm font-medium rounded-full border border-gray-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Post count and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm font-medium">{category.postCount} articles</span>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className={`${category.iconColor} hover:bg-white/80 font-medium group-hover:scale-105 transition-all`}
                          >
                            Explore
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          {/* No results message */}
          {filteredCategories.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No categories found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </motion.div>
          )}
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background chat bubbles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full"
              animate={{
                y: ['100vh', '-10vh'],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 3 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join our community and get notified when we publish new insights about the future of local services.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Subscribe to Updates
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  </div>
  );
}

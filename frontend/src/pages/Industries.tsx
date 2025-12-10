import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { StickyHeader } from 'components/StickyHeader';
import { Footer } from 'components/Footer';
import { WaitlistForm } from 'components/WaitlistForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  Building2,
  Briefcase,
  CarFront,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Heart,
  Zap,
  Users,
  Scissors,
  Sparkles
} from 'lucide-react';

export default function Industries() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  
  // Refs for intersection observer
  const heroRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion hooks
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Intersection observer hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isCurrentInView = useInView(currentRef, { once: true, amount: 0.3 });
  const isUpcomingInView = useInView(upcomingRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Scroll to waitlist section
  const scrollToWaitlist = () => {
    const element = document.getElementById('transform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Upcoming industries data
  const upcomingIndustries = [
    {
      icon: Building2,
      name: 'Home Services',
      description: 'AI booking for local cleaning, repairs, and maintenance services',
      services: ['House Cleaning', 'Appliance Repair', 'Plumbing', 'Electrical Work', 'HVAC Maintenance', 'Handyman Services'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Connect with verified business professionals and consultants',
      services: ['Digital Marketing Firms', 'Consultants', 'Accountants', 'Lawyers', 'Financial Advisors', 'Photographers & Videographers'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: CarFront,
      name: 'Automotive Services',
      description: 'Complete automotive care and maintenance marketplace',
      services: ['Mechanics', 'Body Shops', 'Tint Shops', 'Rim and Tire Shops', 'Vinyl Wrap Shops', 'Paint Shops'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      name: 'Health & Wellness',
      description: 'Professional health and wellness services at your convenience',
      services: ['Fitness Trainers', 'Massage Therapists', 'Nutritionists', 'Physical Therapists', 'Yoga Instructors', 'Life Coaches'],
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Scissors,
      name: 'Beauty & Personal Care',
      description: 'Mobile beauty and personal care services for your lifestyle',
      services: ['Mobile Hair Stylists', 'Makeup Artists', 'Nail Technicians', 'Aestheticians', 'Barbers', 'Lash Artists'],
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <StickyHeader />
      <main className="pt-14">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
          style={{ y }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                animate={{
                  y: ['-100vh', '100vh'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Industries We&nbsp;
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Serve
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Local Serv uses <span className="text-blue-300 font-semibold">AI-powered booking</span> to instantly connect 
                Los Angeles customers with verified providers across key industries
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToWaitlist}
                  className="px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-110 shadow-2xl"
                >
                  Join Our Platform
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Current Industry - Mobile Auto Detailing */}
        <motion.section 
          ref={currentRef}
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isCurrentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <Badge className="mb-6 px-4 py-2 text-base md:text-lg bg-green-100 text-green-800 rounded-full">
                Now Available - Beta Launch
              </Badge>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-gray-900">
                <span className="text-blue-600">Auto Detailing</span> Los Angeles
              </h2>
              <div className="max-w-4xl md:max-w-5xl mx-auto">
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  We chose auto detailing as our launch industry because it perfectly showcases what Local Serv does best:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-8">
                  <p className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed">
                    Automating the matchmaking process between customers and businesses for service requests that require 
                    <span className="text-blue-600"> critical thinking</span>, 
                    <span className="text-purple-600"> business operational knowledge</span>, and 
                    <span className="text-green-600"> industry expertise</span> when assessing each unique customer's needs.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Why Auto Detailing Works - Feature Cards */}
            <div className="mb-12 md:mb-16">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={isCurrentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Why Auto Detailing is the Perfect Starting Point
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: Users,
                    title: 'Nuanced Customer Needs',
                    description: 'Customers often don\'t know exactly what they need - they just know their car is dirty, damaged, or scratched.',
                    highlight: 'Conversational AI listens, understands the problem, and guides them to the right solution.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Complex Business Operations', 
                    description: 'Each business has different packages, chemicals, tools, and service areas - no standard solution fits all.',
                    highlight: 'AI agents understand specific business operations and offer optimal pricing within profit models.'
                  },
                  {
                    icon: Clock,
                    title: 'Appointment-Based Industry',
                    description: 'Businesses already have online booking systems and customers expect to schedule appointments.',
                    highlight: 'Perfect opportunity for Local Serv AI to handle the entire booking process seamlessly.'
                  },
                  {
                    icon: Zap,
                    title: 'Low PPC Conversion Rates',
                    description: 'Current Google/Facebook ads generate calls that convert only 30-40% of the time, wasting money and time.',
                    highlight: 'Local Serv lets AI handle inquiries and businesses only pay for actual bookings.'
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isCurrentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                    >
                      <div className="flex items-center mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {feature.description}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mt-auto">
                        <p className="text-sm font-semibold text-gray-800">
                          💡 {feature.highlight}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Call-to-Action for Current Service */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isCurrentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Ready to Be Part of the Revolution?
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  Join the auto detailing professionals and customers experiencing the future of local services. 
                  See how our AI-powered platform is setting the standard for intelligent booking.
                </p>
                <Button
                  size="lg"
                  onClick={scrollToWaitlist}
                  className="px-8 md:px-10 py-4 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105"
                >
                  Join the Platform
                  <Car className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What's Next Section */}
        <motion.section 
          ref={upcomingRef}
          className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isUpcomingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
                What's <span className="text-yellow-400">Next?</span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Auto detailing is just the beginning. We're expanding our AI-powered booking platform 
                to revolutionize how Los Angeles connects with local service professionals.
              </p>
              <div className="inline-block px-5 py-2 md:px-6 md:py-3 bg-yellow-400/20 text-yellow-300 rounded-full font-semibold text-base md:text-lg">
                Coming Soon to Los Angeles
              </div>
            </motion.div>
            
            {/* Upcoming Industries Grid */}
            <div className="max-w-7xl mx-auto">
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {upcomingIndustries.slice(0, 3).map((industry, index) => {
                  const IconComponent = industry.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isUpcomingInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className="group"
                      onMouseEnter={() => setHoveredIndustry(index)}
                      onMouseLeave={() => setHoveredIndustry(null)}
                    >
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl flex flex-col">
                        <motion.div 
                          className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}
                          animate={hoveredIndustry === index ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>
                        
                        <div className="text-center flex-grow flex flex-col">
                          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                            {industry.name}
                          </h3>
                          
                          <p className="text-blue-100 mb-6 leading-relaxed text-base">
                            {industry.description}
                          </p>
                          
                          <div className="space-y-3 mb-8 flex-grow">
                            {industry.services.map((service, serviceIndex) => (
                              <motion.div 
                                key={serviceIndex} 
                                className="flex items-center justify-start space-x-3 max-w-sm mx-auto"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isUpcomingInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: (index * 0.15) + (serviceIndex * 0.1) }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300 font-medium">{service}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="mt-auto">
                            <motion.div 
                              className="inline-block px-6 py-3 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium hover:bg-purple-500/40 transition-colors cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Coming Soon
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Second row - 2 centered cards */}
              <div className="flex justify-center mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                  {upcomingIndustries.slice(3, 5).map((industry, index) => {
                    const IconComponent = industry.icon;
                    const actualIndex = index + 3;
                    
                    return (
                      <motion.div
                        key={actualIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isUpcomingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: actualIndex * 0.15 }}
                        className="group"
                        onMouseEnter={() => setHoveredIndustry(actualIndex)}
                        onMouseLeave={() => setHoveredIndustry(null)}
                      >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl flex flex-col">
                          <motion.div 
                            className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}
                            animate={hoveredIndustry === actualIndex ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </motion.div>
                          
                          <div className="text-center flex-grow flex flex-col">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                              {industry.name}
                            </h3>
                            
                            <p className="text-blue-100 mb-6 leading-relaxed text-base">
                              {industry.description}
                            </p>
                            
                            <div className="space-y-3 mb-8 flex-grow">
                              {industry.services.map((service, serviceIndex) => (
                                <motion.div 
                                  key={serviceIndex} 
                                  className="flex items-center justify-start space-x-3 max-w-sm mx-auto"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isUpcomingInView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ duration: 0.5, delay: (actualIndex * 0.15) + (serviceIndex * 0.1) }}
                                >
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span className="text-sm text-gray-300 font-medium">{service}</span>
                                </motion.div>
                              ))}
                            </div>
                            
                            <div className="mt-auto">
                              <motion.div 
                                className="inline-block px-6 py-3 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium hover:bg-purple-500/40 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Coming Soon
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isUpcomingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                Each new industry will feature the same <strong>AI booking technology</strong>, 
                connecting you instantly with verified professionals across Los Angeles.
              </p>
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="px-8 md:px-12 py-4 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-gray-900 transition-all hover:scale-110 shadow-2xl"
              >
                Get Early Access
                <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Ready to Transform Section */}
        <section id="transform" className="py-20 md:py-32 relative overflow-hidden">
          {/* Professional background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"></div>
          
          {/* Subtle geometric background elements */}
          <motion.div
            variants={{
              animate: {
                scale: [1, 1.05, 1],
                opacity: [0.03, 0.06, 0.03],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            animate="animate"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-200/50 rounded-full"
          />
          <motion.div
            variants={{
              animate: {
                scale: [1, 1.08, 1],
                opacity: [0.02, 0.05, 0.02],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            animate="animate"
            style={{ animationDelay: '3s' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-200/40 rounded-full"
          />
          
          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
              >
                Ready to Transform Your Industry?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              >
                Join thousands of service providers and seekers who are already preparing for the future of local services. Be among the first to experience Local Serv.
              </motion.p>
              
              {/* Professional status indicator with subtle animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-3 mt-8"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 bg-emerald-500 rounded-full"
                />
                <span className="text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
                  Limited Early Access Available
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="w-2.5 h-2.5 bg-slate-400 rounded-full"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

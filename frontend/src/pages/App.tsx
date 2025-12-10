import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Coins, Star, ChevronLeft, ChevronRight, CheckCircle, MessageSquare, Search, ArrowRight, MapPin, MessagesSquare, Brain, ShieldCheck, Settings2, DollarSign, UserCheck, HeartHandshake, SearchSlash, HandCoins, MessageSquareText, FileText, ThumbsUp, FilterX, Annoyed, ArrowBigDownDash, Bot, Award, Shield, Play } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { StickyHeader } from "components/StickyHeader";
import { Footer } from "components/Footer";
import { WaitlistForm } from "components/WaitlistForm";
import BlogSlider from "components/BlogSlider";
import { CustomersEarnBusinessesSave } from 'components/CustomersEarnBusinessesSave';
import WhyCustomersLoveUs from 'components/WhyCustomersLoveUs';
import WhyBusinessesLoveUs from 'components/WhyBusinessesLoveUs';

export default function Home() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentMessages, setCurrentMessages] = useState(["", "", ""]);
  const [isTyping, setIsTyping] = useState([false, false, false]);

  // Service scenarios that demonstrate the complete workflow
  const serviceScenarios = [
    {
      name: "Auto Detailing",
      step1: "I need mobile auto detailing in Echo Park tomorrow",
      step2: "Found 8 top-rated detailers, secured 25% discount from premium service",
      step3: "Service completed! $45 cash reward added to your account"
    },
    {
      name: "Plumbing Service", 
      step1: "Looking for emergency plumber in Beverly Hills today",
      step2: "Vetting 12 licensed plumbers, negotiating best rates for urgent repair",
      step3: "Leak fixed perfectly! Your $60 incentive is ready for withdrawal"
    },
    {
      name: "House Cleaning",
      step1: "Need house cleaning service in Santa Monica this weekend",
      step2: "3 verified cleaning teams available, booking highest-rated with discount",
      step3: "House sparkling clean! $35 bonus earned + 5-star service delivered"
    },
    {
      name: "Electrical Work",
      step1: "Find me an electrician in Westwood for tonight",
      step2: "5 certified electricians found, securing emergency service at best price",
      step3: "Electrical issue resolved! $50 reward processed automatically"
    },
    {
      name: "Landscaping",
      step1: "Need landscaping service for my backyard in Pasadena",
      step2: "Comparing 6 landscaping pros, negotiated package deal with top contractor",
      step3: "Garden transformed! $75 cash incentive deposited to your account"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Chat with AI",
      description: "Tell our AI what you need — like 'mobile auto detailing in Echo Park tomorrow.' Our AI finds the best local pros instantly.",
      icon: MessageSquare,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      title: "AI vets, negotiates, and books",
      description: "Our AI vets hundreds of verified LA professionals, negotiates pricing, and books instantly. Compare transparent offers side-by-side.",
      icon: Brain,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "3",
      title: "You get paid when service is completed",
      description: "Enjoy stress-free service AND receive advertising incentive payout from the business. Money held safely in escrow until job completion.",
      icon: CheckCircle,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      color: "from-green-500 to-green-600"
    }
  ];

  // Auto-cycling effect - cycles through different service scenarios
  useEffect(() => {
    const scenarioCycleDuration = 12000; // 12 seconds per complete scenario
    
    const interval = setInterval(() => {
      setCurrentScenarioIndex((prev) => (prev + 1) % serviceScenarios.length);
    }, scenarioCycleDuration);

    return () => clearInterval(interval);
  }, []);

  // Synchronized typing animation for all 3 cards
  useEffect(() => {
    const currentScenario = serviceScenarios[currentScenarioIndex];
    const scenarioSteps = [currentScenario.step1, currentScenario.step2, currentScenario.step3];
    
    // Reset all messages and typing states
    setCurrentMessages(["", "", ""]);
    setIsTyping([false, false, false]);
    
    let timeouts: NodeJS.Timeout[] = [];
    
    const startTypingForStep = (stepIndex: number, delay: number) => {
      const timeout = setTimeout(() => {
        setIsTyping(prev => {
          const newTyping = [...prev];
          newTyping[stepIndex] = true;
          return newTyping;
        });
        
        const message = scenarioSteps[stepIndex];
        let charIndex = 0;
        
        const typeCharacter = () => {
          if (charIndex < message.length) {
            setCurrentMessages(prev => {
              const newMessages = [...prev];
              newMessages[stepIndex] = message.slice(0, charIndex + 1);
              return newMessages;
            });
            charIndex++;
            timeouts.push(setTimeout(typeCharacter, 50)); // 50ms per character
          } else {
            // Finished typing this step
            setIsTyping(prev => {
              const newTyping = [...prev];
              newTyping[stepIndex] = false;
              return newTyping;
            });
          }
        };
        
        typeCharacter();
      }, delay);
      
      timeouts.push(timeout);
    };
    
    // Start typing for each step with staggered delays
    startTypingForStep(0, 500);   // Step 1 starts after 500ms
    startTypingForStep(1, 4000);  // Step 2 starts after 4s
    startTypingForStep(2, 8000);  // Step 3 starts after 8s
    
    return () => {
      // Clear all timeouts when scenario changes
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [currentScenarioIndex]);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('join-waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // Animation variants for floating elements
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main className="pt-14">
        {/* Revolutionary Combined Hero + How It Works Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 opacity-10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
            
            {/* Enhanced Floating Service Elements */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 left-8 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">🚗 Auto Detailing Available</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
              className="absolute top-1/3 left-4 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-green-600 transition-colors">🏠 Home Services Ready</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '4s' }}
              className="absolute bottom-1/3 left-12 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-purple-600 transition-colors">🔧 Repair Experts Online</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute top-32 right-8 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">💬 AI Chat Active</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '3s' }}
              className="absolute top-2/3 right-16 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-green-600 transition-colors">✅ Verified Pros Found</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '5s' }}
              className="absolute bottom-24 right-12 z-20 hidden lg:block"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-yellow-600 transition-colors">💰 Earn While You Book</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
            {/* Main Title */}
            <div className="text-center mb-16">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.span 
                  className="text-gray-900 inline-block text-4xl sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Your Perfect Service Provider
                </motion.span>
                <br />
                <motion.span 
                  className="text-gradient-smooth inline-block text-4xl sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  Just One Chat Away
                </motion.span>
                
                {/* Animated underline */}
                <motion.div
                  className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full mx-auto mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "150px" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI-powered conversations that connect you instantly with verified Los Angeles professionals — from auto detailing to home services.
                <motion.span 
                  className="text-gradient-smooth font-bold"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(168, 85, 247, 0)",
                      "0 0 20px rgba(168, 85, 247, 0.5)",
                      "0 0 0px rgba(168, 85, 247, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" "}Get paid when service is completed.
                </motion.span>
              </motion.p>
            </div>

            {/* Unified Layout: How It Works + Video */}
            <div className="max-w-7xl mx-auto">
              {/* Two Column Layout: Cards Left, Video Right */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Workflow Cards Stacked Vertically */}
                <div className="space-y-8 flex flex-col">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    
                    return (
                      <div
                        key={index}
                        className="relative group transition-all duration-500 transform hover:scale-105"
                      >
                        {/* Step Card */}
                        <div className={`relative p-4 rounded-2xl border-2 transition-all duration-500 bg-gradient-to-r ${step.bgColor} border-transparent shadow-xl`}>
                          
                          <div className="flex items-start space-x-4 mb-4">
                            {/* Step Number & Icon */}
                            <div className="flex-shrink-0">
                              <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                                <Icon className="w-6 h-6" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-white text-gray-900 shadow-lg">
                                  {step.number}
                                </div>
                              </div>
                            </div>
                            
                            {/* Title */}
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Example with typing animation */}
                          <div className="mt-4">
                            <div className="bg-white/70 rounded-lg p-3 w-full shadow-md">
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  {index === 0 && (
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                                      U
                                    </div>
                                  )}
                                  {index === 1 && (
                                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                                      <Brain className="w-4 h-4" />
                                    </div>
                                  )}
                                  {index === 2 && (
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                                      💰
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm text-gray-800 font-medium leading-relaxed min-h-[60px] flex items-center">
                                    {currentMessages[index] || (
                                      <span className="text-gray-400 italic text-xs">
                                        {index === 0 && "Customer message will appear here..."}
                                        {index === 1 && "AI processing will appear here..."}
                                        {index === 2 && "Payment notification will appear here..."}
                                      </span>
                                    )}
                                    {isTyping[index] && (
                                      <motion.span
                                        className="ml-1 inline-block w-0.5 h-4 bg-gray-600"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Scenario Indicators */}
                  <div className="flex flex-wrap justify-center mt-8 gap-2">
                    {serviceScenarios.map((scenario, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScenarioIndex(index)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          currentScenarioIndex === index 
                            ? 'bg-blue-600 text-white shadow-lg scale-105' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {scenario.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Large Video & CTA */}
                <div className="space-y-8 flex flex-col">
                  {/* Interactive Demo Video */}
                  <div className="relative group">
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                      {/* Animated Border */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl opacity-40 animate-pulse"></div>
                      
                      {/* Video Container - Much Larger Now */}
                      <div className="aspect-video relative bg-black rounded-2xl overflow-hidden w-full">
                        <iframe
                          className="w-full h-full transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                          src="https://www.youtube.com/embed/xNUx-rMGvvw?si=RolP6JVky7y1WR63&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=xNUx-rMGvvw&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&start=0&end=0&version=3&enablejsapi=0&origin=https://www.localserv.ai"
                          title="Local Serv Demo"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen={false}
                          onLoad={() => setIsVideoPlaying(true)}
                          style={{ pointerEvents: 'none' }}
                        ></iframe>
                        
                        {/* Invisible overlay to prevent any interaction */}
                        <div className="absolute inset-0 bg-transparent pointer-events-none z-10"></div>
                      </div>
                    </div>
                    
                    {/* Video Description */}
                    <div className="mt-6 text-center">
                      <p className="text-base text-gray-600 font-medium mb-2">
                        Watch Local Serv connect customers with professionals in &nbsp;
                        <span className="text-gradient-smooth font-bold">real-time</span>
                      </p>
                      <div className="text-xs text-gray-500">
                        <span>Verified local businesses Los Angeles, AI negotiates service booking, instant local offers</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="text-center space-y-6">
                    <div className="relative inline-block group">
                      {/* Button Glow Effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
                      
                      <Button 
                        onClick={scrollToWaitlist}
                        className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500"
                        size="lg"
                      >
                        <span className="flex items-center">
                          <MessageSquare className="mr-2 w-5 h-5" />
                          Start Your Journey
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </span>
                      </Button>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className="space-y-4">
                      <p className="text-gray-500 text-base font-medium">
                        Join the future of service connections
                      </p>
                      
                      <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-2">
                          <span>Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Customers Earn, Businesses Save Section */}
        <CustomersEarnBusinessesSave />
        
        {/* Enhanced Customer Benefits Section */}
        <WhyCustomersLoveUs />
        
        {/* Enhanced Business Benefits Section */}
        <WhyBusinessesLoveUs />

        {/* Blog Slider Section */}
        <BlogSlider />

        {/* Join Waitlist Section */}
        <section id="join-waitlist" className="relative py-16 md:py-24">
          {/* Animated background with gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50 border border-blue-100/30" />
          
          {/* Floating animated background elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-200/50 to-blue-200/50 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="absolute bottom-32 right-1/3 w-18 h-18 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-full blur-xl"
          />
          
          {/* Pulse rings */}
          <motion.div
            variants={pulseVariants}
            animate="animate"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-200/40 rounded-full"
          />
          <motion.div
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-200/40 rounded-full"
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
                className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4"
              >
                Be the First to Know!
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
              >
                Local Serv is launching soon! Join our waitlist to get early access, exclusive updates, and be among the first to experience the future of local service connections.
              </motion.p>
              
              {/* Animated highlight elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-2 mt-6"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
                <span className="text-sm font-medium text-slate-500">Limited Early Access</span>
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.4)",
                      "0 0 0 10px rgba(168, 85, 247, 0)",
                      "0 0 0 0 rgba(168, 85, 247, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-3 h-3 bg-purple-500 rounded-full"
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

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Coins, Star, Users, ChevronLeft, ChevronRight, CheckCircle, MessageSquare, Search, ArrowRight, MapPin, MessagesSquare, Brain, ShieldCheck, Settings2, DollarSign, UserCheck, HeartHandshake, SearchSlash, HandCoins, MessageSquareText, FileText, ThumbsUp, FilterX, Annoyed, ArrowBigDownDash, Bot, Award, Shield, Play } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { StickyHeader } from "components/StickyHeader";
import { Footer } from "components/Footer";
import { WaitlistForm } from "components/WaitlistForm";
import BlogSlider from "components/BlogSlider";
import HowItWorksAnimated from 'components/HowItWorksAnimated';
import { CustomersEarnBusinessesSave } from 'components/CustomersEarnBusinessesSave';
import WhyCustomersLoveUs from 'components/WhyCustomersLoveUs';
import WhyBusinessesLoveUs from 'components/WhyBusinessesLoveUs';

export default function Home2() {
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <StickyHeader />
      <main className="flex-1">
        {/* How It Works Section - Now First */}
        <HowItWorksAnimated />
        
        {/* Simplified Lightweight Hero Section - Now Second */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
          {/* Lightweight Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Simple static gradient shapes */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 rounded-full filter blur-3xl"></div>
            
            {/* Simplified floating elements - repositioned for optimal coverage around video */}
            {/* Top-left area */}
            <div className="absolute top-16 left-4 md:top-20 md:left-8 lg:top-24 lg:left-12 animate-float animation-delay-1000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Finding mobile auto detailers in Los Angeles…</span>
                </div>
              </div>
            </div>
            
            {/* Left-middle area */}
            <div className="absolute top-1/2 left-2 md:left-4 lg:left-6 -translate-y-1/2 animate-float animation-delay-5000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">HVAC repair technicians nearby…</span>
                </div>
              </div>
            </div>
            
            {/* Bottom-left area */}
            <div className="absolute bottom-16 left-4 md:bottom-20 md:left-8 lg:bottom-24 lg:left-12 animate-float animation-delay-7000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Interior cleaning experts found…</span>
                </div>
              </div>
            </div>
            
            {/* Bottom-center area */}
            <div className="absolute bottom-20 left-2/3 md:bottom-24 md:left-3/4 lg:bottom-28 lg:left-3/4 animate-float animation-delay-6000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Plumbing service available now…</span>
                </div>
              </div>
            </div>
            
            {/* Top-right area */}
            <div className="absolute top-16 right-4 md:top-20 md:right-8 lg:top-24 lg:right-12 animate-float animation-delay-3000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">3 verified pros available</span>
                </div>
              </div>
            </div>
            
            {/* Right-middle area */}
            <div className="absolute top-1/2 right-2 md:right-4 lg:right-8 -translate-y-1/2 animate-float animation-delay-4000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">✅ Match found!</span>
                </div>
              </div>
            </div>
            
            {/* Bottom-right area */}
            <div className="absolute bottom-32 right-4 md:bottom-36 md:right-8 lg:bottom-40 lg:right-12 animate-float animation-delay-2000">
              <div className="bg-white/80 backdrop-blur-smooth rounded-xl p-3 shadow-lg border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">4.9 rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-16">
              {/* Simplified Animated Title */}
              <div className="space-y-8">
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                    {/* First line */}
                    <div className="mb-4">
                      <span className="inline-block text-gray-900 animate-fade-in-up animation-delay-100">Your Perfect</span>{' '}
                      <span className="inline-block text-gray-900 animate-fade-in-up animation-delay-200">Service</span>{' '}
                      <span className="inline-block text-gray-900 animate-fade-in-up animation-delay-300">Provider</span>
                    </div>
                    
                    {/* Second line with simple gradient */}
                    <div className="relative">
                      <span className="text-gradient-smooth animate-fade-in-up animation-delay-500">
                        Just One Chat Away
                      </span>
                    </div>
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 font-medium">
                  <span className="text-gray-600">
                    AI-powered conversations that connect you instantly with verified Los Angeles professionals — from auto detailing to home services.
                  </span>
                </p>
              </div>

              {/* Clean YouTube Video Section */}
              <div className="relative max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
                <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                  {/* Simple subtle border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-30"></div>
                  
                  {/* YouTube Video Embed */}
                  <div className="aspect-video relative bg-black rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full pointer-events-none"
                      src="https://www.youtube.com/embed/xNUx-rMGvvw?si=RolP6JVky7y1WR63&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=xNUx-rMGvvw&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&start=0&end=0&version=3&enablejsapi=0&origin=https://www.localserv.ai"
                      title="Local Serv Demo"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen={false}
                      style={{ pointerEvents: 'none' }}
                    ></iframe>
                    
                    {/* Invisible overlay to prevent any interaction */}
                    <div className="absolute inset-0 bg-transparent pointer-events-none z-10"></div>
                  </div>
                </div>
                
                {/* Clean video description */}
                <div className="mt-6 animate-fade-in-up animation-delay-1000">
                  <p className="text-gray-600 text-sm leading-relaxed">Verified local businesses Los Angeles, AI negotiates service booking, instant local offers</p>
                </div>
              </div>

              {/* Clean Call to Action */}
              <div className="space-y-6 animate-fade-in-up animation-delay-1200">
                <div className="relative inline-block group">
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                  
                  <Button 
                    onClick={scrollToWaitlist}
                    className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 px-12 md:py-8 md:px-16 rounded-full text-xl md:text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <span className="flex items-center">
                      Join the Waitlist
                      <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-500 text-lg font-medium">
                    Be among the first to try the{' '}
                    <span className="text-gradient-smooth font-bold">
                      future of AI-powered local booking in Los Angeles
                    </span>
                  </p>
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
        <section id="join-waitlist" className="relative py-16 md:py-24 overflow-hidden">
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

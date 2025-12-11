import React, { useState, useEffect } from 'react';
import { StickyHeader } from 'components/StickyHeader';
import { Footer } from 'components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/router';
import { 
  Target, 
  Eye, 
  Heart, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  Shield, 
  Star, 
  Users, 
  Clock, 
  Award,
  TrendingUp,
  UserCheck,
  ArrowRight,
  ChevronRight,
  Zap,
  ThumbsUp,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Brain
} from 'lucide-react';
import { WaitlistForm } from "components/WaitlistForm";

export default function About() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredComparison, setHoveredComparison] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const [numbersAnimated, setNumbersAnimated] = useState(false);

  // Function to scroll to waitlist section
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('about-waitlist-form');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to navigate to contact page
  const goToContact = () => {
    router.push('/contact');
  };

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animate numbers when achievements section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !numbersAnimated) {
            setNumbersAnimated(true);
            // Animate to final values
            const finalValues = [10000, 500, 50, 99];
            const duration = 2000;
            const steps = 60;
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const easeOut = 1 - Math.pow(1 - progress, 3);
              
              setAnimatedNumbers(finalValues.map(value => 
                Math.floor(value * easeOut)
              ));
              
              if (currentStep >= steps) {
                clearInterval(timer);
                setAnimatedNumbers(finalValues);
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    const achievementsSection = document.getElementById('achievements-section');
    if (achievementsSection) {
      observer.observe(achievementsSection);
    }

    return () => observer.disconnect();
  }, [numbersAnimated]);

  const trustFactors = [
    {
      title: "Verified Professionals",
      localServ: "Every provider is AI-screened and verified in Los Angeles.",
      others: "Listings with little or no verification.",
      advantage: "AI-powered screening process ensures only verified Los Angeles providers with background checks and proper licensing"
    },
    {
      title: "Transparent Pricing",
      localServ: "Clear, upfront pricing and terms before you book.",
      others: "Hidden fees and unclear service costs.",
      advantage: "No surprises - see exactly what you'll pay with transparent pricing before booking any service"
    },
    {
      title: "Financial Benefits",
      localServ: "Businesses save on marketing costs, customers get competitive rates through direct connections.",
      others: "High platform fees and inflated pricing passed to customers.",
      advantage: "Direct connections that save businesses money on marketing while offering customers better rates and faster service"
    },
    {
      title: "Local Focus",
      localServ: "Designed for Los Angeles customers and providers with instant AI matching.",
      others: "Broad, unfocused directories with no local specialization.",
      advantage: "Hyper-local Los Angeles focus with instant AI matching designed specifically for local customers and providers"
    }
  ];

  const achievements = [
    { number: animatedNumbers[0], displayNumber: "Thousands", label: "Happy Customers", icon: <Users className="w-5 h-5" /> },
    { number: animatedNumbers[1], displayNumber: "Many", label: "Service Providers", icon: <UserCheck className="w-5 h-5" /> },
    { number: animatedNumbers[2], displayNumber: "50+", label: "Service Categories", icon: <Award className="w-5 h-5" /> },
    { number: animatedNumbers[3], displayNumber: "High", label: "Satisfaction Rate", icon: <ThumbsUp className="w-5 h-5" /> }
  ];

  // Core values for the new section
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear pricing and honest communication that saves businesses and customers from hidden costs.",
      color: "bg-red-500",
      delay: "0ms"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Impact",
      description: "Always focused on positively impacting the bottom line of local businesses and the customers receiving services.",
      color: "bg-blue-500",
      delay: "100ms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Making the experience smooth and time efficient for both service providers and customers.",
      color: "bg-green-500",
      delay: "200ms"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "Leveraging AI and technology to create seamless service experiences.",
      color: "bg-purple-500",
      delay: "300ms"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <StickyHeader />
      <main className="pt-14">
        {/* Hero Section with Unique Design and Minimal Text */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-lg rotate-45 animate-spin-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-primary/30 transform rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
            
            {/* Large background circles */}
            <div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
              style={{ transform: `translateY(${scrollY * 0.1}px)`, animationDuration: '4s' }}
            ></div>
            <div 
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
              style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '2s', animationDuration: '5s' }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Split Layout: Left - Content, Right - Interactive Visual */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Minimal Content */}
                <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="space-y-6">
                    <div className="relative inline-block animate-float" style={{ animationDuration: '3s' }}>
                      <Badge className="relative bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 px-4 py-2 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl">
                        <Zap className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '2s' }} />
                        <span className="animate-pulse font-semibold">AI-Powered Matching</span>
                      </Badge>
                      {/* Floating glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-primary/20 rounded-full blur-md animate-pulse" style={{ animationDuration: '2s' }}></div>
                      {/* Orbiting dots */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      <span className="block animate-fade-in-up">Smart.</span>
                      <span className="block text-primary animate-gradient-text bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent bg-300% animate-gradient" style={{ animationDelay: '0.2s' }}>Local.</span>
                      <span className="block text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Connected.</span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                      Local Serv's AI-powered service booking platform connects you instantly with verified local providers.
                    </p>
                    
                    <p className="text-lg text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                      Built for faster matches, verified professionals, and secure bookings — so every request turns into real service.
                    </p>
                  </div>
                  
                  {/* Animated Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
                      onClick={scrollToWaitlist}
                    >
                      <Search className="w-5 h-5 mr-2 group-hover:animate-spin" />
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 group"
                      onClick={goToContact}
                    >
                      <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Learn More
                    </Button>
                  </div>
                </div>
                
                {/* Right: Interactive Visual Element */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.3s' }}>
                  <div className="relative w-full h-96 lg:h-[500px]">
                    
                    {/* Central Hub Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-2xl animate-pulse flex items-center justify-center">
                      <Zap className="w-12 h-12 text-white animate-bounce" />
                    </div>
                    
                    {/* Orbiting Service Icons */}
                    {[
                      { icon: <Search className="w-8 h-8" />, color: 'from-green-400 to-green-600', delay: '0s', radius: '120px', label: 'Find' },
                      { icon: <MessageSquare className="w-8 h-8" />, color: 'from-blue-400 to-blue-600', delay: '1s', radius: '140px', label: 'Connect' },
                      { icon: <CheckCircle className="w-8 h-8" />, color: 'from-purple-400 to-purple-600', delay: '2s', radius: '130px', label: 'Book' },
                      { icon: <Star className="w-8 h-8" />, color: 'from-yellow-400 to-yellow-600', delay: '3s', radius: '150px', label: 'Review' },
                      { icon: <Users className="w-8 h-8" />, color: 'from-pink-400 to-pink-600', delay: '4s', radius: '135px', label: 'Community' },
                      { icon: <Shield className="w-8 h-8" />, color: 'from-indigo-400 to-indigo-600', delay: '5s', radius: '125px', label: 'Trust' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                        style={{ 
                          animationDelay: item.delay,
                          animationDuration: '12s',
                          width: item.radius,
                          height: item.radius
                        }}
                      >
                        <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full shadow-lg flex items-center justify-center text-white hover:scale-125 transition-transform duration-300 cursor-pointer group`}>
                          {item.icon}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Connecting Lines Animation */}
                    <div className="absolute inset-0 animate-pulse">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 bg-gradient-to-t from-transparent via-primary/30 to-transparent"
                          style={{
                            height: `${80 + (i * 10)}px`,
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                            animationDelay: `${i * 0.2}s`,
                            transformOrigin: 'center'
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                      <div className="text-2xl font-bold text-primary">Customers search</div>
                    </div>
                    
                    <div className="absolute top-16 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '2s', animationDuration: '4s' }}>
                      <div className="text-2xl font-bold text-purple-600">Businesses offer</div>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }}>
                      <div className="text-2xl font-bold text-green-600">LocalServ matches</div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Bottom: Quick Feature Highlights */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                {[
                  { icon: <Brain className="w-6 h-6" />, title: 'Conversation-Driven Experience', desc: 'Simply explain your need to LocalServ AI and watch it have a conversation with each business\' AI on your behalf.' },
                  { icon: <Eye className="w-6 h-6" />, title: 'Transparent Negotiations', desc: 'Watch the entire negotiation happen between each party to ensure fair and ideal pricing and service offerings.' },
                  { icon: <CheckCircle className="w-6 h-6" />, title: 'End-To-End Automation', desc: 'LocalServ’s AI can handle the entire process of booking your appointment, tell it what you need and walk away.' }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Why Section - Now Second Section */}
        <section id="our-why-section" className="py-20 bg-gradient-to-r from-primary/5 to-purple-600/5 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block animate-bounce" style={{ animationDuration: '3s' }}>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 px-6 py-2 text-lg mb-6 border-2 border-primary/20">
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  Our Purpose
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Our Why
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The driving force behind everything we do at Local Serv
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: The Problem We Saw */}
                <div className="space-y-8">
                  <Card className="group hover:shadow-2xl transition-all duration-700 border-2 hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Search className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary transition-colors duration-300">
                        The Problem We Saw
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        Too many people waste hours searching, calling, or waiting for local services. Finding quality providers was often slow, unreliable, and stressful. Meanwhile, small businesses struggled with expensive marketing that brought unqualified leads and platform fees that ate into their profits. We knew AI could change that.
                      </p>
                      
                      {/* Shine effect */}
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-2xl transition-all duration-700 border-2 hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-600 transition-colors duration-300">
                        Why We Do This
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        We believe access to trusted local services should be simple and instant. With AI-powered booking, customers save time and small businesses thrive without expensive ads or platform fees. Local Serv connects them directly with real customers who need their services — saving both time and money while building stronger communities.
                      </p>
                      
                      {/* Shine effect */}
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Right: Our Purpose */}
                <div>
                  <Card className="group hover:shadow-2xl transition-all duration-700 border-2 hover:border-primary/30 cursor-pointer h-full">
                    <CardContent className="p-12 text-center relative overflow-hidden h-full flex flex-col justify-center">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary rounded-full animate-spin-slow"></div>
                        <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
                        <div className="absolute top-1/2 left-8 w-8 h-8 bg-purple-500 transform rotate-45 animate-pulse" style={{ animationDuration: '3s' }}></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl">
                          <Heart className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-500">Why We Do This</h3>
                        <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                          Because we believe that finding the right help shouldn't be a struggle — for customers or small businesses.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          We're driven by the vision of communities where small businesses can succeed without breaking the bank on marketing, where trust flows freely, and where quality service is the norm. Every feature we build helps local businesses connect with genuine customers while saving them from expensive ads and commission fees that hurt their bottom line.
                        </p>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <p className="text-primary font-semibold text-lg">
                            "Empowering small businesses, one connection at a time."
                          </p>
                        </div>
                      </div>
                      
                      {/* Enhanced shine effect */}
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-1500 transform skew-x-12"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Our Values Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0">
            {/* Floating orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-lg animate-float" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-primary/20 rounded-full blur-md animate-float" style={{ animationDelay: '6s', animationDuration: '10s' }}></div>
            
            {/* Geometric shapes */}
            <div className="absolute top-32 left-1/3 w-8 h-8 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-purple-500/30 transform rotate-12 animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Enhanced header */}
            <div className="text-center mb-20">
              <div className="inline-block animate-bounce" style={{ animationDuration: '3s' }}>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 px-6 py-2 text-lg mb-6 border-2 border-primary/20">
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  What Drives Us
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Mission & Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto animate-pulse"></div>
            </div>
            
            {/* Mission Section */}
            <div className="max-w-5xl mx-auto mb-20">
              <Card className="group hover:shadow-2xl transition-all duration-1000 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 relative overflow-hidden">
                <CardContent className="p-16 text-center relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-1/2 left-8 w-8 h-8 bg-purple-500 transform rotate-45 animate-pulse" style={{ animationDuration: '3s' }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl animate-pulse" style={{ animationDuration: '4s' }}>
                      <Target className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-500">Our Mission</h3>
                    <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                      To revolutionize how people connect with local service providers through an AI-powered platform that saves small businesses from expensive marketing costs while helping customers find quality services instantly.
                    </p>           
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-primary font-semibold text-lg">
                        "Saving small businesses money, saving people time"
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-1500 transform skew-x-12"></div>
                </CardContent>
              </Card>
            </div>
            
            {/* Core Values Subsection */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                  Our Core Values
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  The principles that guide our decisions and shape our culture
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => (
                  <Card 
                    key={index} 
                    className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-2 hover:border-primary/30 cursor-pointer transform hover:rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                    style={{ transitionDelay: value.delay }}
                  >
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className={`w-14 h-14 ${value.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce`} style={{ animationDuration: '3s', animationDelay: value.delay }}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed relative z-10 text-sm">{value.descriptionc}</p>
                      
                      {/* Subtle shine effect */}
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section with Enhanced Hover Effects */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                Why People Trust Local Serv
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                See how Local Serv's AI-powered service booking platform in Los Angeles builds trust through transparency, quality, and local focus — compared to other platforms.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {trustFactors.map((factor, index) => (
                  <Card 
                    key={index} 
                    className={`group transition-all duration-700 hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${
                      hoveredComparison === index ? 'border-primary shadow-xl scale-105 bg-gradient-to-r from-primary/5 to-purple-600/5' : 'border-gray-200 hover:border-primary/30'
                    }`}
                    onMouseEnter={() => setHoveredComparison(index)}
                    onMouseLeave={() => setHoveredComparison(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      <div className="grid md:grid-cols-3 gap-6 items-center relative z-10">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{factor.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <img src="https://www.localserv.ai/logo-small.png" alt="Local Serv Logo" className="w-5 h-5" />
                            <span className="font-semibold text-gray-800">Local Serv</span>
                          </div>
                          <p className="text-sm text-gray-600">{factor.localServ}</p>
                        </div>
                        <div className="hidden md:block">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span className="font-semibold text-gray-500">Other Platforms</span>
                          </div>
                          <p className="text-sm text-gray-500">{factor.others}</p>
                        </div>
                        {/* Advantage shown on hover */}
                        <div
                          className={`md:col-span-3 transition-all duration-500 ease-in-out ${
                            hoveredComparison === index ? 'max-h-40 opacity-100 pt-4 mt-4 border-t' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white mt-1">
                              <Star className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-primary mb-1">Our Advantage</h4>
                              <p className="text-sm text-gray-700">{factor.advantage}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Enhanced Animations */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-500/10 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-pink-500/20 transform rotate-12 animate-pulse" style={{ animationDuration: '3s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                Meet Our Founder
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The vision behind Local Serv is to transform how people in Los Angeles connect with verified local service providers through AI-powered booking.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/10 to-purple-600/10 overflow-hidden">
                      <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                        <img 
                          src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/image.png" 
                          alt="Isaiah Barhoum - Founder & CEO of Local Serv" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Animated background shapes */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white transition-colors duration-300">
                          <h3 className="font-bold text-gray-900">Isaiah Barhoum</h3>
                          <p className="text-sm text-gray-600">Founder & CEO</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-12 relative">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Transforming Local Service Connections</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            With a background in technology and local business development, our founder saw how difficult it was for customers to find trusted providers and for businesses to grow without heavy ad spend.
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            Local Serv was created to solve that — combining AI, transparency, and secure booking to make every service interaction simple and reliable.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Expertise Highlights</h4>
                          <ul className="space-y-2 text-gray-600">
                            {[
                              "Technology & AI innovation",
                              "Local business development", 
                              "Customer experience optimization",
                              "Service marketplace strategy"
                            ].map((item, index) => (
                              <li key={index} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div id="about-waitlist-form" className="py-20">
            <WaitlistForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

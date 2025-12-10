


import React, { useState, useEffect } from 'react';
import { MessageSquare, Search, CheckCircle, ArrowRight, Sparkles, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Props {}

interface Step {
  id: number;
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  examples: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Chat with AI",
    description: "Tell our AI what you need — like 'mobile auto detailing in Echo Park tomorrow.' Our AI finds the best local pros instantly.",
    detail: "AI service booking Los Angeles, mobile auto detailing LA, instant service request",
    icon: <MessageSquare className="w-10 h-10" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    examples: [
      "I need mobile auto detailing in Echo Park tomorrow",
      "Looking for house cleaning service",
      "Need lawn care services"
    ]
  },
  {
    id: 2,
    title: "AI vets, negotiates, and books",
    description: "Our AI vets hundreds of verified LA professionals, negotiates pricing, and books instantly. Compare transparent offers side-by-side.",
    detail: "Verified local businesses Los Angeles, AI negotiates service booking, instant local offers",
    icon: <Search className="w-10 h-10" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    examples: [
      "Vetting 500+ verified professionals",
      "Negotiating best prices for you",
      "Securing your preferred time slot"
    ]
  },
  {
    id: 3,
    title: "You get paid when service is completed",
    description: "Enjoy stress-free service AND receive advertising incentive payout from the business. Money held safely in escrow until job completion.",
    detail: "Get paid for booking services, incentive escrow payout, AI marketplace LA",
    icon: <CheckCircle className="w-10 h-10" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    examples: [
      "Service completed successfully",
      "Payment automatically processed",
      "Earnings deposited to your account"
    ]
  }
];

export default function HowItWorksAnimated({}: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [currentExampleIndex, setCurrentExampleIndex] = useState([0, 0, 0]);

  // Auto-cycle through steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Cycle through examples for each step
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExampleIndex(prev => 
        prev.map((index, stepIndex) => 
          (index + 1) % steps[stepIndex].examples.length
        )
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="relative bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-200/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-200/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 mb-6">
            How Local Serv Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Get connected instantly with verified Los Angeles service providers — AI booking in just 3 steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Animated Connecting Path */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <svg 
              className="w-full h-24" 
              viewBox="0 0 800 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M50 50 Q 400 20 750 50" 
                stroke="url(#gradient)" 
                strokeWidth="3" 
                strokeDasharray="10,5"
                fill="none"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              
              {/* Animated dots along the path */}
              <circle r="4" fill="#3B82F6" className="animate-ping">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#path" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isHovered = hoveredStep === index;
              const shouldAnimate = isActive || isHovered;

              return (
                <div
                  key={step.id}
                  className={`relative group cursor-pointer transition-all duration-700 transform ${
                    shouldAnimate ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Card */}
                  <div className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 h-full ${
                    shouldAnimate 
                      ? `border-${step.color.split('-')[1]}-300 shadow-2xl ${step.bgColor}/10` 
                      : 'border-slate-200 shadow-md'
                  }`}>
                    
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transition-all duration-500 ${
                      shouldAnimate ? 'scale-110 animate-bounce' : 'scale-100'
                    }`} 
                    style={{ 
                      background: shouldAnimate 
                        ? `linear-gradient(135deg, ${step.color.includes('blue') ? '#3B82F6' : step.color.includes('green') ? '#10B981' : '#8B5CF6'}, ${step.color.includes('blue') ? '#1E40AF' : step.color.includes('green') ? '#059669' : '#7C3AED'})` 
                        : '#64748B'
                    }}>
                      {step.id}
                    </div>

                    {/* Floating Elements */}
                    {shouldAnimate && (
                      <>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
                        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                      </>
                    )}

                    {/* Icon Container */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mt-4 transition-all duration-500 ${
                      shouldAnimate ? `${step.bgColor} scale-110` : 'bg-slate-100'
                    }`}>
                      <div className={`transition-all duration-500 ${
                        shouldAnimate ? step.color : 'text-slate-500'
                      }`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                      shouldAnimate ? step.color : 'text-slate-800'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Example Message Box */}
                    <div className={`relative p-4 rounded-xl transition-all duration-500 ${
                      shouldAnimate ? step.bgColor : 'bg-slate-50'
                    }`}>
                      <div className="text-sm font-medium text-slate-700 mb-1">
                        Example:
                      </div>
                      <div className={`text-sm transition-all duration-300 ${
                        shouldAnimate ? step.color : 'text-slate-600'
                      }`}>
                        "{step.examples[currentExampleIndex[index]]}"
                      </div>
                      
                      {/* Typing Indicator */}
                      {shouldAnimate && (
                        <div className="flex items-center mt-2 space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      )}
                    </div>

                    {/* Hover Detail */}
                    <div className={`mt-4 text-sm text-slate-500 transition-all duration-500 transform ${
                      shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {step.detail}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          shouldAnimate ? `bg-gradient-to-r ${step.color.includes('blue') ? 'from-blue-500 to-blue-600' : step.color.includes('green') ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'}` : 'bg-gray-300'
                        }`}
                        style={{ 
                          width: shouldAnimate ? '100%' : '30%'
                        }}
                      />
                    </div>
                  </div>

                  {/* Arrow for large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'scale-110 animate-pulse' : 'scale-100'
                      }`}>
                        <ArrowRight className={`w-6 h-6 transition-all duration-500 ${
                          isActive ? step.color : 'text-slate-400'
                        }`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center mt-12 space-x-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center text-center mt-16 md:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 mb-8">

            <div className="flex items-center space-x-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Average booking: 2 minutes</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="rounded-full px-10 py-7 text-lg md:text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              👉 Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

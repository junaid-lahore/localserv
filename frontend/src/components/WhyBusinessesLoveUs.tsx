



import React, { useState, useEffect } from 'react';
import { FileText, ThumbsUp, FilterX, UserCheck, TrendingUp, Shield, Award, Zap, Users, CheckCircle, ArrowRight, DollarSign, BarChart3, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Props {}

interface BusinessBenefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  gradient: string;
  stat: string;
  statLabel: string;
}

const benefits: BusinessBenefit[] = [
  {
    id: 1,
    icon: <FileText className="w-8 h-8" />,
    title: "AI Sales Rep 24/7",
    subtitle: "Never miss a lead",
    description: "Your AI sales rep for businesses responds instantly and books jobs even outside business hours.",
    features: [
      "AI sales rep responds instantly",
      "Books jobs outside business hours",
      "Never miss a potential customer",
      "24/7 automated lead capture"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500 to-blue-600",
    stat: "24/7",
    statLabel: "AI availability"
  },
  {
    id: 2,
    icon: <UserCheck className="w-8 h-8" />,
    title: "Smarter Matching",
    subtitle: "Qualified leads that fit",
    description: "Get qualified service leads Los Angeles that match your business rules, schedule, and service area.",
    features: [
      "Qualified Los Angeles service leads",
      "Match your business rules",
      "Fits your schedule perfectly",
      "Targeted to your service area"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    gradient: "from-green-500 to-green-600",
    stat: "AI-Powered",
    statLabel: "smart matching"
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Pay Only for Results",
    subtitle: "No wasted ad spend",
    description: "With our pay-per-booking model, you only pay when a customer completes a booking.",
    features: [
      "Pay-per-booking model only",
      "No wasted advertising spend",
      "Pay when customer books",
      "Guaranteed return on investment"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-purple-600",
    stat: "100%",
    statLabel: "performance-based"
  },
  {
    id: 4,
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    subtitle: "Peace of mind with every booking",
    description: "Local Serv ensures your payments and personal data are always protected. Escrow safeguards incentives until the job is completed.",
    features: [
      "Encrypted payment and data handling",
      "Incentives held in secure escrow",
      "Release only after job completion",
      "Built-in dispute resolution"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    gradient: "from-orange-500 to-orange-600",
    stat: "100%",
    statLabel: "secure transactions"
  }
];

export default function WhyBusinessesLoveUs({}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycle through benefits every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % benefits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="for-businesses" className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-blue-50 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-slate-700 font-medium">Business Benefits</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 mb-6">
            Why Businesses <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Love</span> Local Serv
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Transform how you find and connect with customers. Stop wasting money on uncertain leads and start building relationships with qualified prospects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {benefits.map((benefit, index) => {
            const isActive = activeCard === index;
            const isHovered = hoveredCard === index;
            const shouldHighlight = isActive || isHovered;

            return (
              <div
                key={benefit.id}
                className={`group relative bg-white rounded-3xl p-8 border-2 transition-all duration-700 cursor-pointer transform ${
                  shouldHighlight 
                    ? `border-${benefit.color.split('-')[1]}-200 shadow-2xl scale-105 -translate-y-3` 
                    : 'border-slate-200 shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(index)}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: isVisible ? (shouldHighlight ? 'scale(1.05) translateY(-12px)' : 'scale(1)') : 'translateY(20px)'
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                  shouldHighlight ? 'opacity-5' : ''
                } bg-gradient-to-br ${benefit.gradient}`} />

                {/* Floating Badge */}
                {shouldHighlight && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className={`bg-gradient-to-r ${benefit.gradient} text-white border-0 animate-bounce`}>
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      shouldHighlight ? `${benefit.bgColor} scale-110` : 'bg-slate-100'
                    }`}>
                      <div className={`transition-all duration-500 ${
                        shouldHighlight ? benefit.color : 'text-slate-500'
                      }`}>
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-bold transition-all duration-500 ${
                        shouldHighlight ? benefit.color : 'text-slate-600'
                      }`}>
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-slate-500 leading-tight">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-all duration-500 ${
                      shouldHighlight ? benefit.color : 'text-slate-800'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 transition-all duration-500 ${
                      shouldHighlight ? benefit.color : 'text-slate-500'
                    }`}>
                      {benefit.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center space-x-3 transition-all duration-300 ${
                          shouldHighlight ? 'transform translate-x-2' : ''
                        }`}
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                          shouldHighlight ? `bg-gradient-to-r ${benefit.gradient}` : 'bg-slate-200'
                        }`}>
                          <CheckCircle className={`w-3 h-3 transition-all duration-500 ${
                            shouldHighlight ? 'text-white' : 'text-slate-500'
                          }`} />
                        </div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        shouldHighlight ? `bg-gradient-to-r ${benefit.gradient}` : 'bg-gray-300'
                      }`}
                      style={{ 
                        width: shouldHighlight ? '100%' : '20%'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <div className={`bg-white rounded-3xl p-8 shadow-lg border border-slate-200 mb-12 transition-all duration-1000 delay-600 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Join Successful Businesses</h3>
            <p className="text-slate-600">See why service providers are making the switch</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-blue-600 mb-2">Beta</div>
              <div className="text-sm text-slate-600">Early Business Users</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-600 mb-2">AI-Driven</div>
              <div className="text-sm text-slate-600">Local Business Growth</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-purple-600 mb-2">Pay-Per</div>
              <div className="text-sm text-slate-600">Booking Model</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-orange-600 mb-2">Seamless</div>
              <div className="text-sm text-slate-600">Software Integration</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6">
            <p className="text-lg text-slate-600 mb-4">
              Boost growth with AI-driven bookings and keep everything synced with your existing software systems.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
              <Award className="w-4 h-4" />
              <span>Trusted by early business adopters</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-full px-10 py-7 text-lg md:text-xl font-medium bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

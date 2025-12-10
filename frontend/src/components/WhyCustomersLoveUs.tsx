





import React, { useState, useEffect } from 'react';
import { Clock, Coins, Star, Users, TrendingUp, ShieldCheck, Zap, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Props {}

interface CustomerBenefit {
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

const benefits: CustomerBenefit[] = [
  {
    id: 1,
    icon: <Clock className="w-8 h-8" />,
    title: "Faster Bookings, Less Stress",
    subtitle: "Same-day appointments across LA in minutes",
    description: "No more endless calls. Find same-day service booking LA appointments in minutes through our streamlined AI-powered platform.",
    features: [
      "No more endless phone calls",
      "Same-day appointments available",
      "Find services across LA quickly",
      "Instant booking confirmation"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    gradient: "from-green-500 to-green-600",
    stat: "⏱",
    statLabel: "appointments in minutes"
  },
  {
    id: 2,
    icon: <Coins className="w-8 h-8" />,
    title: "Get Paid for Your Bookings",
    subtitle: "Earn money when businesses pay you directly",
    description: "Instead of businesses spending on Google Ads, they pay you directly when you book their services. Their AI talks with our AI to find the perfect match, then you get rewarded for the booking.",
    features: [
      "Earn money from service bookings",
      "Direct payment from businesses",
      "AI-powered perfect matching",
      "Replace traditional advertising costs"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-purple-600",
    stat: "💰",
    statLabel: "direct payments for bookings"
  }
];

export default function WhyCustomersLoveUs({}: Props) {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-cycle through benefits every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % benefits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="for-customers" className="relative py-16 md:py-24 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-slate-700 font-medium">Los Angeles Customer Benefits</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 mb-6">
            Why Customers <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Love</span> Local Serv
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience instant booking with verified local professionals for mobile auto detailing and hundreds of services across Los Angeles. Our AI technology makes finding trusted experts effortless.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {benefits.map((benefit, index) => {
            const isActive = activeCard === index;
            const isHovered = hoveredCard === index;
            const shouldHighlight = isActive || isHovered;

            return (
              <div
                key={benefit.id}
                className={`group relative bg-white rounded-3xl p-8 border-2 transition-all duration-700 cursor-pointer transform ${
                  shouldHighlight 
                    ? `border-${benefit.color.split('-')[1]}-200 shadow-2xl scale-105 -translate-y-2` 
                    : 'border-slate-200 shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(index)}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                  shouldHighlight ? 'opacity-5' : ''
                } bg-gradient-to-br ${benefit.gradient}`} />

                {/* Floating Badge */}
                {shouldHighlight && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className={`bg-gradient-to-r ${benefit.gradient} text-white border-0 animate-bounce`}>
                      Popular
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
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                      shouldHighlight ? benefit.color : 'text-slate-800'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 transition-all duration-500 ${
                      shouldHighlight ? benefit.color : 'text-slate-500'
                    }`}>
                      {benefit.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
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

        {/* Bottom Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Beta</div>
              <div className="text-sm text-slate-600">Trusted Early Users</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-green-600 mb-2">AI-Powered</div>
              <div className="text-sm text-slate-600">Smart Matching Technology</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-600 mb-2">Secure</div>
              <div className="text-sm text-slate-600">Private Platform</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Available Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-lg text-slate-600 mb-4">
              Experience stress-free booking with Local Serv.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
              <Users className="w-4 h-4" />
              <span>Growing community of LA users</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-full px-10 py-7 text-lg md:text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
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

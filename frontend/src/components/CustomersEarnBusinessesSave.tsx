import React, { useState, useEffect } from 'react';
import { SearchSlash, MessageSquareText, HandCoins, FilterX, Annoyed, FileText, ThumbsUp, ArrowBigDownDash, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {}

export function CustomersEarnBusinessesSave({}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<'customer' | 'business' | null>(null);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 relative overflow-hidden">
      {/* Background decorative elements - using brand colors */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LA Customers{' '}
            </span>
            <span className="text-primary">Earn{' '}</span>
            {/* Unique Animated Diamond Divider */}
            <span className="mx-4 md:mx-6 inline-flex items-center relative group">
              <div className="relative flex items-center">
                {/* Main diamond */}
                <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-500 to-purple-600 transform rotate-45 animate-spin" style={{animationDuration: '3s'}}></div>
                {/* Side diamonds */}
                <div className="absolute -left-3 md:-left-4 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-purple-500 to-blue-500 transform rotate-45 animate-pulse"></div>
                <div className="absolute -right-3 md:-right-4 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm animate-ping" style={{animationDuration: '2s'}}></div>
              </div>
            </span>
            <span className="text-secondary">Businesses{' '}</span>
            <span className="text-primary">Save</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            AI-powered service booking platform where LA customers earn money from service requests while local businesses get qualified local leads with instant booking
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* CUSTOMER SECTION */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            onMouseEnter={() => setActiveCard('customer')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
              activeCard === 'customer' ? 'ring-2 ring-primary/30' : ''
            }`}>
              {/* Gradient Border Effect - using brand colors */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl md:rounded-3xl opacity-20 blur-sm"></div>
              
              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Section Title */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-3 md:mb-4">
                    <HandCoins className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2">
                    For Customers
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">Get paid while booking verified local professionals</p>
                </div>
                
                {/* Comparison Flow */}
                <div className="space-y-4 md:space-y-6">
                  {/* Old Way */}
                  <div className={`relative transform transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}>
                    <div className="bg-red-50 border-2 border-red-100 rounded-xl md:rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-red-200/30 rounded-full blur-xl"></div>
                      <div className="relative">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                          <SearchSlash className="w-5 h-5 md:w-7 md:h-7 text-red-500" />
                          <span className="text-base md:text-lg font-bold text-red-700">The Old Way</span>
                        </div>
                        <p className="text-red-600 text-center font-medium text-sm">
                          Waste hours searching for mobile auto detailing LA, comparing prices, reading reviews, calling multiple providers...
                        </p>
                        <div className="flex justify-center mt-3 md:mt-4">
                          <div className="bg-red-100 px-3 md:px-4 py-1.5 rounded-full">
                            <span className="text-red-700 font-semibold text-xs">Time Lost + Money Spent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Animation - using brand colors */}
                  <div className={`flex justify-center transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}>
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-2 md:p-3 animate-pulse">
                      <ArrowBigDownDash className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* New Way - using brand colors */}
                  <div className={`relative transform transition-all duration-700 delay-900 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-xl md:rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                      <div className="relative">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                          <MessageSquareText className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                          <HandCoins className="w-5 h-5 md:w-7 md:h-7 text-secondary" />
                          <span className="text-base md:text-lg font-bold text-primary">The Local Serv Way</span>
                        </div>
                        <p className="text-primary text-center font-medium mb-3 md:mb-4 text-sm leading-relaxed">
                          <span className="font-bold">1.</span> Describe your service need once<br/>
                          <span className="font-bold">2.</span> AI vets, negotiates, and books<br/>
                          <span className="font-bold">3.</span> You get paid when service is completed
                        </p>
                        <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
                          <div className="bg-primary/10 px-2 md:px-3 py-1 rounded-full">
                            <span className="text-primary font-semibold text-xs">Time Saved</span>
                          </div>
                          <div className="bg-secondary/10 px-2 md:px-3 py-1 rounded-full">
                            <span className="text-secondary font-semibold text-xs">Money Earned</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* BUSINESS SECTION */}
          <div 
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            onMouseEnter={() => setActiveCard('business')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
              activeCard === 'business' ? 'ring-2 ring-secondary/30' : ''
            }`}>
              {/* Gradient Border Effect - using brand colors */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl md:rounded-3xl opacity-20 blur-sm"></div>
              
              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Section Title */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-secondary to-primary rounded-full mb-3 md:mb-4">
                    <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text mb-2">
                    For Businesses
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">Access qualified local leads without marketing waste</p>
                </div>
                
                {/* Comparison Flow */}
                <div className="space-y-4 md:space-y-6">
                  {/* Old Way */}
                  <div className={`relative transform transition-all duration-700 delay-600 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}>
                    <div className="bg-red-50 border-2 border-red-100 rounded-xl md:rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-red-200/30 rounded-full blur-xl"></div>
                      <div className="relative">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                          <FilterX className="w-5 h-5 md:w-7 md:h-7 text-red-500" />
                          <Annoyed className="w-5 h-5 md:w-7 md:h-7 text-red-500" />
                          <span className="text-base md:text-lg font-bold text-red-700">The Old Way</span>
                        </div>
                        <p className="text-red-600 text-center font-medium text-sm">
                          Pay Google Ads for clicks from unqualified leads, compete in bidding wars, waste budget on customers who never book
                        </p>
                        <div className="flex justify-center mt-3 md:mt-4">
                          <div className="bg-red-100 px-3 md:px-4 py-1.5 rounded-full">
                            <span className="text-red-700 font-semibold text-xs">High Cost + Low Quality</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Animation - using brand colors */}
                  <div className={`flex justify-center transform transition-all duration-1000 delay-800 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}>
                    <div className="bg-gradient-to-r from-secondary to-primary rounded-full p-2 md:p-3 animate-pulse">
                      <ArrowBigDownDash className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* New Way - using brand colors */}
                  <div className={`relative transform transition-all duration-700 delay-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <div className="bg-gradient-to-r from-secondary/5 to-primary/5 border-2 border-secondary/20 rounded-xl md:rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
                      <div className="relative">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                          <FileText className="w-5 h-5 md:w-7 md:h-7 text-secondary" />
                          <ThumbsUp className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                          <span className="text-base md:text-lg font-bold text-secondary">The Local Serv Way</span>
                        </div>
                        <p className="text-secondary text-center font-medium mb-3 md:mb-4 text-sm leading-relaxed">
                          <span className="font-bold">1.</span> Read detailed service requests<br/>
                          <span className="font-bold">2.</span> Pay only for qualified connections<br/>
                          <span className="font-bold">3.</span> No bidding wars or price competition
                        </p>
                        <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
                          <div className="bg-secondary/10 px-2 md:px-3 py-1 rounded-full">
                            <span className="text-secondary font-semibold text-xs">Quality Leads</span>
                          </div>
                          <div className="bg-primary/10 px-2 md:px-3 py-1 rounded-full">
                            <span className="text-primary font-semibold text-xs">Fair Pricing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action - using brand colors */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Ready for AI-Powered Service Booking in Los Angeles?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base">
              Join our platform for earning from instant booking with verified local professionals or accessing qualified local leads
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-4 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist for LA Service Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

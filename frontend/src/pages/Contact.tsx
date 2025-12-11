import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { StickyHeader } from 'components/StickyHeader';
import { Footer } from 'components/Footer';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram, Send, Sparkles, Heart, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    subject: '',
    interest: '',
    message: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: Implement form submission to backend
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        subject: '',
        interest: '',
        message: '',
        agreeTerms: false,
      });
      setErrors({});
      alert('Thank you for your message! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <StickyHeader />
      
      <main className="flex-1 pt-14">
        {/* Header Section with Animated Background */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-32 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-200/20 rounded-full blur-lg animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 text-purple-600 animate-spin" />
              <span className="text-sm font-medium text-purple-600">Let's Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-6 animate-fade-in">
              Contact Us
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-gray-600 animate-fade-in-delay">
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-purple-600 font-medium">Contact Us</span>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 md:py-24 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden group">
                {/* Subtle Animated Border Gradient - much softer */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-blue-100/30 to-teal-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                
                {/* Floating Elements - smaller and more subtle */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300/50 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/3 right-12 w-1 h-1 bg-teal-300/50 rounded-full animate-pulse delay-700"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">
                      <MessageCircle className="w-4 h-4 animate-bounce" />
                      <span>GET IN TOUCH</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                      Available 24/7 For<br />Assistance
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                      We're here to help you find the perfect service provider for your needs. Send us a message and we'll get back to you shortly.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group relative">
                        <Input
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.firstName ? 'border-red-500' : ''
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="group relative">
                        <Input
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.lastName ? 'border-red-500' : ''
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email & Mobile Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group relative">
                        <Input
                          type="email"
                          placeholder="Your E-mail"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email}</p>
                        )}
                      </div>
                      <div className="group relative">
                        <Input
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.mobileNumber ? 'border-red-500' : ''
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.mobileNumber && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.mobileNumber}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject & Interest */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group relative">
                        <Input
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.subject ? 'border-red-500' : ''
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.subject}</p>
                        )}
                      </div>
                      <div className="group relative">
                        <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                          <SelectTrigger className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                            errors.interest ? 'border-red-500' : ''
                          }`}>
                            <SelectValue placeholder="What are you most interested in?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer">I'm a customer looking for services</SelectItem>
                            <SelectItem value="provider">I want to become a service provider</SelectItem>
                            <SelectItem value="partnership">Partnership opportunities</SelectItem>
                            <SelectItem value="support">Technical support</SelectItem>
                            <SelectItem value="other">Other inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        {errors.interest && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.interest}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group relative">
                      <Textarea
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px] resize-none transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-md group-hover:transform group-hover:scale-[1.02] ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 animate-shake">{errors.message}</p>
                      )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-purple-50/50 transition-all duration-300">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                        className={`transition-all duration-300 group-hover:border-purple-400 ${
                          errors.agreeTerms ? 'border-red-500' : ''
                        }`}
                      />
                      <div className="text-sm">
                        <label htmlFor="terms" className="text-gray-700 leading-relaxed cursor-pointer hover:text-purple-600 transition-colors duration-300">
                          I Agree to <Link href="/terms" className="text-purple-600 hover:underline font-medium hover:text-purple-700 transition-colors">terms & Condition</Link>
                        </label>
                        {errors.agreeTerms && (
                          <p className="text-red-500 text-sm mt-1 animate-shake">{errors.agreeTerms}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none group/btn relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <span className="flex items-center space-x-2 relative z-10">
                          <span>{isSubmitting ? 'Sending...' : "Let's Talk"}</span>
                          <Send className={`w-4 h-4 transition-transform duration-300 ${
                            isSubmitting ? 'animate-pulse' : 'group-hover/btn:translate-x-1 group-hover/btn:rotate-12'
                          }`} />
                        </span>
                      </Button>
                    </div>
                  </form>

                  {/* Enhanced Social Media Section */}
                  <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 mb-6">
                        <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Connect & Follow Us
                        </h3>
                        <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                      </div>
                      
                      {/* Unique Social Media Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-md mx-auto">
                        <a
                          href="https://facebook.com/localserv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label="Follow us on Facebook"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl">
                            <Facebook className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
                          </div>
                          <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                          <p className="text-xs font-medium mt-2 text-gray-600 group-hover:text-blue-600 transition-colors">Facebook</p>
                        </a>
                        
                        <a
                          href="https://twitter.com/localserv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label="Follow us on Twitter"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl">
                            <Twitter className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
                          </div>
                          <div className="absolute -inset-2 bg-sky-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                          <p className="text-xs font-medium mt-2 text-gray-600 group-hover:text-sky-600 transition-colors">Twitter</p>
                        </a>
                        
                        <a
                          href="https://linkedin.com/company/localserv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label="Follow us on LinkedIn"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl">
                            <Linkedin className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
                          </div>
                          <div className="absolute -inset-2 bg-blue-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                          <p className="text-xs font-medium mt-2 text-gray-600 group-hover:text-blue-700 transition-colors">LinkedIn</p>
                        </a>
                        
                        <a
                          href="https://instagram.com/localserv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label="Follow us on Instagram"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl">
                            <Instagram className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
                          </div>
                          <div className="absolute -inset-2 bg-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                          <p className="text-xs font-medium mt-2 text-gray-600 group-hover:text-pink-600 transition-colors">Instagram</p>
                        </a>
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-6 max-w-md mx-auto leading-relaxed">
                        Stay connected for updates, tips, and service provider highlights. Join our growing community!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

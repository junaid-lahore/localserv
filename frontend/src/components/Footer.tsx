



import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export interface Props {}

export function Footer({}: Props) {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    // Scroll to in-page anchor if it exists, otherwise route
    if (page === 'join-waitlist') {
      const el = document.getElementById('join-waitlist');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    router.push(`/${page}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/EraXpert  (17).png" 
                alt="Local Serv Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">LocalServ</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">BETA</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Connecting customers with trusted local service providers through AI-powered conversations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, CA 90020</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@localserv.ai</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('blog-categories')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blogs
                </button>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/industries"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('join-waitlist')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-conditions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Local Serv. All rights reserved. Made with ❤️ for local communities.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                Connecting communities, one service at a time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

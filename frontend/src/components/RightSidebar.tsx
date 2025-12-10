import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const RightSidebar = () => {
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    navigate('/#join-waitlist');
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Also in Blog Posts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Also in Blog Posts</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
              How AI is Revolutionizing Local Services
            </h4>
            <p className="text-xs text-gray-500 mt-1">Coming Soon</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
              The Future of Mobile Auto Detailing
            </h4>
            <p className="text-xs text-gray-500 mt-1">Coming Soon</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
              Why Customers Love Getting Paid for Bookings
            </h4>
            <p className="text-xs text-gray-500 mt-1">Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Join Waitlist */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">Get notified when Local Serv launches in LA.</p>
        <Button
          onClick={handleJoinWaitlist}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;

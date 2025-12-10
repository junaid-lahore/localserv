import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Props {
  title: string;
  author: string;
  date: string;
  readTime: string;
}

export const BlogHero = ({ title, author, date, readTime }: Props) => {
  return (
    <section className="relative bg-gray-50 text-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          
        >
          <Badge className="mb-6 bg-gray-100 text-gray-600 border-gray-200 text-sm px-4 py-2">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

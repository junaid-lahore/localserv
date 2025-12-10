import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  if (headings.length === 0) {
    return null;
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-24">
      <div className="rounded-lg border border-gray-200/80 shadow-sm bg-white overflow-hidden">
        <button
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          onClick={handleToggle}
        >
          <h2 className="text-lg font-bold text-gray-900">In this article</h2>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="max-h-[400px] overflow-y-auto">
            <ul className="p-4 space-y-2">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleLinkClick(e, heading.id)}
                    className="flex items-start space-x-2 text-gray-600 hover:text-blue-600 transition-colors leading-relaxed"
                    style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }} // Indent based on heading level
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                    <span className="text-sm">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;

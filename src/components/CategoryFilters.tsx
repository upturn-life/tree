import React, { useState } from 'react';

const CATEGORIES = ['All', 'Crypto', 'Tech', 'Politics', 'Sports', 'AI', 'Finance'];

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

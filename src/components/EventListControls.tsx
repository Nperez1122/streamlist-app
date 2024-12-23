import React from 'react';
import { Search, Filter } from 'lucide-react';

interface EventListControlsProps {
  onSearch: (term: string) => void;
  onFilter: (type: string) => void;
}

export function EventListControls({ onSearch, onFilter }: EventListControlsProps) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search events..."
          onChange={(e) => onSearch(e.target.value)}
          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">All Types</option>
        <option value="stream">Streams</option>
        <option value="video">Videos</option>
        <option value="podcast">Podcasts</option>
      </select>
    </div>
  );
}

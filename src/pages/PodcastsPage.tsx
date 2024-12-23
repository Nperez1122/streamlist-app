import React from 'react';
import { Radio, Clock } from 'lucide-react';
import { useEvents } from '../hooks/useEvents';

export function PodcastsPage() {
  const { events } = useEvents();
  const podcastEvents = events.filter(event => event.type === 'podcast');

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Radio className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Podcasts</h1>
      </div>

      <div className="space-y-4">
        {podcastEvents.map((podcast) => (
          <div key={podcast.id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Radio className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{podcast.title}</h3>
              <p className="text-gray-600">{podcast.description}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{new Date(podcast.date).toLocaleDateString()}</span>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium
              ${podcast.status === 'live' ? 'bg-red-100 text-red-800' : 
                podcast.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                'bg-gray-100 text-gray-800'}`}>
              {podcast.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
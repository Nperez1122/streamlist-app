import React from 'react';
import { Play, Clock } from 'lucide-react';
import { useEvents } from '../hooks/useEvents';
import { VideoPlayer } from '../components/VideoPlayer';
import { videos } from '../data/videos';

export function VideosPage() {
  const { events } = useEvents();
  const videoEvents = events.filter(event => event.type === 'video');
  const featuredVideo = videos[0];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 mb-6">
        <Play className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Videos</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {featuredVideo.title}
        </h2>
        <VideoPlayer {...featuredVideo} />
        <p className="mt-4 text-gray-600 dark:text-gray-300">{featuredVideo.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoEvents.map((video) => (
          <div key={video.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Play className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{video.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{video.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>{new Date(video.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
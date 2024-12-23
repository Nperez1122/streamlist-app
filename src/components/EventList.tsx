import React from 'react';
import { Video, Radio, Tv, Calendar } from 'lucide-react';
import { UserEvent } from '../types';

interface EventListProps {
  events: UserEvent[];
}

export function EventList({ events }: EventListProps) {
  const getEventIcon = (type: UserEvent['type']) => {
    switch (type) {
      case 'stream':
        return Tv; // Changed from Broadcast to Tv
      case 'video':
        return Video;
      case 'podcast':
        return Radio;
      default:
        return Calendar;
    }
  };

  const getStatusColor = (status: UserEvent['status']) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 text-red-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ended':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => {
        const Icon = getEventIcon(event.type);
        const statusColor = getStatusColor(event.status);

        return (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="mt-1 text-gray-600">{event.description}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className={`text-sm px-2 py-1 rounded-full ${statusColor}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
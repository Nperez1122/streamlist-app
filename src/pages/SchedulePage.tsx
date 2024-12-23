import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useEvents } from '../hooks/useEvents';

export function SchedulePage() {
  const { events } = useEvents();

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <CalendarIcon className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {new Date(event.date).getDate()}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium
                ${event.status === 'live' ? 'bg-red-100 text-red-800' : 
                  event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                  'bg-gray-100 text-gray-800'}`}>
                {event.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
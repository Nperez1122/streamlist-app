import React from 'react';
import { EventForm } from '../components/EventForm';
import { EventList } from '../components/EventList';
import { useEvents } from '../hooks/useEvents';

export function HomePage() {
  const { events, addEvent } = useEvents();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Event</h2>
        <EventForm onSubmit={addEvent} />
      </div>
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
        <EventList events={events} />
      </div>
    </div>
  );
}
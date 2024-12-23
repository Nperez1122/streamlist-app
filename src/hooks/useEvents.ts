import { useState } from 'react';
import { UserEvent } from '../types';

const initialEvents: UserEvent[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    description: 'Learn the basics of React and how to build modern web applications',
    date: '2024-03-20',
    type: 'stream',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Live Coding Session',
    description: 'Watch as we build a real-world application from scratch',
    date: '2024-03-15',
    type: 'video',
    status: 'live',
  },
  {
    id: '3',
    title: 'Web Development Podcast',
    description: 'Weekly discussion about the latest in web development',
    date: '2024-03-25',
    type: 'podcast',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into advanced TypeScript features and patterns',
    date: '2024-03-18',
    type: 'video',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Tech News Roundup',
    description: 'Weekly roundup of the latest technology news and updates',
    date: '2024-03-22',
    type: 'podcast',
    status: 'upcoming',
  },
];

export function useEvents() {
  const [events, setEvents] = useState<UserEvent[]>(initialEvents);

  const addEvent = (eventData: Omit<UserEvent, 'id' | 'status'>) => {
    const newEvent: UserEvent = {
      ...eventData,
      id: crypto.randomUUID(),
      status: 'upcoming',
    };
    setEvents([newEvent, ...events]);
  };

  return {
    events,
    addEvent,
  };
}
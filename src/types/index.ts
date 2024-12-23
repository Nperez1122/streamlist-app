export interface UserEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'stream' | 'video' | 'podcast';
  status: 'upcoming' | 'live' | 'ended';
}

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType;
};

export interface VideoData {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
}
export type GalleryImage = {
  id: string;
  src: string;
  thumb: string;
  alt: string;
  category: 'event' | 'exhibition' | 'general';
  title: string;
};

export const galleryImages: GalleryImage[] = [
  // Events
  {
    id: '1',
    src: '/corporate-event-conference.jpg',
    thumb: '/corporate-event-conference.jpg',
    alt: 'Corporate Event Conference',
    category: 'event',
    title: 'Annual Conference 2024',
  },
  {
    id: '2',
    src: '/networking-event-party.jpg',
    thumb: '/networking-event-party.jpg',
    alt: 'Networking Event',
    category: 'event',
    title: 'Networking Gala',
  },
  {
    id: '3',
    src: '/workshop-training-session.jpg',
    thumb: '/workshop-training-session.jpg',
    alt: 'Workshop Session',
    category: 'event',
    title: 'Professional Workshop',
  },
  {
    id: '4',
    src: '/team-building-activity.jpg',
    thumb: '/team-building-activity.jpg',
    alt: 'Team Building',
    category: 'event',
    title: 'Team Building Activity',
  },
  // Exhibitions
  {
    id: '5',
    src: '/art-exhibition-gallery.jpg',
    thumb: '/art-exhibition-gallery.jpg',
    alt: 'Art Exhibition',
    category: 'exhibition',
    title: 'Modern Art Exhibition',
  },
  {
    id: '6',
    src: '/technology-expo-display.jpg',
    thumb: '/technology-expo-display.jpg',
    alt: 'Tech Expo',
    category: 'exhibition',
    title: 'Technology Expo',
  },
  {
    id: '7',
    src: '/design-showcase-booth.jpg',
    thumb: '/design-showcase-booth.jpg',
    alt: 'Design Showcase',
    category: 'exhibition',
    title: 'Design Showcase',
  },
  {
    id: '8',
    src: '/product-launch-exhibition.jpg',
    thumb: '/product-launch-exhibition.jpg',
    alt: 'Product Exhibition',
    category: 'exhibition',
    title: 'Product Launch',
  },
  // General Gallery
  {
    id: '9',
    src: '/office-interior-workspace.jpg',
    thumb: '/office-interior-workspace.jpg',
    alt: 'Office Space',
    category: 'general',
    title: 'Modern Office',
  },
  {
    id: '10',
    src: '/meeting-room-setup.jpg',
    thumb: '/meeting-room-setup.jpg',
    alt: 'Meeting Room',
    category: 'general',
    title: 'Conference Room',
  },
  {
    id: '11',
    src: '/collaboration-space-creative.jpg',
    thumb: '/collaboration-space-creative.jpg',
    alt: 'Collaboration Space',
    category: 'general',
    title: 'Creative Space',
  },
  {
    id: '12',
    src: '/presentation-hall-auditorium.jpg',
    thumb: '/presentation-hall-auditorium.jpg',
    alt: 'Presentation Hall',
    category: 'general',
    title: 'Main Hall',
  },
];

export const categories = [
  { id: 'all', label: 'All Gallery', value: 'all' },
  { id: 'event', label: 'Events', value: 'event' },
  { id: 'exhibition', label: 'Exhibition', value: 'exhibition' },
  { id: 'general', label: 'General', value: 'general' },
];

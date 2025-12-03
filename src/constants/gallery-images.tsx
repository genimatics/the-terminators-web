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
    src: '/assets/terminator-images/gallery/Events/event1.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event1.jpg',
    alt: 'Corporate Event Conference',
    category: 'event',
    title: 'Annual Conference 2024',
  },
  {
    id: '2',
    src: '/assets/terminator-images/gallery/Events/event2.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event2.jpg',
    alt: 'Networking Event',
    category: 'event',
    title: 'Networking Gala',
  },
  {
    id: '3',
    src: '/assets/terminator-images/gallery/Events/event3.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event3.jpg',
    alt: 'Workshop Session',
    category: 'event',
    title: 'Professional Workshop',
  },
  {
    id: '4',
    src: '/assets/terminator-images/gallery/Events/event4.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event4.jpg',
    alt: 'Team Building',
    category: 'event',
    title: 'Team Building Activity',
  },
  {
    id: '5',
    src: '/assets/terminator-images/gallery/Events/event5.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event5.jpg',
    alt: 'Team Building',
    category: 'event',
    title: 'Team Building Activity',
  },
  {
    id: '6',
    src: '/assets/terminator-images/gallery/Events/event6.jpg',
    thumb: '/assets/terminator-images/gallery/Events/event6.jpg',
    alt: 'Team Building',
    category: 'event',
    title: 'Team Building Activity',
  },
  // Exhibitions
  {
    id: '7',
    src: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    alt: 'Art Exhibition',
    category: 'exhibition',
    title: 'Modern Art Exhibition',
  },
  {
    id: '8',
    src: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    alt: 'Tech Expo',
    category: 'exhibition',
    title: 'Technology Expo',
  },
  {
    id: '9',
    src: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    alt: 'Design Showcase',
    category: 'exhibition',
    title: 'Design Showcase',
  },
  {
    id: '10',
    src: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    alt: 'Product Exhibition',
    category: 'exhibition',
    title: 'Product Launch',
  },
  // General Gallery
  {
    id: '11',
    src: '/assets/terminator-images/gallery/Exhibition/2.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/2.jpg',
    alt: 'Office Space',
    category: 'general',
    title: 'Modern Office',
  },
  {
    id: '12',
    src: '/assets/terminator-images/gallery/Exhibition/3.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/3.jpg',
    alt: 'Meeting Room',
    category: 'general',
    title: 'Conference Room',
  },
  {
    id: '13',
    src: '/assets/terminator-images/gallery/Exhibitionnt/4.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/4.jpg',
    alt: 'Collaboration Space',
    category: 'general',
    title: 'Creative Space',
  },
  {
    id: '14',
    src: '/assets/terminator-images/gallery/Exhibition/1.jpg',
    thumb: '/assets/terminator-images/gallery/Exhibition/1.jpg',
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

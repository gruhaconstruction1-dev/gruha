import { 
  HardHat, 
  Map, 
  Ruler, 
  Zap, 
  Paintbrush, 
  Home, 
  Building2 
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'pre-construction',
    title: 'Pre-construction',
    description: 'Comprehensive planning and feasibility studies to ensure your project starts on the right track.',
    icon: HardHat,
  },
  {
    id: 'site-prep',
    title: 'Site Preparation',
    description: 'Expert excavation, grading, and utility installation to prepare your land for construction.',
    icon: Map,
  },
  {
    id: 'architectural',
    title: 'Architect & Structural Designs',
    description: 'Innovative and safe designs that blend aesthetics with structural integrity.',
    icon: Ruler,
  },
  {
    id: 'mep',
    title: 'MEP Services',
    description: 'Integrated Mechanical, Electrical, and Plumbing solutions for modern buildings.',
    icon: Zap,
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Crafting beautiful, functional spaces that reflect your personality and style.',
    icon: Paintbrush,
  },
  {
    id: 'residential',
    title: 'Residential',
    description: 'Building dream homes with attention to every detail and quality craftsmanship.',
    icon: Home,
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Developing high-performance commercial spaces designed for business success.',
    icon: Building2,
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    feedback: 'Gruha Constructions transformed our old house into a modern masterpiece. Their attention to detail in interior design is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Sneha Reddy',
    role: 'Business Owner',
    feedback: 'The commercial project they handled for our new office was completed ahead of schedule and with top-notch quality. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Real Estate Developer',
    feedback: 'Professionalism and integrity are the core of Gruha. Their structural designs are both innovative and incredibly solid.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    role: 'Interior Designer',
    feedback: 'Collaborating with Gruha on MEP services was a breeze. They understand the technical nuances and deliver perfect results every time.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];


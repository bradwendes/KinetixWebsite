import { ArrowUpRight, Clapperboard, Compass, Sparkles } from 'lucide-react';

export const navItems = [
  { href: '/performance', label: 'Performance' },
  { href: '/event-support', label: 'Event support' },
  { href: '/consultancy', label: 'Consultancy' },
  { href: '/showreel', label: 'Showreel' },
  { href: '/about', label: 'About' },
];

export const services = [
  { number: '01', title: 'Performance', href: '/performance', icon: Sparkles, text: 'Parkour, freerunning and acrobatics shaped into live performance for stages, arenas, festivals and brand experiences.', cta: 'Explore performance' },
  { number: '02', title: 'Event support', href: '/event-support', icon: Compass, text: 'Practical creative support that helps ambitious movement-led ideas work in real spaces, for real audiences.', cta: 'Plan your event' },
  { number: '03', title: 'Consultancy', href: '/consultancy', icon: Clapperboard, text: 'Specialist movement insight for producers, creative teams and productions working with parkour, action or physical performance.', cta: 'Talk to a specialist' },
];

export const videos = [
  { id: 'nTbK5p48YcE', title: 'Live performance & TV appearances', eyebrow: 'Principal reel · archive', image: '/images/live-reel.jpg', description: 'A concise view of Team Kinetix across live performance and screen work.' },
  { id: 'AHbcwREMNeE', title: 'Fright Night performances', eyebrow: 'Event footage', image: '/images/fright-night.jpg', description: 'Atmospheric outdoor entertainment created for a live audience.' },
  { id: '7Q5LEIGzjMw', title: 'Team Kinetix Pro Reel', eyebrow: 'Professional reel · archive', image: '/images/pro-reel.jpg', description: 'Parkour, freerunning and acrobatic performance from the Team Kinetix archive.' },
];

export { ArrowUpRight };

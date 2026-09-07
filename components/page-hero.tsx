import Image from 'next/image';
import { SiteLink as Link } from '@/components/site-link';
import { ArrowDownRight } from 'lucide-react';
const heroImages: Record<string, { src: string; alt: string }> = {
  Performance: { src: '/images/performance-cricket.jpg', alt: 'Team Kinetix acrobats performing with flame effects before a stadium audience' },
  'Event support': { src: '/images/performance-battersea.jpg', alt: 'Team Kinetix delivering a coordinated acrobatic performance at Battersea Power Station' },
  Consultancy: { src: '/images/performance-primary.jpg', alt: 'Team Kinetix performer airborne above a large stadium audience' },
  'About Team Kinetix': { src: '/images/performance-acrobatics.jpg', alt: 'Team Kinetix acrobat rotating high above an international event floor' },
  Contact: { src: '/images/team-kinetix-about.jpg', alt: 'Team Kinetix athlete clearing a performance obstacle in a precision vault' },
  Showreel: { src: '/images/live-reel.jpg', alt: 'Team Kinetix performers in a live stage and television performance reel' },
  'Privacy notice': { src: '/images/bgt-archive.jpg', alt: 'Archive image of Team Kinetix performing on a major television stage' },
};

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  const image = heroImages[eyebrow] ?? heroImages.Performance;
  return <section className="page-hero"><Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="page-hero-image object-cover" /><div className="page-hero-shade" /><div className="site-container relative z-10 grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><div className="max-w-xl"><p className="text-xl leading-relaxed text-white/75">{intro}</p><Link className="inline-arrow mt-7" href="/contact">Tell us about your project <ArrowDownRight /></Link></div></div></section>;
}

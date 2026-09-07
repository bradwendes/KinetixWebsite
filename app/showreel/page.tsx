import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteLink as Link } from '@/components/site-link';
import { PageHero } from '@/components/page-hero';
import { VideoFacade } from '@/components/video-facade';
import { VideoGallery } from '@/components/video-gallery';

export const metadata: Metadata = {
  title: 'Kinetix in Action',
  description: 'Watch Team Kinetix parkour, freerunning and acrobatic performances for live events, television, advertising and productions.',
  alternates: { canonical: '/showreel' },
};

export default function ShowreelPage() {
  return <>
    <PageHero eyebrow="Kinetix in Action" title="See what movement can do." intro="From televised sport and arena entertainment to character acts, advertising and live events. Press play, then imagine what we could create around your brief." />
    <section className="section-pad bg-[var(--ink)]">
      <div className="site-container">
        <article className="featured-video">
          <div className="media-cut"><VideoFacade id="Is4t7XojeIQ" title="Kinetix Acroblast acrobats at T20 cricket" image="https://i.ytimg.com/vi/Is4t7XojeIQ/hqdefault.jpg" /></div>
          <div className="featured-video-copy">
            <p className="eyebrow">Featured performance · televised sport</p>
            <h2>Kinetix Acroblast at T20 Cricket</h2>
            <p>Acrobatics, spectacle and crowd entertainment built for the scale and pace of live T20 cricket.</p>
          </div>
        </article>

        <div className="mt-20 border-t border-white/15 pt-12">
          <div className="section-heading mb-12">
            <div><p className="eyebrow">More in motion</p><h2>Live. Screen. Everywhere between.</h2></div>
            <p>A curated first selection keeps the page focused. Open the archive when you want to explore the wider range.</p>
          </div>
          <VideoGallery />
        </div>

        <div className="mt-20 border-t border-white/15 pt-10 md:flex md:items-center md:justify-between">
          <div><p className="eyebrow">Your production</p><h2 className="font-heading text-5xl uppercase md:text-7xl">Now make it yours.</h2></div>
          <Link href="/contact" className="button button-primary mt-6 md:mt-0">Discuss your event <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  </>;
}

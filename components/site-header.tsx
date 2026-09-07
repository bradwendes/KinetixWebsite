import Image from 'next/image';
import { SiteLink as Link } from '@/components/site-link';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  return <header className="site-header"><div className="site-container flex h-20 items-center justify-between lg:h-24">
    <Link href="/" className="logo-link" aria-label="Team Kinetix home"><Image src="/images/kinetix-logo.png" width={62} height={59} alt="" priority /><span><b>TEAM</b> KINETIX</span></Link>
    <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <Link key={item.href} className="nav-link" href={item.href}>{item.label}</Link>)}<Link className="button button-primary !min-h-11 !px-5" href="/contact">Discuss your event</Link></nav>
    <details className="mobile-menu lg:hidden">
      <summary className="menu-button" aria-label="Open or close menu"><Menu className="menu-open-icon" /><X className="menu-close-icon" /></summary>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav"><div className="site-container flex flex-col py-8">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact" className="text-[var(--signal)]">Discuss your event</Link></div></nav>
    </details>
  </div></header>;
}

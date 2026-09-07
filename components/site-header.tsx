'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', closeOnEscape); };
  }, [open]);
  return <header className="site-header"><div className="site-container flex h-20 items-center justify-between lg:h-24">
    <Link href="/" className="logo-link" aria-label="Team Kinetix home" onClick={() => setOpen(false)}><Image src="/images/kinetix-logo.png" width={62} height={59} alt="" priority /><span><b>TEAM</b> KINETIX</span></Link>
    <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <Link key={item.href} className="nav-link" href={item.href}>{item.label}</Link>)}<Link className="button button-primary !min-h-11 !px-5" href="/contact">Discuss your event</Link></nav>
    <button className="menu-button lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </div><nav id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open} className={cn('mobile-nav lg:hidden', open && 'is-open')}><div className="site-container flex flex-col py-8">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{item.label}</Link>)}<Link href="/contact" className="text-[var(--signal)]" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Discuss your event</Link></div></nav></header>;
}

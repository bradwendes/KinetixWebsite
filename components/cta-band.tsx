import { SiteLink as Link } from '@/components/site-link';
import { ArrowUpRight } from 'lucide-react';
export function CtaBand({ title = 'Let’s make something move.' }: { title?: string }) { return <section className="cta-band"><div className="site-container relative z-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow !text-[var(--ink)]/60">Start a conversation</p><h2>{title}</h2></div><Link className="button button-dark" href="/contact">Discuss your event <ArrowUpRight /></Link></div></section>; }

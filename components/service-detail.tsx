import Image from 'next/image';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';

type Props = { eyebrow:string; title:string; intro:string; heading:string; paragraphs:string[]; capabilities:string[]; image?:boolean; process:{title:string;text:string}[]; cta:string };
export function ServiceDetail({ eyebrow,title,intro,heading,paragraphs,capabilities,image=false,process,cta }:Props) { return <>
  <PageHero eyebrow={eyebrow} title={title} intro={intro} />
  <section className="section-pad bg-[var(--ink)]"><div className="site-container content-grid"><p className="eyebrow">The approach</p><div className="copy-block"><h2>{heading}</h2>{paragraphs.map((p) => <p key={p}>{p}</p>)}<div className="pill-list">{capabilities.map((item)=><span key={item}>{item}</span>)}</div></div></div></section>
  {image && <section className="relative min-h-[72svh] overflow-hidden"><Image src="/images/performance-primary.jpg" alt="Team Kinetix delivering a live acrobatic performance in front of a stadium audience" fill sizes="100vw" className="object-cover object-[50%_40%]" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" /><p className="absolute bottom-8 left-8 max-w-xl font-heading text-4xl uppercase leading-none sm:bottom-14 sm:left-14 sm:text-6xl">Built for the space.<br />Made for the moment.</p></section>}
  <section className="section-pad bg-[#151118]"><div className="site-container"><p className="eyebrow">How we work</p><h2 className="display-heading max-w-4xl">From first idea to final delivery.</h2><div className="process-grid mt-12">{process.map((item,i)=><div className="process-step" key={item.title}><b>0{i+1}</b><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>
  <CtaBand title={cta} />
</>; }

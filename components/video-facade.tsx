'use client';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';
export function VideoFacade({ id, title, image, compact = false }: { id: string; title: string; image: string; compact?: boolean }) { const [playing, setPlaying] = useState(false); if (playing) return <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>; return <button className="video-facade" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}><Image src={image} alt="" fill sizes={compact ? '(max-width: 768px) 100vw, 33vw' : '100vw'} className="object-cover" /><span className="video-overlay" /><span className="play-button"><Play fill="currentColor" aria-hidden="true" /></span><span className="sr-only">Loads a YouTube video</span></button>; }

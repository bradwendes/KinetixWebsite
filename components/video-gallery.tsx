'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { VideoFacade } from '@/components/video-facade';
import { videos } from '@/lib/site-data';

const initialCount = 6;

export function VideoGallery() {
  const [expanded, setExpanded] = useState(false);
  const visibleVideos = expanded ? videos : videos.slice(0, initialCount);

  return (
    <div>
      <div className="video-gallery">
        {visibleVideos.map((video) => (
          <article key={video.id} className="video-card">
            <div className="media-cut"><VideoFacade {...video} compact /></div>
            <p className="eyebrow mt-5 !mb-2">{video.eyebrow}</p>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </article>
        ))}
      </div>
      {!expanded && videos.length > initialCount && (
        <div className="mt-14 flex justify-center">
          <button className="button video-more" type="button" onClick={() => setExpanded(true)} aria-expanded={expanded}>
            View the full video archive <ChevronDown aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

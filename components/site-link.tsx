'use client';

import type { ComponentPropsWithoutRef } from 'react';

/**
 * Uses native document navigation so links remain reliable in every browser and
 * when the site is served by the production edge runtime.
 */
export function SiteLink({ children, href, onClick, ...props }: ComponentPropsWithoutRef<'a'>) {
  return <a
    {...props}
    href={href}
    onClick={(event) => {
      onClick?.(event);
      if (!event.defaultPrevented && href && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        window.location.assign(href);
      }
    }}
  >{children}</a>;
}

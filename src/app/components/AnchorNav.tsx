'use client';

import { useState, useEffect } from 'react';
import sharedStyles from '../styles/shared.module.css';

interface AnchorLink {
  href: string;
  label: string;
}

interface AnchorNavProps {
  links: AnchorLink[];
  linkClass?: string;
  maxWidth?: number;
}

export default function AnchorNav({ links, linkClass, maxWidth }: AnchorNavProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sectionIds = links.map(({ href }) => href.replace(/^#/, ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 找出所有目前可見且最靠近頂部的 section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className={sharedStyles.anchorNav}>
      <div
        className={sharedStyles.anchorNavInner}
        style={maxWidth ? { maxWidth } : undefined}
      >
        {links.map(({ href, label }) => {
          const id = href.replace(/^#/, '');
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              className={[
                sharedStyles.anchorLink,
                isActive ? sharedStyles.anchorLinkActive : '',
                linkClass ?? '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveId(id)}
              aria-current={isActive ? 'true' : undefined}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

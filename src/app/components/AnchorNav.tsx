'use client';

import { useRef, useState, useEffect } from 'react';
import sharedStyles from '../styles/shared.module.css';

interface AnchorLink {
  href: string;
  label: string;
}

interface AnchorNavProps {
  links: AnchorLink[];
  activeClass?: string;
  linkClass?: string;
  maxWidth?: number;
}

export default function AnchorNav({ links, linkClass, maxWidth }: AnchorNavProps) {
  const navRef = useRef<HTMLElement>(null);
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace(/^#/, '');
    const target = document.getElementById(id);
    if (!target) return;

    const styles = getComputedStyle(document.documentElement);
    const navbarHeight = parseFloat(styles.getPropertyValue('--navbar-height') || '0');
    const navbarOffset = parseFloat(styles.getPropertyValue('--navbar-offset') || '0');
    const anchorH = navRef.current?.offsetHeight ?? 0;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const isScrollingUp = targetY < window.scrollY;

    const sentinel = document.getElementById('scroll-sentinel');
    const sentinelRect = sentinel?.getBoundingClientRect();
    const isPastTop = sentinelRect ? sentinelRect.bottom <= 0 : window.scrollY > 0;

    let effectiveNavbarOffset: number;
    if (isScrollingUp) {
      effectiveNavbarOffset = navbarHeight;
    } else if (isPastTop) {
      effectiveNavbarOffset = 0;
    } else {
      effectiveNavbarOffset = navbarOffset;
    }
    const totalOffset = effectiveNavbarOffset + anchorH;

    const y = targetY - totalOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className={sharedStyles.anchorNav}>
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
              onClick={(e) => handleClick(e, href)}
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

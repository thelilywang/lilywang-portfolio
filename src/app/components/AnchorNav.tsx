'use client';

import { useRef } from 'react';
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

export default function AnchorNav({ links, activeClass, linkClass, maxWidth }: AnchorNavProps) {
  const navRef = useRef<HTMLElement>(null);

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
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${sharedStyles.anchorLink}${linkClass ? ` ${linkClass}` : ''}`}
            onClick={(e) => handleClick(e, href)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

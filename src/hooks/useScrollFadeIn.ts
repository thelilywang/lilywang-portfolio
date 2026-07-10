'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Shared scroll fade-in observer. Returns a callback ref to attach to any
 * number of elements; each gets `data-visible="true"` toggled on when it
 * enters the viewport. CSS keys off `[data-visible="true"]` instead of a
 * caller-supplied class, since every current usage already scopes the
 * animation via its own module class (e.g. `.fadeInUp[data-visible="true"]`).
 *
 * Reduced motion: prefers-reduced-motion only kills animation/transition
 * *durations* in globals.css — it does not touch the opacity:0 base state,
 * so content would stay invisible forever with no transition to reveal it.
 * We detect it directly and skip the observer, marking everything visible
 * immediately.
 */
export function useScrollFadeIn<T extends HTMLElement = HTMLElement>(
  threshold = 0.1
) {
  const elsRef = useRef<Set<T>>(new Set());
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const els = Array.from(elsRef.current);

    if (reducedMotion) {
      els.forEach(el => el.setAttribute('data-visible', 'true'));
      return;
    }

    const obs = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
        }
      }),
      { threshold }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [reducedMotion, threshold]);

  const register = useCallback((el: T | null) => {
    if (el) {
      elsRef.current.add(el);
      if (reducedMotion) el.setAttribute('data-visible', 'true');
    }
  }, [reducedMotion]);

  return register;
}

import type { ReactNode } from 'react';

// Matches a quantified metric span and requires it to end in a unit/symbol
// (%, +, x, 萬, 倍, 年, years, K+, M+, million, users, stores, ★, etc.) or be
// an arrow range (18.6% → 35.8%) — a bare number alone never matches, which
// is what keeps letter-adjacent tokens like B2B/B2C/O2O/2C, and digit-led
// brand names like "104 Corporation" / "17Life", from being flagged.
//
// Test cases (input -> matched span):
//   'Activation Rate from 18.6% to 35.8% (+92%)' -> '18.6%', '35.8%', '+92%'
//   '18.6% → 35.8% (+92%)'                        -> '18.6% → 35.8%', '+92%' (arrow run kept whole)
//   '4,000+ brick-and-mortar stores'               -> '4,000+'
//   '5+ years of experience' / '5年以上'           -> '5+ years', '5年'
//   '99K+ MAU, 105K+ downloads'                    -> '99K+', '105K+'
//   'B2B/B2C SaaS platform'                        -> no match (letter-adjacent)
//   'led B2B subscription'                         -> no match
//   'At 104 Corporation:'                          -> no match (bare number, no unit)
//   '17Life Corporation'                           -> no match (digit-led brand name)
//   '14 million users' / '1,400 萬用戶'            -> '14 million', '1,400 萬'
//   '2C, Buyer-Side'                                -> no match
const METRIC_RE =
  /(?<![A-Za-z0-9])(\+?\d[\d,]*(?:\.\d+)?%?(?:\s*(?:→|->)\s*\+?\d[\d,]*(?:\.\d+)?%?)*(?:\s?(?:%|\+|x|K\+|M\+|萬|倍|年|years?|million|users?|stores?|★))(?![A-Za-z]))/g;

export function emphasizeMetrics(text: string, className: string): ReactNode {
  // split() with a single capturing group returns [text, match, text, match, ...],
  // so odd indices are always the captured metric spans — no need to re-test them.
  const parts = text.split(METRIC_RE);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong className={className} key={i}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

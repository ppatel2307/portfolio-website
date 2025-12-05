import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';
import { QuickAccess } from '../components/home/QuickAccess';

/**
 * Home page component.
 * The landing page of the portfolio site.
 * Features:
 * - Hero section with name, tagline, and CTAs
 * - Quick Access section with navigation cards
 * - Highlights section with key stats
 */

export function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Highlights />
    </>
  );
}

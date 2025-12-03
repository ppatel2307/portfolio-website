import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';

/**
 * Home page component.
 * The landing page of the portfolio site.
 * Features:
 * - Hero section with name, tagline, and CTAs
 * - Highlights section with key stats
 */

export function Home() {
  return (
    <>
      <Hero />
      <Highlights />
    </>
  );
}

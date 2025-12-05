import { useEffect, useRef, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactLinks } from './ContactLinks';

/**
 * ContactSection component.
 * Full contact section for single-page layout.
 * Includes scroll-triggered animations.
 */

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header - centered for contact */}
        <div
          className={`
            text-center max-w-2xl mx-auto mb-16
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="font-mono text-accent dark:text-accent-light text-sm mb-4 block">
            04. What's Next?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-800 dark:text-cream-50 mb-6">
            Get In Touch
          </h2>
          <p className="text-ink-500 dark:text-ink-400 text-lg">
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact content */}
        <div
          className={`
            grid md:grid-cols-2 gap-12 md:gap-16
            transition-all duration-700 delay-200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <h3
              className="
                font-display text-xl font-semibold
                text-ink-800 dark:text-cream-50
                mb-6
              "
            >
              Send a Message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Links */}
          <div className="order-1 md:order-2">
            <h3
              className="
                font-display text-xl font-semibold
                text-ink-800 dark:text-cream-50
                mb-6
              "
            >
              Contact Info
            </h3>
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
}




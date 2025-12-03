import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactLinks } from '../components/contact/ContactLinks';

/**
 * Contact page component.
 * Displays a contact form and social links.
 * Form data is logged to console (no backend integration).
 */

export function Contact() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Get in Touch"
        subtitle="Have a question or want to work together? I'd love to hear from you."
      />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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
    </SectionWrapper>
  );
}

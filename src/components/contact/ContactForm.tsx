import { useState, FormEvent } from 'react';
import { Button } from '../common/Button';

/**
 * ContactForm component.
 * A simple contact form with name, email, and message fields.
 * No backend integration - logs form data to console.
 */

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with actual form submission logic
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyles = `
    w-full px-4 py-3
    bg-white dark:bg-ink-800
    border border-ink-200 dark:border-ink-700
    rounded-lg
    text-ink-700 dark:text-cream-100
    placeholder:text-ink-400 dark:placeholder:text-ink-500
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
    dark:focus:ring-accent-light/50 dark:focus:border-accent-light
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success message */}
      {isSubmitted && (
        <div
          className="
            p-4 rounded-lg
            bg-green-50 dark:bg-green-900/20
            border border-green-200 dark:border-green-800
            text-green-700 dark:text-green-400
            text-sm
          "
        >
          Thanks for your message! I'll get back to you soon.
        </div>
      )}

      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="
            block text-sm font-medium
            text-ink-700 dark:text-cream-100
            mb-2
          "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputStyles}
        />
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="
            block text-sm font-medium
            text-ink-700 dark:text-cream-100
            mb-2
          "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className={inputStyles}
        />
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="
            block text-sm font-medium
            text-ink-700 dark:text-cream-100
            mb-2
          "
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      {/* Submit button */}
      <Button type="submit" variant="primary" className="w-full">
        Send Message
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </Button>
    </form>
  );
}


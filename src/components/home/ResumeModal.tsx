import { useEffect } from 'react';

/**
 * ResumeModal component.
 * Displays resume PDF in a full-screen modal with download option.
 */

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumePath = '/images/resume.pdf';

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="
          relative
          w-full max-w-5xl
          h-[90vh]
          mx-4
          bg-white dark:bg-ink-800
          rounded-2xl
          shadow-2xl
          overflow-hidden
          animate-scale-in
        "
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            px-6 py-4
            border-b border-ink-100 dark:border-ink-700
            bg-cream-50 dark:bg-ink-900
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                w-10 h-10 rounded-xl
                bg-gradient-to-br from-accent to-accent-dark
                flex items-center justify-center
              "
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-ink-800 dark:text-cream-50">
                My Resume
              </h3>
              <p className="text-xs text-ink-500 dark:text-ink-400">
                Poojan Patel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href={resumePath}
              download="Poojan_Patel_Resume.pdf"
              className="
                flex items-center gap-2
                px-4 py-2
                bg-accent hover:bg-accent-dark
                text-white
                rounded-lg
                font-medium text-sm
                transition-colors duration-200
              "
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>

            {/* Open in New Tab */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2
                bg-ink-100 dark:bg-ink-700
                hover:bg-ink-200 dark:hover:bg-ink-600
                text-ink-700 dark:text-ink-200
                rounded-lg
                font-medium text-sm
                transition-colors duration-200
              "
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                p-2
                hover:bg-ink-100 dark:hover:bg-ink-700
                rounded-lg
                text-ink-500 dark:text-ink-400
                transition-colors duration-200
              "
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="h-[calc(100%-73px)] bg-ink-200 dark:bg-ink-900">
          <iframe
            src={`${resumePath}#toolbar=0&navpanes=0`}
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}


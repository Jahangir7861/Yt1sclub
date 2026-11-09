'use client';

import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data (JSON-LD) for Google Rich FAQ Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-2.5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50 transition-all"
            >
              <h3 className="m-0 font-semibold text-stone-800 text-sm leading-snug font-syne">
                <button
                  type="button"
                  id={`faq-question-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white transition-colors gap-4"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`text-stone-700 text-xl leading-none shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45 text-red-700' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>

              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`overflow-hidden transition-all duration-200 ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-stone-100 px-5 pt-4 pb-5 bg-white">
                  <p className="text-stone-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

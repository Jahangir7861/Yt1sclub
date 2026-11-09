import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact YT1s Support — Inquiries & Feedback | YT1s',
  },
  description: 'Contact the YT1s support team for technical assistance, bug reports, feature requests, or DMCA compliance questions. Fast response guaranteed.',
  alternates: {
    canonical: 'https://yt1s.club/contact',
  },
  openGraph: {
    title: 'Contact YT1s Support — Inquiries & Feedback | YT1s',
    description: 'Contact the YT1s support team for technical assistance, bug reports, feature requests, or DMCA compliance questions. Fast response guaranteed.',
    url: 'https://yt1s.club/contact',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact YT1s' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact YT1s Support — Inquiries & Feedback | YT1s',
    description: 'Contact the YT1s support team for technical assistance, bug reports, feature requests, or DMCA compliance questions. Fast response guaranteed.',
    images: ['/opengraph-image'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

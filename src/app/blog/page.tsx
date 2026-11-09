import React from 'react';
import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'YT1s Creator Journal & Video Guides | 60+ Downloader Guides',
  description:
    'Explore 65+ actionable YouTube guides, YT1s 4K downloading tips, 320kbps audio extraction workflows, viral Shorts strategies, and algorithm growth hacks.',
  alternates: {
    canonical: 'https://yt1s.club/blog',
  },
  openGraph: {
    title: 'YT1s Creator Journal & YouTube Video Guides',
    description:
      'Master YouTube video downloading, 4K 60fps quality, 320kbps MP3 extraction, and high-retention video strategies with YT1s.',
    url: 'https://yt1s.club/blog',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YT1s Creator Journal & YouTube Video Guides',
    description:
      'Explore actionable YouTube guides, 4K downloading tips, audio extraction workflows, and viral growth hacks.',
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}

import React from 'react';
import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: {
    absolute: 'YT1s Creator Guides & YouTube Downloader Tips | YT1s',
  },
  description: 'Explore 65+ in-depth YouTube downloading tutorials, 1080p & 4K saving workflows, 320kbps MP3 extraction guides, and fair use creator strategies on YT1s.',
  alternates: {
    canonical: 'https://yt1s.club/blog',
  },
  openGraph: {
    title: 'YT1s Creator Guides & YouTube Downloader Tips | YT1s',
    description: 'Explore 65+ in-depth YouTube downloading tutorials, 1080p & 4K saving workflows, 320kbps MP3 extraction guides, and fair use creator strategies on YT1s.',
    url: 'https://yt1s.club/blog',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'YT1s Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YT1s Creator Guides & YouTube Downloader Tips | YT1s',
    description: 'Explore 65+ in-depth YouTube downloading tutorials, 1080p & 4K saving workflows, 320kbps MP3 extraction guides, and fair use creator strategies on YT1s.',
    images: ['/opengraph-image'],
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}

import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://yt1s.club'),
  title: {
    default: 'YT1s — Free YouTube Video Downloader | MP4 & MP3 Saver',
    template: '%s | YT1s',
  },
  description:
    'Convert and download YouTube videos in 1080p Full HD, 4K and 320kbps MP3 audio for free on YT1s.club. Instant streaming downloads with zero ads.',
  keywords: [
    'yt1s',
    'yt1s youtube video downloader',
    'yt1s youtube downloader',
    'yt1s mp3',
    'yt1s mp4',
    'yt1s download',
    'youtube video downloader',
    'youtube to mp3 yt1s',
    'free youtube downloader',
    'download youtube video',
    'youtube shorts downloader',
    'yt1s 1080p downloader',
    'yt1s 4k downloader',
    'yt1s audio converter',
    'yt1s safe to use',
  ],
  authors: [{ name: 'Jahangir', url: 'https://yt1s.club/about' }],
  creator: 'Jahangir',
  publisher: 'YT1s (yt1s.club)',
  alternates: {
    canonical: 'https://yt1s.club',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yt1s.club',
    siteName: 'YT1s - yt1s.club',
    title: 'YT1s - YouTube Video Downloader in 4K & MP3',
    description:
      'Convert and download YouTube videos in 1080p Full HD, 4K, and 320kbps MP3 audio for free. Fast, unlimited, no software needed.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'YT1s YouTube Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YT1s - YouTube Video Downloader',
    description: 'Download any YouTube video in 4K, 1080p, or MP3 — free, fast, and no software required.',
    images: ['/opengraph-image'],
  },
  other: {
    'google-adsense-account': 'ca-pub-4584603449101035',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'YT1s',
      alternateName: 'yt1s.club',
      url: 'https://yt1s.club',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://yt1s.club/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'YT1s',
      url: 'https://yt1s.club',
      logo: 'https://yt1s.club/icon.svg',
      founder: {
        '@type': 'Person',
        name: 'Jahangir',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@yt1s.club',
        contactType: 'customer service',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'YT1s YouTube Video Downloader - yt1s.club',
      url: 'https://yt1s.club',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Fast, free online YouTube video downloader, audio extractor, and creator SEO toolkit.',
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Montserrat:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N96YKLMYQY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N96YKLMYQY');
            `,
          }}
        />
        {/* Google AdSense script placeholder ready for publisher verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4584603449101035"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f7] text-stone-900 antialiased font-dm">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}

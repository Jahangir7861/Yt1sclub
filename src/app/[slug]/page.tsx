import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolPageComponent from '@/components/ToolPageComponent';
import { TOOLS_DATA } from '@/lib/tools-data';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(TOOLS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = TOOLS_DATA[params.slug];
  if (!tool) return {};

  return {
    title: tool.meta.title,
    description: tool.meta.description,
    keywords: tool.meta.keywords,
    alternates: {
      canonical: `https://yt1s.club/${tool.slug}`,
    },
    openGraph: {
      title: tool.meta.title,
      description: tool.meta.description,
      url: `https://yt1s.club/${tool.slug}`,
      siteName: 'YT1s - yt1s.club',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.meta.title,
      description: tool.meta.description,
      images: ['/og-image.png'],
    },
  };
}

export default function ToolPage({ params }: Props) {
  if (!TOOLS_DATA[params.slug]) {
    notFound();
  }

  return <ToolPageComponent slug={params.slug} />;
}

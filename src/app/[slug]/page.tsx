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

  const fullTitle = `${tool.meta.title} | YT1s`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: tool.meta.description,
    keywords: tool.meta.keywords,
    alternates: {
      canonical: `https://yt1s.club/${tool.slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: tool.meta.description,
      url: `https://yt1s.club/${tool.slug}`,
      siteName: 'YT1s - yt1s.club',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: tool.meta.description,
      images: ['/opengraph-image'],
    },
  };
}

export default function ToolPage({ params }: Props) {
  const tool = TOOLS_DATA[params.slug];

  if (!tool) {
    notFound();
  }

  return <ToolPageComponent slug={params.slug} />;
}

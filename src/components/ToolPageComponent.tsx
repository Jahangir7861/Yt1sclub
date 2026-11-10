'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ToolInterface from '@/components/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';
import { TOOLS_DATA } from '@/lib/tools-data';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedTool } from '@/lib/tool-translations';

interface Props {
  slug: string;
}

export default function ToolPageComponent({ slug }: Props) {
  const { t, lang } = useLanguage();
  const rawTool = TOOLS_DATA[slug];

  if (!rawTool) {
    notFound();
  }

  const tool = getLocalizedTool(rawTool, lang);

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    description: tool.meta.description,
    url: `https://yt1s.club/${tool.slug}`,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yt1s.club',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tool.name,
        item: `https://yt1s.club/${tool.slug}`,
      },
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      {/* 1. HERO SECTION (Clean White matching reference site) */}
      <section className="bg-white py-14 text-center relative border-b border-[#dfdfdf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-red-200 rounded-full px-3.5 py-1 text-xs text-[#e91700] mb-4 bg-red-50 shadow-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e91700]" />
            <span>{tool.badge === 'Pro Tool' ? t('proTool') : t('freeTool')}</span>
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-2 font-syne">
            {tool.name}
          </h1>
          <p className="text-sm sm:text-base text-[#4a474c] max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            {tool.tagline}
          </p>

          <ToolInterface tool={tool} />
        </div>
      </section>

      {/* 2. HOW IT WORKS (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('howItWorks')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">
              {t('fromUrlToResults')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tool.steps.map((step, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
                <div aria-hidden="true" className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES (White #ffffff) */}
      <section className="bg-white py-16 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('features')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">{t('whatYouGet')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tool.features.map((feat, idx) => (
              <div
                key={idx}
                className="border border-stone-100 rounded-2xl p-6 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-stone-900 text-sm mb-2 font-syne">{feat.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IS IT FOR (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('whoIsItFor')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">
              {t('builtForCreators')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tool.audience.map((aud, idx) => (
              <div key={idx} className="border border-stone-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-stone-900 text-sm mb-2 font-syne">{aud.label}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. USE CASES (White #ffffff) */}
      <section className="bg-white py-16 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('useCases')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">{t('howPeopleUse')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tool.useCases.map((uc, idx) => (
              <div key={idx} className="border border-stone-100 rounded-2xl p-6 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{uc.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUPPORTED FORMATS / OPTIONS (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('supportedFormats')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">
              {t('worksWithAny')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tool.formats.map((fmt, idx) => (
              <div key={idx} className="flex items-start gap-3 border border-stone-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <div>
                  <div className="font-semibold text-stone-800 text-sm mb-0.5 font-syne">{fmt.label}</div>
                  <div className="text-stone-600 text-xs leading-relaxed">{fmt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (White #ffffff) */}
      <section className="bg-white py-16 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('faq')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">
              {t('frequentlyAsked')}
            </h2>
          </div>

          <FaqAccordion faqs={tool.faqs} />
        </div>
      </section>

      {/* 8. RELATED TOOLS (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">{t('relatedTools')}</p>
            <h2 className="font-bold text-2xl md:text-3xl text-stone-900 font-syne">
              {t('otherTools')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tool.related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${rel.slug}`}
                className="border border-stone-200 rounded-xl p-5 bg-white hover:border-red-500/30 hover:shadow-md transition-all group block"
              >
                <div className="font-semibold text-stone-800 text-sm mb-1.5 group-hover:text-red-700 transition-colors font-syne">
                  {rel.name}
                </div>
                <div className="text-stone-600 text-xs leading-relaxed">{rel.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SEO EDITORIAL CONTENT BLOCK (White #ffffff) */}
      <section className="bg-white py-16">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-3xl">
          <h2 className="font-bold text-xl md:text-2xl text-stone-900 mb-4 font-syne">
            {tool.seoHeadline}
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">{tool.seoBody}</p>
        </div>
      </section>
    </div>
  );
}

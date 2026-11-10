import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, CheckCircle2, Video, Download, Music } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

function formatBoldAndCode(chunk: string, prefix: string): React.ReactNode {
  const parts = chunk.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={`${prefix}-b-${i}`} className="text-gray-900 font-bold">{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith('`') && p.endsWith('`')) {
      return <code key={`${prefix}-c-${i}`} className="px-1.5 py-0.5 rounded bg-gray-100 text-[#e91700] font-mono text-xs">{p.slice(1, -1)}</code>;
    }
    return p;
  });
}

function parseInlineMarkdown(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements: React.ReactNode[] = [];
  let lastIdx = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      elements.push(formatBoldAndCode(text.substring(lastIdx, match.index), `txt-${lastIdx}`));
    }
    const label = match[1];
    const url = match[2];
    const isInternal = url.startsWith('/');
    if (isInternal) {
      elements.push(
        <Link key={`link-${match.index}`} href={url} className="text-[#e91700] underline decoration-[#e91700]/50 hover:text-black hover:decoration-black font-semibold transition-colors">
          {label}
        </Link>
      );
    } else {
      elements.push(
        <a key={`link-${match.index}`} href={url} target="_blank" rel="noopener noreferrer" className="text-[#e91700] underline decoration-[#e91700]/50 hover:text-black hover:decoration-black font-semibold transition-colors">
          {label}
        </a>
      );
    }
    lastIdx = linkRegex.lastIndex;
  }

  if (lastIdx < text.length) {
    elements.push(formatBoldAndCode(text.substring(lastIdx), `txt-${lastIdx}`));
  }

  return elements.length > 0 ? elements : formatBoldAndCode(text, 'txt-0');
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  const cleanTitle = post.title.length > 50 ? `${post.title.slice(0, 47)}...` : post.title;
  const fullTitle = `${cleanTitle} | YT1s`;
  const cleanDesc = post.excerpt.length > 155 ? `${post.excerpt.slice(0, 152)}...` : post.excerpt;

  return {
    title: {
      absolute: fullTitle,
    },
    description: cleanDesc,
    alternates: {
      canonical: `https://yt1s.club/blog/${post.slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: cleanDesc,
      url: `https://yt1s.club/blog/${post.slug}`,
      siteName: 'YT1s - yt1s.club',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: cleanDesc,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'YT1s - yt1s.club',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yt1s.club/icon.svg',
      },
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
        name: 'Blog',
        item: 'https://yt1s.club/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://yt1s.club/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="w-full bg-white min-h-screen text-[#4a474c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. ARTICLE HEADER / HERO */}
      <section className="relative pt-12 pb-14 border-b border-[#dfdfdf] bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb back to blog */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/blog" className="hover:text-[#e91700] flex items-center gap-1 transition-colors font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Creator Journal</span>
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-block px-3 py-1 bg-red-50 border border-red-200 text-[#e91700] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-snug mb-4 font-syne">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>

          {/* Author Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <div className="text-sm font-bold text-gray-900 font-syne">{post.author.name}</div>
                <div className="text-xs text-gray-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COVER IMAGE */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 sm:-mt-8 mb-12 relative z-20">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/9] bg-gray-100">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. ARTICLE CONTENT + SIDEBAR CONTAINER */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Body */}
            <article className="lg:col-span-8">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#dfdfdf] shadow-sm text-gray-700 text-base leading-relaxed space-y-6">
                {post.content.split('\n\n').map((block, idx) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;

                  // H2 Heading
                  if (trimmed.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-xl sm:text-2xl font-bold text-gray-900 font-syne pt-5 pb-1.5 border-b border-gray-200">
                        {trimmed.replace('## ', '')}
                      </h2>
                    );
                  }

                  // H3 Heading
                  if (trimmed.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-lg sm:text-xl font-bold text-gray-900 font-syne pt-3">
                        {trimmed.replace('### ', '')}
                      </h3>
                    );
                  }

                  // H4 Heading
                  if (trimmed.startsWith('#### ')) {
                    return (
                      <h4 key={idx} className="text-base font-semibold text-gray-800 font-syne pt-2">
                        {trimmed.replace('#### ', '')}
                      </h4>
                    );
                  }

                  // Divider
                  if (trimmed === '---') {
                    return <hr key={idx} className="border-gray-200 my-6" />;
                  }

                  // Blockquote
                  if (trimmed.startsWith('> ')) {
                    return (
                      <blockquote key={idx} className="border-l-4 border-[#e91700] pl-4 py-2 my-4 bg-red-50/50 rounded-r-lg text-gray-800 italic text-base leading-relaxed">
                        {parseInlineMarkdown(trimmed.replace(/^>\s*/, ''))}
                      </blockquote>
                    );
                  }

                  // Bullet / numbered lists
                  if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                    const items = trimmed.split('\n');
                    return (
                      <ul key={idx} className="space-y-2.5 my-4 list-none pl-0">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-gray-700 text-base leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e91700] mt-2.5 shrink-0" />
                            <span>{parseInlineMarkdown(item.replace(/^[-*]|\d+\.\s/, ''))}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Table block
                  if (trimmed.includes('|')) {
                    const rows = trimmed.split('\n').filter((r) => !r.includes('---'));
                    return (
                      <div key={idx} className="overflow-x-auto my-6 border border-gray-200 rounded-xl">
                        <table className="w-full text-xs text-left">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cells = row.split('|').filter(Boolean);
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? 'bg-gray-100 font-bold text-gray-900 font-syne' : 'border-t border-gray-100 text-gray-700'}>
                                  {cells.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-3">
                                      {parseInlineMarkdown(cell.trim())}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  // Standard paragraph with inline formatting and link parsing
                  return (
                    <p key={idx} className="text-gray-700 text-base leading-relaxed">
                      {parseInlineMarkdown(trimmed)}
                    </p>
                  );
                })}

                {/* Author Bio Box */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-5 bg-gray-50 p-6 rounded-2xl">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 font-syne text-base">{post.author.name}</span>
                      <span className="text-[10px] bg-red-100 text-[#e91700] font-bold px-2.5 py-0.5 rounded-full">
                        Author & Video Engineer
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Lead Architect & Video Engineer. Designed the YT1s creator platform to give users clean, fast, and reliable tools for saving YouTube media offline without bloatware.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Fast Tools Box */}
                <div className="bg-white p-6 rounded-2xl border border-[#dfdfdf] shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 font-syne">
                    <Download className="w-4 h-4 text-[#e91700]" />
                    Fast Free Downloaders
                  </div>
                  <div className="space-y-2.5">
                    <Link
                      href="/youtube-video-downloader"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-xs font-semibold text-gray-800 hover:text-[#e91700] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-[#e91700]" />
                        <span>YouTube Video (4K/HD)</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Free</span>
                    </Link>

                    <Link
                      href="/youtube-to-mp3"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-xs font-semibold text-gray-800 hover:text-[#e91700] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-[#e91700]" />
                        <span>YouTube to MP3</span>
                      </div>
                      <span className="text-[10px] text-gray-400">320k</span>
                    </Link>

                    <Link
                      href="/youtube-shorts-downloader"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-xs font-semibold text-gray-800 hover:text-[#e91700] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#e91700]" />
                        <span>Shorts Downloader</span>
                      </div>
                      <span className="text-[10px] text-gray-400">1080p</span>
                    </Link>
                  </div>
                </div>

                {/* Related Articles Box */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl border border-[#dfdfdf] shadow-sm">
                    <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 font-syne">
                      Related Guides
                    </div>
                    <div className="space-y-4">
                      {relatedPosts.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}`}
                          className="group block"
                        >
                          <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#e91700] transition-colors line-clamp-2 mb-1 font-syne">
                            {rel.title}
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            {rel.readTime} • {rel.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

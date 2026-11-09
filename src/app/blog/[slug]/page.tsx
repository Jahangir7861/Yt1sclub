import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Calendar, Clock, ArrowLeft, Share2, Sparkles, CheckCircle2, Video, Download } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

function formatBoldAndCode(chunk: string, prefix: string): React.ReactNode {
  const parts = chunk.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={`${prefix}-b-${i}`} className="text-white font-semibold">{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith('`') && p.endsWith('`')) {
      return <code key={`${prefix}-c-${i}`} className="px-1.5 py-0.5 rounded bg-white/10 text-red-300 font-mono text-xs">{p.slice(1, -1)}</code>;
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
        <Link key={`link-${match.index}`} href={url} className="text-zinc-200 underline decoration-zinc-500 hover:text-white hover:decoration-white font-medium transition-colors">
          {label}
        </Link>
      );
    } else {
      elements.push(
        <a key={`link-${match.index}`} href={url} target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline decoration-zinc-500 hover:text-white hover:decoration-white font-medium transition-colors">
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

  return {
    title: `${post.title} | YT1s Guides`,
    description: post.excerpt,
    alternates: {
      canonical: `https://yt1s.club/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
      title: post.title,
      description: post.excerpt,
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

  return (
    <div className="w-full bg-[#0e0e10] min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. ARTICLE HEADER / HERO */}
      <section className="relative pt-12 pb-14 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.02] blur-[150px] pointer-events-none -z-0" />

        <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb back to blog */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
            <Link href="/blog" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Creator Journal</span>
            </Link>
            <span>/</span>
            <span className="text-zinc-300 font-medium">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-4 font-syne">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>

          {/* Author Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-white/10">
            <div className="flex items-center gap-3.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500/60"
              />
              <div>
                <div className="text-sm font-bold text-white font-syne">{post.author.name}</div>
                <div className="text-xs text-zinc-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COVER IMAGE */}
      <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto -mt-6 sm:-mt-8 mb-12 relative z-20">
        <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-[16/9] bg-black/50">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. ARTICLE CONTENT + SIDEBAR CONTAINER */}
      <section className="pb-24">
        <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Body */}
            <article className="lg:col-span-8 prose prose-invert max-w-none">
              <div className="bg-[#141418] p-8 sm:p-10 rounded-3xl border border-white/10 text-zinc-300 text-base leading-relaxed space-y-6">
                {/* Parse Markdown-like content into structured sections */}
                {post.content.split('\n\n').map((block, idx) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;

                  // H2 Heading
                  if (trimmed.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-xl sm:text-2xl font-bold text-white font-syne pt-5 pb-1.5 border-b border-white/10">
                        {trimmed.replace('## ', '')}
                      </h2>
                    );
                  }

                  // H3 Heading
                  if (trimmed.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-lg sm:text-xl font-bold text-zinc-100 font-syne pt-3">
                        {trimmed.replace('### ', '')}
                      </h3>
                    );
                  }

                  // H4 Heading
                  if (trimmed.startsWith('#### ')) {
                    return (
                      <h4 key={idx} className="text-base font-semibold text-zinc-200 font-syne pt-2">
                        {trimmed.replace('#### ', '')}
                      </h4>
                    );
                  }

                  // Divider
                  if (trimmed === '---') {
                    return <hr key={idx} className="border-white/10 my-6" />;
                  }

                  // Blockquote
                  if (trimmed.startsWith('> ')) {
                    return (
                      <blockquote key={idx} className="border-l-2 border-zinc-500 pl-4 py-2 my-4 bg-white/[0.02] rounded-r-lg text-zinc-300 italic text-sm">
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
                          <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
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
                      <div key={idx} className="overflow-x-auto my-6 border border-white/10 rounded-xl">
                        <table className="w-full text-xs text-left">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cells = row.split('|').filter(Boolean);
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? 'bg-white/10 font-bold text-white font-syne' : 'border-t border-white/5 text-zinc-300'}>
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
                    <p key={idx} className="text-zinc-300 text-sm leading-relaxed">
                      {parseInlineMarkdown(trimmed)}
                    </p>
                  );
                })}

                {/* Author Bio Signature Box */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-5 bg-white/[0.02] p-6 rounded-2xl">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-syne text-base">{post.author.name}</span>
                      <span className="text-[10px] bg-white/10 text-zinc-300 font-medium px-2.5 py-0.5 rounded-full">
                        Author & Developer
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Lead Architect & Video Engineer. Designed & Developed the YT1s creator ecosystem to empower creators with data-driven workflows and zero-compromise downloading speeds.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar Promo CTA */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Sticky Tool Action Box */}
              <div className="sticky top-24 bg-[#141418] border border-white/10 rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider font-syne">
                  <Sparkles className="w-4 h-4 text-zinc-400" />
                  <span>Free Creator Tools</span>
                </div>

                <h3 className="text-lg font-bold text-white font-syne leading-snug">
                  Download 4K Videos & Thumbnails in Seconds
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Put the strategies from this article into practice. Free, unlimited, and no registration required.
                </p>

                <div className="space-y-2 pt-2">
                  <Link
                    href="/youtube-video-downloader"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-red-500/10 border border-white/10 hover:border-red-500/40 text-xs text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-red-400" />
                      <span className="font-semibold">Video Downloader</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-red-400">→</span>
                  </Link>

                  <Link
                    href="/youtube-thumbnail-downloader"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-red-500/10 border border-white/10 hover:border-red-500/40 text-xs text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold">Thumbnail Grabber</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-emerald-400">→</span>
                  </Link>

                  <Link
                    href="/youtube-script-generator"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-red-500/10 border border-white/10 hover:border-red-500/40 text-xs text-zinc-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="font-semibold">AI Script Generator</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-purple-400">→</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pure cloud streaming — zero server storage</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. RELATED ARTICLES */}
      <section className="py-16 border-t border-white/5 bg-[#141418]/40">
        <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-syne">More From the Creator Journal</h3>
            <Link href="/blog" className="text-xs text-red-400 hover:text-red-300 font-semibold transition-colors">
              View All Posts →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group bg-[#141418] border border-white/10 hover:border-red-500/40 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    {rel.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[10px] text-zinc-500 mb-1">{rel.readTime}</div>
                  <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 font-syne">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

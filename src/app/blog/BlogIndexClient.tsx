'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const CATEGORIES = [
  'All',
  'School & College Hacks',
  'Video & CapCut Editing',
  'Audio & MP3 Tricks',
  'Anti-Scam & Safety',
  'Shorts & Viral Growth',
  'Storage & Low Data Hacks',
];

const FALLBACK_BLOG_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%23141418"/><rect x="20" y="20" width="760" height="410" rx="20" fill="%231a1a22" stroke="%23333340" stroke-width="2"/><circle cx="400" cy="225" r="50" fill="%23ef4444" opacity="0.9"/><polygon points="390,205 390,245 420,225" fill="white"/></svg>`;

export default function BlogIndexClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="w-full bg-[#0e0e10] min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none -z-0" />
        
        <div className="w-[92%] md:w-[88%] max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-300 mb-6 bg-white/[0.03] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Creator Academy & Video Guides</span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4 font-syne">
            All YouTube Video Downloader <span className="text-zinc-300">Creator Journal</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Data-backed breakdowns on YouTube algorithms, high-retention script engineering, CTR thumbnail psychology, and video workflows.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="flex items-center gap-3 bg-white/[0.06] border border-white/15 focus-within:border-red-500/60 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md transition-all">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles on 4K downloads, SEO tags, thumbnails, hooks..."
                className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-zinc-400 hover:text-white">
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-red-500 text-white shadow-md shadow-red-500/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="py-12 border-b border-white/5">
          <div className="w-[92%] md:w-[88%] max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-zinc-400 font-semibold font-syne">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              Featured Article
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-[#141418] border border-white/10 hover:border-red-500/40 rounded-3xl overflow-hidden shadow-2xl transition-all hover:shadow-red-500/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_BLOG_IMAGE;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-red-400 transition-colors leading-tight font-syne mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-red-500/50"
                      />
                      <div>
                        <div className="text-sm font-bold text-white font-syne">{featuredPost.author.name}</div>
                        <div className="text-[11px] text-zinc-500">{featuredPost.author.role}</div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform">
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 3. ARTICLES GRID */}
      <section className="py-16">
        <div className="w-[92%] md:w-[88%] max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne">
                {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Showing {filteredPosts.length} comprehensive guides & breakdowns
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl p-8">
              <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No articles found</h3>
              <p className="text-zinc-500 text-sm mb-6">
                Try searching for different keywords or clear your active category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#141418] border border-white/10 hover:border-red-500/40 rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-red-500/10 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden bg-black/40">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_BLOG_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug font-syne mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-red-500/40"
                        />
                        <span className="text-xs font-semibold text-zinc-300 font-syne">{post.author.name}</span>
                      </div>

                      <span className="text-xs text-red-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER & CREATOR TOOLKIT CTA */}
      <section className="py-20 border-t border-white/5 bg-[#141418]/60">
        <div className="w-[92%] md:w-[88%] max-w-4xl mx-auto text-center bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-red-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-rose-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Stay Ahead of the Algorithm
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-4">
              Get Weekly High-Retention YouTube Blueprints
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Join 150,000+ creators receiving our weekly breakdown of viral hook structures, SEO tactics, and free creator tools.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to All YouTube Video Downloader Creator Journal!');
              }}
              className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your creator email..."
                className="flex-1 bg-white/5 border border-white/15 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-500/30 transition-all"
              >
                Join Free
              </button>
            </form>
            <p className="text-[11px] text-zinc-500 mt-3">Zero spam. Unsubscribe at any time with one click.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

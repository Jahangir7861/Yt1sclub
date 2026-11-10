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

const FALLBACK_BLOG_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%23f3f4f6"/><rect x="20" y="20" width="760" height="410" rx="20" fill="%23ffffff" stroke="%23e5e7eb" stroke-width="2"/><circle cx="400" cy="225" r="50" fill="%23e91700" opacity="0.9"/><polygon points="390,205 390,245 420,225" fill="white"/></svg>`;

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
    <div className="w-full bg-white min-h-screen text-[#4a474c]">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 sm:py-16 border-b border-[#dfdfdf] bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 border border-red-200 rounded-full px-4 py-1.5 text-xs text-[#e91700] mb-4 bg-red-50 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#e91700]" />
            <span>YT1s Creator Academy & Video Guides</span>
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight mb-3 font-syne">
            YT1s <span className="text-[#e91700]">Creator Journal & Guides</span>
          </h1>
          <p className="text-[#4a474c] text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Practical guides on video downloading, audio conversion, offline viewing workflows, and storage optimization.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="flex items-center gap-3 bg-white border-2 border-[#ffc4c4] focus-within:border-[#e91700] rounded-xl px-4 py-3 shadow-sm transition-all">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles on 4K downloads, MP3 audio, CapCut, storage..."
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-gray-400 hover:text-black">
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#e91700] text-white shadow-md shadow-red-500/25'
                    : 'bg-white border border-gray-200 text-[#4a474c] hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="py-12 border-b border-[#dfdfdf]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-[#e91700] font-bold font-syne">
              <span className="w-2 h-2 rounded-full bg-[#e91700]" />
              Featured Article
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-2xl bg-white border border-[#dfdfdf] overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 aspect-[16/9] md:aspect-auto relative overflow-hidden bg-gray-100">
                  <img
                    src={featuredPost.coverImage || FALLBACK_BLOG_IMAGE}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#e91700] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#e91700] transition-colors leading-snug mb-3 font-syne">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm text-[#4a474c] leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-xs font-bold text-gray-900 font-syne">
                        {featuredPost.author.name}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e91700] group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 3. POSTS GRID */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-syne">
              {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({filteredPosts.length} guides)
              </span>
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1 font-syne">No guides found</h3>
              <p className="text-sm text-gray-500 mb-6">
                Try searching with different terms or selecting another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 bg-[#e91700] text-white font-semibold text-xs rounded-xl shadow-md"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-[#dfdfdf] overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                    <img
                      src={post.coverImage || FALLBACK_BLOG_IMAGE}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#e91700] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#e91700] transition-colors leading-snug line-clamp-2 mb-2 font-syne">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4a474c] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-medium">
                        By {post.author.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e91700] group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

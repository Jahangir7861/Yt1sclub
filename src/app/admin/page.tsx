'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BLOG_POSTS as INITIAL_POSTS, BlogPost } from '@/lib/blog-data';
import Logo from '@/components/Logo';
import {
  Search,
  Filter,
  Edit3,
  Sparkles,
  Image as ImageIcon,
  Check,
  Save,
  Download,
  Copy,
  Plus,
  RefreshCw,
  Eye,
  ArrowLeft,
  Sliders,
  Palette,
  CheckCircle2,
  Trash2,
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'School & College Hacks',
  'Video & CapCut Editing',
  'Audio & MP3 Tricks',
  'Anti-Scam & Safety',
  'Shorts & Viral Growth',
  'Storage & Low Data Hacks',
];

const THEMES = [
  { name: 'Crimson Cyber', from: '#1a0505', to: '#450a0a', accent: '#ef4444', text: '#ffffff' },
  { name: 'Midnight Electric', from: '#030712', to: '#1e1b4b', accent: '#6366f1', text: '#ffffff' },
  { name: 'Sunset Amber', from: '#180a03', to: '#451a03', accent: '#f59e0b', text: '#ffffff' },
  { name: 'Neon Emerald', from: '#021e12', to: '#064e3b', accent: '#10b981', text: '#ffffff' },
  { name: 'Deep Violet', from: '#160324', to: '#3b0764', accent: '#a855f7', text: '#ffffff' },
];

export default function AdminBlogDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load custom blogs from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aytd_custom_blogs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPosts(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  const saveToStorage = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem('aytd_custom_blogs', JSON.stringify(updatedPosts));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleUpdatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    const index = posts.findIndex((p) => p.slug === editingPost.slug);
    let updated: BlogPost[];
    if (index >= 0) {
      updated = [...posts];
      updated[index] = editingPost;
    } else {
      updated = [editingPost, ...posts];
    }
    saveToStorage(updated);
    setEditingPost(null);
  };

  // Dynamic Procedural Canvas Artwork Generator
  const generateCanvasCover = (post: BlogPost, themeIdx = selectedThemeIndex) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const theme = THEMES[themeIdx];

    // Background Gradient
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, theme.from);
    gradient.addColorStop(0.5, '#0e0e12');
    gradient.addColorStop(1, theme.to);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Decorative Mesh Glow
    const radGlow = ctx.createRadialGradient(900, 200, 50, 900, 200, 450);
    radGlow.addColorStop(0, `${theme.accent}33`);
    radGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = radGlow;
    ctx.fillRect(0, 0, 1200, 630);

    // Decorative Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1200; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 630);
      ctx.stroke();
    }
    for (let y = 0; y < 630; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1200, y);
      ctx.stroke();
    }

    // Outer Border Frame
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 1120, 550);

    // YT1s Logo Badge Top-Left
    ctx.fillStyle = theme.accent;
    ctx.beginPath();
    ctx.roundRect(80, 80, 46, 46, 12);
    ctx.fill();

    // Play icon inside badge
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(98, 93);
    ctx.lineTo(114, 103);
    ctx.lineTo(98, 113);
    ctx.closePath();
    ctx.fill();

    // Brand Name Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('YT1s', 140, 104);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '14px sans-serif';
    ctx.fillText('YT1s.club', 140, 122);

    // Category Pill Top-Right
    const catText = post.category.toUpperCase();
    ctx.font = 'bold 15px sans-serif';
    const catWidth = ctx.measureText(catText).width;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.roundRect(1120 - catWidth - 40, 80, catWidth + 36, 42, 21);
    ctx.fill();
    ctx.strokeStyle = `${theme.accent}66`;
    ctx.stroke();

    ctx.fillStyle = theme.accent;
    ctx.fillText(catText, 1120 - catWidth - 22, 106);

    // Article Title (Word Wrap)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 50px sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 16;

    const words = post.title.split(' ');
    let line = '';
    let y = 260;
    const maxWidth = 980;
    const lineHeight = 64;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), 80, y);
        line = words[n] + ' ';
        y += lineHeight;
        if (y > 420) {
          line += '...';
          break;
        }
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), 80, y);
    ctx.shadowBlur = 0;

    // Subtitle / Excerpt highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '20px sans-serif';
    const cleanExcerpt = post.excerpt.length > 95 ? post.excerpt.slice(0, 95) + '...' : post.excerpt;
    ctx.fillText(cleanExcerpt, 80, y + 55);

    // Footer Badges
    // Author signature
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('Author: Jahangir', 80, 545);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Published: ${post.date} • ${post.readTime}`, 80, 565);

    // Resolution pill bottom right
    const specPill = '4K UHD • 1080p • MP3 320k';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = theme.accent;
    ctx.fillText(specPill, 870, 555);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    return dataUrl;
  };

  const handleGenerateArtForEditingPost = () => {
    if (!editingPost) return;
    const generatedUrl = generateCanvasCover(editingPost, selectedThemeIndex);
    if (generatedUrl) {
      setEditingPost({ ...editingPost, coverImage: generatedUrl });
    }
  };

  const handleGenerateArtDirect = (post: BlogPost) => {
    const generatedUrl = generateCanvasCover(post, Math.floor(Math.random() * THEMES.length));
    if (generatedUrl) {
      const updated = posts.map((p) => (p.slug === post.slug ? { ...p, coverImage: generatedUrl } : p));
      saveToStorage(updated);
    }
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(posts, null, 2));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(posts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'aytd-blogs-backup.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredPosts = posts.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-[#0a0a0c] min-h-screen text-white py-10 md:py-16">
      <div className="w-[94%] max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              title="Back to site"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <Logo size="sm" showSubtitle={false} href="/" />
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                  ADMIN DASHBOARD
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold font-syne text-white mt-1">
                Blog & Cover Image Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => {
                const newPost: BlogPost = {
                  slug: `new-guide-${Date.now()}`,
                  title: 'New Creator Guide Title',
                  excerpt: 'Brief overview of this practical guide...',
                  category: 'School & College Hacks',
                  readTime: '4 min read',
                  date: 'September 18, 2026',
                  author: {
                    name: 'Jahangir',
                    role: 'Lead Architect & Video Engineer',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
                  },
                  coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
                  content: '## New Guide Content\n\nWrite your guide with markdown here...',
                };
                setEditingPost(newPost);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-600/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Post</span>
            </button>

            <button
              onClick={handleCopyJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold border border-white/10 transition-all"
            >
              {copiedNotification ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedNotification ? 'Copied!' : 'Copy JSON'}</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold border border-white/10 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {savedNotification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Changes successfully saved to local persistent storage!</span>
          </div>
        )}

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-zinc-400 text-xs font-medium">Total Live Articles</div>
            <div className="text-2xl font-black font-syne text-white mt-1">{posts.length}</div>
            <div className="text-[11px] text-emerald-400 mt-1">45+ Human-written posts</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-zinc-400 text-xs font-medium">Lead Developer</div>
            <div className="text-2xl font-black font-syne text-white mt-1">Jahangir</div>
            <div className="text-[11px] text-zinc-500 mt-1">YT1s Architect</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-zinc-400 text-xs font-medium">Active Categories</div>
            <div className="text-2xl font-black font-syne text-white mt-1">{CATEGORIES.length - 1}</div>
            <div className="text-[11px] text-red-400 mt-1">School, CapCut, Audio, Safety</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-zinc-400 text-xs font-medium">Art Generator</div>
            <div className="text-2xl font-black font-syne text-white mt-1">1-Click Ready</div>
            <div className="text-[11px] text-blue-400 mt-1">Procedural HD Canvas (1200x630)</div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs by title, slug, or category..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-red-500/60 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-white/[0.04] text-zinc-400 font-semibold border-b border-white/10">
                <tr>
                  <th className="p-4 w-12 text-center">#</th>
                  <th className="p-4 w-40">Cover Thumbnail</th>
                  <th className="p-4">Title & Excerpt</th>
                  <th className="p-4 w-44">Category</th>
                  <th className="p-4 w-28 text-center">Read Time</th>
                  <th className="p-4 w-44 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredPosts.map((post, idx) => (
                  <tr key={post.slug} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-center font-mono text-zinc-500">{idx + 1}</td>
                    <td className="p-4">
                      <div className="relative w-32 h-18 rounded-lg overflow-hidden border border-white/10 bg-black/60 group">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-white text-sm line-clamp-1 mb-1 font-syne">
                        {post.title}
                      </div>
                      <p className="text-zinc-500 text-[11px] line-clamp-2 max-w-xl">
                        {post.excerpt}
                      </p>
                      <div className="text-[10px] text-zinc-600 font-mono mt-1">/blog/{post.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-white/10 text-zinc-300">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4 text-center text-zinc-400 font-mono">{post.readTime}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleGenerateArtDirect(post)}
                          title="Generate Branded Custom Art"
                          className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingPost({ ...post })}
                          title="Edit Post & Picture"
                          className="p-2 rounded-lg bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 transition-all"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          title="Preview Public Page"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* EDIT MODAL */}
        {editingPost && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#141418] border border-white/15 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-syne text-white">Edit Blog & Custom Artwork</h3>
                  <p className="text-xs text-zinc-400">Update metadata, paste custom image URL, or generate art.</p>
                </div>
                <button
                  onClick={() => setEditingPost(null)}
                  className="text-zinc-400 hover:text-white p-2 text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUpdatePost} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Article Title</label>
                  <input
                    type="text"
                    required
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-red-500 outline-none"
                  />
                </div>

                {/* Slug & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Slug (URL path)</label>
                    <input
                      type="text"
                      required
                      value={editingPost.slug}
                      onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:border-red-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Category</label>
                    <select
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-red-500 outline-none"
                    >
                      {CATEGORIES.filter((c) => c !== 'All').map((c) => (
                        <option key={c} value={c} className="bg-[#141418] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Excerpt / Hook</label>
                  <textarea
                    rows={2}
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-red-500 outline-none resize-none"
                  />
                </div>

                {/* PICTURE / ARTWORK STUDIO */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-red-400" />
                      <span className="font-semibold text-white text-xs">Cover Picture Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {THEMES.map((th, i) => (
                        <button
                          type="button"
                          key={th.name}
                          onClick={() => setSelectedThemeIndex(i)}
                          title={th.name}
                          className={`w-5 h-5 rounded-full border-2 transition-transform ${
                            selectedThemeIndex === i ? 'scale-125 border-white' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: th.accent }}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={handleGenerateArtForEditingPost}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold shadow-md transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Generate Custom Art</span>
                      </button>
                    </div>
                  </div>

                  {/* Image URL Input */}
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1">Image URL or Data URI</label>
                    <input
                      type="text"
                      value={editingPost.coverImage}
                      onChange={(e) => setEditingPost({ ...editingPost, coverImage: e.target.value })}
                      placeholder="https://... or click Generate Custom Art above"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-zinc-300 font-mono focus:border-red-500 outline-none"
                    />
                  </div>

                  {/* Live Thumbnail Preview */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src={editingPost.coverImage}
                      alt="Cover Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 text-[10px] text-white">
                      Live Preview
                    </div>
                  </div>
                </div>

                {/* Content Markdown */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Content (Markdown)</label>
                  <textarea
                    rows={6}
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:border-red-500 outline-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white shadow-lg shadow-red-600/20 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save & Update Blog</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

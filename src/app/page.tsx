'use client';

import React from 'react';
import Link from 'next/link';
import ToolInterface from '@/components/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';
import { TOOLS_DATA } from '@/lib/tools-data';
import {
  Sparkles,
  Video,
  ArrowRight,
  Shield,
  Zap,
  Headphones,
  Smartphone,
  Lock,
  CheckCircle2,
  Download,
  BookOpen,
  Check,
  Star,
  Monitor,
  Music
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedTool } from '@/lib/tool-translations';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const rawVideoDownloader = TOOLS_DATA['youtube-video-downloader'];
  const videoDownloader = getLocalizedTool(rawVideoDownloader, lang);

  const homeFaqs = [
    {
      q: 'Is YT1s completely free to use?',
      a: 'Yes! YT1s is 100% free with no hidden charges, subscription fees, or account registration required. Enjoy unlimited downloads on any device.',
    },
    {
      q: 'How do I download 1080p or 4K YouTube videos with sound?',
      a: 'Paste your YouTube link into YT1s. Our in-memory stream multiplexer merges video and audio tracks in real-time, delivering a complete MP4 container with crisp synchronized audio.',
    },
    {
      q: 'Can I convert YouTube videos to 320kbps MP3 on YT1s?',
      a: 'Yes! Switch to the Audio tab or visit our dedicated YouTube to MP3 tool. Select 320kbps to extract studio-quality stereo sound with zero loss.',
    },
    {
      q: 'Does YT1s work on Android and iPhone?',
      a: 'Yes. YT1s is fully optimized for mobile browsers on Android (Chrome, Samsung Internet) and iOS (Safari). Videos save directly into your device Downloads and Photos.',
    },
    {
      q: 'Is downloading YouTube videos with YT1s safe and legal?',
      a: 'YT1s operates on a zero-disk in-memory streaming architecture without malware, adware, or executable files. Downloading videos for personal offline study and fair use is safe and secure.',
    },
    {
      q: 'Can I download YouTube Shorts without watermarks?',
      a: 'Yes! Our YouTube Shorts Downloader extracts vertical 1080x1920 video streams directly from YouTube servers with zero watermarks or logos.',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Dark obsidian #0e0e10) */}
      <section className="bg-[#0e0e10] py-20 md:py-28 text-center relative overflow-hidden border-b border-white/5">
        {/* Subtle radial glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[140px] pointer-events-none -z-0" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[250px] bg-rose-500/5 blur-[100px] pointer-events-none -z-0" />

        <div className="w-[92%] md:w-[88%] max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-red-500/20 rounded-full px-4 py-1.5 text-xs text-red-400 mb-6 bg-red-500/[0.06] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>⚡ Free Online YouTube Video Downloader</span>
          </div>

          {/* Headlines */}
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.18] tracking-tight text-white mb-4 font-syne">
            YT1s - YouTube Video Downloader <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-red-500 bg-clip-text text-transparent">
              Fast, Free & Unlimited MP4 & MP3
            </span>
          </h1>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Convert and download YouTube videos in 1080p Full HD, 4K Ultra HD, and 320kbps MP3 audio for free. No software, no registration required, 100% safe & secure.
          </p>

          {/* Interactive Hero Downloader / Tool Interface */}
          <ToolInterface tool={videoDownloader} />

          {/* Quick stats row */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">150K+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mt-1">Daily Downloads</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">100%</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mt-1">Free Forever</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">&lt; 2s</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mt-1">Avg Speed</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">0 Logs</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mt-1">100% Private</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED TOOL ACCESS CARDS (White #ffffff) */}
      <section className="bg-white py-16 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-2">Dedicated Converters</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              Choose Your Download Format
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Video Downloader */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:border-red-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-xl font-syne mb-2">YouTube Video Downloader</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Save YouTube videos in original 1080p Full HD, 4K (2160p), and 720p HD MP4 with crisp stereo audio and smooth 60fps playback.
                </p>
              </div>
              <Link
                href="/youtube-video-downloader"
                className="w-full text-center py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open Video Downloader</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: MP3 Converter */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:border-amber-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-xl font-syne mb-2">YouTube to MP3 Converter</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Extract pure high-fidelity 320kbps, 256kbps, and 128kbps audio from YouTube music videos, podcasts, and audiobooks with zero quality loss.
                </p>
              </div>
              <Link
                href="/youtube-to-mp3"
                className="w-full text-center py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open MP3 Converter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Shorts Downloader */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:border-rose-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-xl font-syne mb-2">YouTube Shorts Downloader</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Download vertical 9:16 YouTube Shorts in 1080p HD without watermarks, logos, or annoying compression artifacts.
                </p>
              </div>
              <Link
                href="/youtube-shorts-downloader"
                className="w-full text-center py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open Shorts Downloader</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-3">Simple 3-Step Process</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              How to Download YouTube Videos Using YT1s
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">01</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">Copy YouTube URL</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Open YouTube on your phone or PC. Locate the video, song, or Short you wish to save, click Share, and copy the link.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">02</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">Paste & Select Quality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Paste the URL into the search box on YT1s. Select your preferred resolution (1080p, 4K, 720p) or audio format (320kbps MP3).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">03</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">Download Directly</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Click Download. The browser initiates a direct high-speed stream straight into your storage with zero waiting queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE YT1S / CORE ADVANTAGES (White #ffffff) */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-3">YT1s Advantage</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne mb-3">
              Why Choose YT1s YouTube Downloader?
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Engineered for creators, students, and music lovers who need instant downloads without ads, malware, or software installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Feature 1 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-700">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">Ultra-Fast Conversion</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Our direct in-memory stream pipeline resolves public CDN manifests in milliseconds. Downloads begin immediately with zero waiting time or queuing.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5 text-rose-500">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">Full HD & 4K Ultra HD</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Download high-resolution YouTube videos up to 1080p 60fps and 4K (2160p) with crystal-clear audio and zero compression artifacts.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-amber-500">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">High-Fidelity 320kbps MP3</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Extract pure stereo audio from music clips, podcasts, and DJ sets encoded at true 320kbps CBR for studio-grade acoustic depth.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 text-emerald-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">100% Free & Unlimited</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  No subscription fees, no credit card requirements, and no daily download caps. Enjoy unlimited downloads on any device forever.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-500">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">Cross-Platform Ready</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Fully responsive HTML5 interface that runs smoothly inside Google Chrome, Safari, Firefox, Edge on Windows, Mac, Android, and iOS.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 text-purple-500">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-stone-900 text-lg font-syne mb-2">Zero-Disk Storage Privacy</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  We never store downloaded files or IP query logs on our servers. In-memory buffering guarantees 100% security and digital anonymity.
                </p>
              </div>
            </div>
          </div>

          {/* Supported Formats Table */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-bold text-stone-900 text-xl font-syne mb-4 text-center">
              Supported Formats & Resolutions on YT1s
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-stone-700">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-900 font-semibold font-syne">
                    <th className="py-3 px-4">Container</th>
                    <th className="py-3 px-4">Quality / Bitrate</th>
                    <th className="py-3 px-4">Video / Audio Codec</th>
                    <th className="py-3 px-4">Ideal Compatibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-red-600">MP4 Video</td>
                    <td className="py-3 px-4">2160p (4K UHD), 1440p (2K), 1080p FHD</td>
                    <td className="py-3 px-4">AV01 / VP9 / H.264 + AAC Stereo</td>
                    <td className="py-3 px-4">PC, Mac, 4K Smart TVs, Premiere Pro</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-red-600">MP4 Video</td>
                    <td className="py-3 px-4">720p HD, 480p SD, 360p Mobile</td>
                    <td className="py-3 px-4">H.264 (AVC1) + 128kbps AAC</td>
                    <td className="py-3 px-4">Android, iPhone, Tablets, Low Mobile Data</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-amber-600">MP3 Audio</td>
                    <td className="py-3 px-4">320kbps CBR High Fidelity</td>
                    <td className="py-3 px-4">LAME MP3 (Full 20kHz Spectrum)</td>
                    <td className="py-3 px-4">Car Audio, Studio Monitors, Headphones</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-amber-600">MP3 Audio</td>
                    <td className="py-3 px-4">128kbps VBR Standard Speech</td>
                    <td className="py-3 px-4">MPEG-1 Audio Layer III</td>
                    <td className="py-3 px-4">Podcasts, Audiobooks, Revision Lectures</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-purple-600">WebM / M4A</td>
                    <td className="py-3 px-4">Up to 4K 60fps & 160kbps Opus</td>
                    <td className="py-3 px-4">VP9 / AV1 / AAC</td>
                    <td className="py-3 px-4">Modern Web Browsers & Linux OS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED GUIDES FROM CREATOR BLOG (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-2">Creator Knowledge Base</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
                Latest Guides & Tutorials
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>View All 65+ Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                slug: 'what-is-yt1s-complete-guide-to-safe-youtube-downloads',
                title: 'What is YT1s? Complete 2026 Guide to Safe YouTube Downloads',
                category: 'YT1s Guides',
                readTime: '8 min read',
              },
              {
                slug: 'yt1s-mp3-converter-high-bitrate-320kbps',
                title: 'How to Convert YouTube to 320kbps MP3 Using YT1s',
                category: 'Audio Extraction',
                readTime: '7 min read',
              },
              {
                slug: 'yt1s-youtube-shorts-downloader-no-watermark',
                title: 'How to Download 1080p YouTube Shorts Without Watermark',
                category: 'Shorts & Social',
                readTime: '6 min read',
              },
              {
                slug: 'is-yt1s-safe-malware-privacy-security-audit',
                title: 'Is YT1s Safe to Use? 2026 Security & Adware Audit',
                category: 'Anti-Scam & Safety',
                readTime: '9 min read',
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-red-500/30 transition-all group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm leading-snug group-hover:text-red-600 transition-colors mb-3">
                    {post.title}
                  </h3>
                </div>
                <div className="text-[11px] text-stone-600 font-medium pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span>{post.readTime}</span>
                  <span className="text-red-600 font-semibold group-hover:translate-x-1 transition-transform">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (White #ffffff) */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-sm">Everything you need to know about YT1s YouTube video downloader</p>
          </div>

          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 7. SEO EDITORIAL CONTENT BLOCK (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-20">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-4xl">
          <h2 className="font-extrabold text-2xl md:text-3xl text-stone-900 mb-5 font-syne">
            YT1s — The Modern Standard in Free Online YouTube Downloading
          </h2>
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
            <p>
              YT1s is an advanced online media conversion utility that lets you download YouTube videos, Shorts, and audio tracks directly through your web browser. Built on an in-memory cloud streaming gateway, YT1s negotiates direct connections to public content delivery networks, eliminating the need to install dangerous software, APK files, or browser extensions.
            </p>
            <p>
              Whether you need 4K 60fps files for high-end video editing in Premiere Pro, 1080p clips for offline tablet viewing, or high-fidelity 320kbps MP3s for your music playlist, YT1s provides high-speed conversions with zero server disk storage and total privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

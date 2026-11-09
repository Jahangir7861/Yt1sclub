'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { Sparkles, Shield, FileText, Info, Mail, Scale, Video, Music, Smartphone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0e0e10] border-t border-white/5 py-14 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info & Author Signature */}
          <div className="space-y-4">
            <Logo size="sm" showSubtitle={true} href="/" />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
              YT1s (yt1s.club) is the fastest in-memory cloud streaming tool for YouTube creators, editors, and students. Download 1080p, 4K videos and 320kbps MP3 audio with zero server disk storage.
            </p>

            {/* Creator / Developer Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300 shadow-sm">
              <span>{t('designedBy') || 'Designed & Developed by'}</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-syne">
                Jahangir
              </span>
            </div>
          </div>

          {/* Core Downloaders */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              Fast Downloaders
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/youtube-video-downloader" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube Video Downloader (4K / 1080p)</span>
                </Link>
              </li>
              <li>
                <Link href="/youtube-to-mp3" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-amber-500" />
                  <span>YouTube to MP3 Converter (320kbps)</span>
                </Link>
              </li>
              <li>
                <Link href="/youtube-shorts-downloader" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-rose-500" />
                  <span>YouTube Shorts Downloader (No Watermark)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Creator Resources (Blog) */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              Creator Guides & Blog
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-red-400 hover:text-red-300 text-xs font-semibold transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Creator Journal (65+ Guides)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/what-is-yt1s-complete-guide-to-safe-youtube-downloads" className="text-zinc-400 hover:text-white text-xs transition-colors">
                  What is YT1s? Complete Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/yt1s-mp3-converter-high-bitrate-320kbps" className="text-zinc-400 hover:text-white text-xs transition-colors">
                  320kbps MP3 Audio Extraction Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/yt1s-youtube-shorts-downloader-no-watermark" className="text-zinc-400 hover:text-white text-xs transition-colors">
                  Download Shorts Without Watermark
                </Link>
              </li>
              <li>
                <Link href="/blog/is-yt1s-safe-malware-privacy-security-audit" className="text-zinc-400 hover:text-white text-xs transition-colors">
                  Is YT1s Safe? Security & Privacy Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* AdSense Legal & Compliance */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              Legal & Trust
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-zinc-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-zinc-500" />
                  <span>DMCA Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Prominent Signature */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 YT1s (yt1s.club) — All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              Designed & Developed by <strong className="text-white font-semibold">Jahangir</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-red-400 transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <Link href="/dmca" className="hover:text-zinc-300 transition-colors">
              DMCA
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

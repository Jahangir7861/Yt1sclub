'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Video, Music, Smartphone, BookOpen, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/lib/i18n';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { lang, setLang, currentLangObj } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'YouTube Downloader', slug: '/youtube-video-downloader', icon: Video },
    { name: 'YouTube to MP3', slug: '/youtube-to-mp3', icon: Music },
    { name: 'Shorts Downloader', slug: '/youtube-shorts-downloader', icon: Smartphone },
    { name: 'Blog', slug: '/blog', icon: BookOpen },
    { name: 'About', slug: '/about', icon: null },
  ];

  return (
    <nav ref={navRef} aria-label="Main Navigation" className="sticky top-0 z-50 bg-[#0e0e10]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="w-[92%] md:w-[88%] mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Logo size="sm" showSubtitle={true} href="/" />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.slug;
            return (
              <Link
                key={link.slug}
                href={link.slug}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-zinc-400 group-hover:text-red-400" />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right CTA / Language Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Multi-Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-label={`Current language: ${currentLangObj.nativeName}. Click to change language`}
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.04] px-3 py-1.5 rounded-lg transition-all"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-medium">{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#141418] border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Select Language
                </div>
                <div className="space-y-0.5 mt-1 max-h-64 overflow-y-auto">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                        lang === l.code ? 'bg-red-500 text-white font-semibold' : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{l.flag}</span>
                        <span>{l.nativeName}</span>
                        <span className="text-[10px] text-zinc-400">({l.name})</span>
                      </div>
                      {lang === l.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/youtube-video-downloader"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md shadow-red-500/25 transition-all hover:shadow-red-500/40"
          >
            <span>Download Now</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141418] border-b border-white/10 px-4 py-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.slug;
              return (
                <Link
                  key={link.slug}
                  href={link.slug}
                  className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-white font-semibold' : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-zinc-400" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/youtube-video-downloader"
                className="w-full block text-center py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg text-sm transition-colors shadow-lg shadow-red-600/30"
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

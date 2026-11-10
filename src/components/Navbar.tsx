'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/lib/i18n';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { lang, setLang, currentLangObj } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Youtube Downloader', slug: '/' },
    { name: 'Convert YouTube to MP3', slug: '/youtube-to-mp3' },
    { name: 'Youtube to MP4 Converter', slug: '/youtube-video-downloader' },
    { name: 'Blog', slug: '/blog' },
  ];

  return (
    <nav ref={navRef} aria-label="Main Navigation" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dfdfdf] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo size="sm" showSubtitle={false} href="/" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.slug;
            return (
              <Link
                key={link.slug}
                href={link.slug}
                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#e91700] bg-red-50'
                    : 'text-[#4a474c] hover:text-[#e91700] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Language & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Multi-Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-label={`Language: ${currentLangObj.nativeName}`}
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs text-[#4a474c] hover:text-black border border-[#dfdfdf] hover:border-gray-400 bg-white px-3 py-1.5 rounded-lg transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#e91700]" />
              <span className="font-semibold">{currentLangObj.name}</span>
              <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-[#dfdfdf] rounded-xl shadow-xl p-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Select Language
                </div>
                <div className="space-y-0.5 mt-0.5 max-h-60 overflow-y-auto">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        lang === l.code ? 'bg-[#e91700] text-white font-semibold' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.name}</span>
                      </div>
                      {lang === l.code && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#dfdfdf] px-4 py-4 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => {
            const isActive = pathname === link.slug;
            return (
              <Link
                key={link.slug}
                href={link.slug}
                className={`block py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-red-50 text-[#e91700]' : 'text-[#4a474c] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

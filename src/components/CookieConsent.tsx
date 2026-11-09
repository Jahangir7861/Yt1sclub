'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Check, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    try {
      const consent = localStorage.getItem('yt1sclub_cookie_consent_v1');
      if (!consent) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('yt1sclub_cookie_consent_v1', JSON.stringify({ choice: 'all', date: new Date().toISOString() }));
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('yt1sclub_cookie_consent_v1', JSON.stringify({ choice: 'essential', date: new Date().toISOString() }));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-heading"
      className="fixed bottom-5 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#141418]/95 backdrop-blur-xl border border-white/15 p-5 rounded-2xl shadow-2xl text-white relative">
        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Dismiss cookie notice"
          className="absolute top-3.5 right-3.5 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
        >
          <X aria-hidden="true" className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 mb-3 pr-6">
          <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Shield className="w-4 h-4 text-red-400" />
          </div>
          <div className="flex-1">
            <div id="cookie-heading" role="heading" aria-level={2} className="text-sm font-bold font-syne text-white mb-1">
              {t('cookieTitle') || 'We Value Your Privacy & Cookies'}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {t('cookieDesc') ||
                'YT1s.club uses cookies and anonymized analytics to ensure smooth video streaming, optimize server delivery, and provide personalized AdSense content in compliance with GDPR & CCPA.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-white/10">
          <Link
            href="/privacy"
            className="text-[11px] text-zinc-300 hover:text-white underline underline-offset-2 transition-colors self-start sm:self-center py-1"
          >
            {t('privacyPolicy') || 'Privacy Policy'}
          </Link>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl border border-white/15 hover:bg-white/5 text-xs text-zinc-200 font-medium transition-colors"
            >
              {t('cookieEssential') || 'Essential Only'}
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-4 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-xs text-white font-semibold shadow-md shadow-red-500/25 transition-all"
            >
              {t('cookieAccept') || 'Accept All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

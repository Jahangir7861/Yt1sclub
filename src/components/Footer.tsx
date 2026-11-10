'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#dfdfdf] py-10 text-[#4a474c]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold mb-5">
          <Link href="/contact" className="hover:text-[#e91700] transition-colors">
            Contact us
          </Link>
          <Link href="/privacy" className="hover:text-[#e91700] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#e91700] transition-colors">
            Terms of service
          </Link>
          <Link href="/blog" className="hover:text-[#e91700] transition-colors">
            Blog
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {currentYear} yt1s.club
        </p>
      </div>
    </footer>
  );
}

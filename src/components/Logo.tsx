'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  href?: string;
}

export default function Logo({ size = 'md', showSubtitle = true, className = '', href = '/' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const content = (
    <div className={`flex items-center gap-2 group select-none ${className}`}>
      {/* YouTube Style Red Badge */}
      <div className={`relative ${iconSizes[size]} shrink-0 rounded-lg bg-[#e91700] flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform`}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white ml-0.5">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-black text-gray-900 tracking-tight font-syne ${titleSizes[size]}`}>
          YT1s<span className="text-[#e91700]">.club</span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] text-gray-500 font-medium tracking-tight mt-0.5">
            YouTube Video Downloader
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="YT1s YouTube Video Downloader">
        {content}
      </Link>
    );
  }

  return content;
}

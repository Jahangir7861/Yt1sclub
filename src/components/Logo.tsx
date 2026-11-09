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
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const content = (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Icon Badge */}
      <div className={`relative ${iconSizes[size]} shrink-0 rounded-xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 p-[1.5px] shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 group-hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-full bg-[#121216] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle ambient light inside badge */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent pointer-events-none" />

          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 relative z-10">
            {/* Geometric Play Triangle */}
            <path
              d="M7 6.5C7 5.7 7.9 5.2 8.6 5.6L16.5 10.5C17.2 10.9 17.2 12.0 16.5 12.4L8.6 17.3C7.9 17.7 7 17.2 7 16.4V6.5Z"
              fill="url(#aytdGradient)"
            />
            {/* Downward Stream Arrow Needle */}
            <path
              d="M13 14L12 18.5M12 18.5L9.5 16M12 18.5L14.5 16"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="aytdGradient" x1="7" y1="5" x2="17" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff4b4b" />
                <stop offset="0.5" stopColor="#ff7043" />
                <stop offset="1" stopColor="#ffca28" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold text-white tracking-tight font-syne text-base sm:text-lg">
            YT1s<span className="text-red-500">.club</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] text-zinc-400 tracking-wider lowercase font-mono group-hover:text-zinc-300 transition-colors mt-0.5">
            YouTube Video Downloader
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="YT1s YouTube Video Downloader Homepage">
        {content}
      </Link>
    );
  }

  return content;
}

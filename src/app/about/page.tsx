import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Zap, Globe2, Cpu, Heart, ArrowLeft, Award, Users, CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: {
    absolute: 'About YT1s — Free & Secure YouTube Media Utility | YT1s',
  },
  description: 'Learn about YT1s, our high-speed zero-storage in-memory streaming technology, privacy philosophy, and developer Jahangir mission to empower creators.',
  alternates: {
    canonical: 'https://yt1s.club/about',
  },
  openGraph: {
    title: 'About YT1s — Free & Secure YouTube Media Utility | YT1s',
    description: 'Learn about YT1s, our high-speed zero-storage in-memory streaming technology, privacy philosophy, and developer Jahangir mission to empower creators.',
    url: 'https://yt1s.club/about',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About YT1s' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About YT1s — Free & Secure YouTube Media Utility | YT1s',
    description: 'Learn about YT1s, our high-speed zero-storage in-memory streaming technology, privacy philosophy, and developer Jahangir mission to empower creators.',
    images: ['/opengraph-image'],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0e0e10] min-h-screen text-white py-16 md:py-24">
      <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-red-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home Downloader</span>
        </Link>

        {/* Hero Section */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-700" />
            <span>Empowering Creators, Students & Editors Worldwide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-syne mb-6">
            About <span className="text-red-700">YT1s</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            <strong>YT1s (yt1s.club)</strong> was founded with a single, clear mission: to build the internet’s fastest, cleanest, and most honest YouTube downloading and creator optimization suite.
          </p>
        </div>

        {/* Story & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/[0.03] border border-white/10 p-6 sm:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-700">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-syne text-white mb-3">Why We Built YT1s</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              For years, downloading YouTube videos meant navigating shady websites filled with dozens of fake green &quot;Download&quot; buttons, intrusive popups, and dangerous APK redirects. Students downloading study lectures and video editors pulling clips for edits were forced to risk malware.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              YT1s eliminates all the garbage. We give creators a genuine, one-click tool with instant 4K, 1080p, and MP3 conversion, transparent file sizes, and pristine audio synchronization.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 p-6 sm:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-syne text-white mb-3">Our Zero-Disk Storage Architecture</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Most older services store copies of converted videos on their web servers, accumulating petabytes of copyrighted files and exposing user query history.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              At YT1s, we engineered an in-memory streaming gateway. Video packets stream directly from public CDN endpoints straight to your browser cache via RAM buffering. <strong>Zero bytes are permanently saved to our hard drives</strong>, ensuring maximum privacy and instant speed.
            </p>
          </div>
        </div>

        {/* Meet the Founder & Developer */}
        <section className="bg-gradient-to-br from-red-950/20 via-white/[0.02] to-transparent border border-white/10 rounded-3xl p-8 sm:p-10 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-red-600 flex items-center justify-center font-extrabold text-2xl font-syne text-white shadow-xl shadow-red-600/30">
              J
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-500/20 text-red-400 mb-1">
                Founder & Lead Architect
              </div>
              <h3 className="text-2xl font-bold font-syne text-white">Designed & Developed by Jahangir</h3>
              <p className="text-xs text-zinc-400">Full-Stack Software Engineer & Video Infrastructure Enthusiast</p>
            </div>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed mb-4">
            &quot;I created YT1s because I was tired of unreliable downloaders failing right before my university deadlines and creative editing projects. My goal was to create a modern web app that treats users with respect — no malware, no fake buttons, no forced sign-ups, and genuine support for multiple languages so anyone from Lahore to Madrid to Tokyo can use it seamlessly.&quot;
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center">
            <div className="p-3">
              <div className="text-xl font-extrabold text-white font-syne">100%</div>
              <div className="text-xs text-zinc-400">Free Forever</div>
            </div>
            <div className="p-3">
              <div className="text-xl font-extrabold text-white font-syne">9+</div>
              <div className="text-xs text-zinc-400">Languages & RTL</div>
            </div>
            <div className="p-3">
              <div className="text-xl font-extrabold text-white font-syne">0 Bytes</div>
              <div className="text-xs text-zinc-400">Server Disk Retention</div>
            </div>
            <div className="p-3">
              <div className="text-xl font-extrabold text-white font-syne">4K UHD</div>
              <div className="text-xs text-zinc-400">Max Resolution</div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="space-y-4 mb-16">
          <h2 className="text-2xl font-bold font-syne text-white mb-6">What Sets YT1s Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Clean Dual-Tab Engine',
                desc: 'Easily separate Video formats (4K, 1080p, 720p) from Audio streams (320kbps MP3) with a single tap.',
              },
              {
                title: 'Shorts & Thumbnail Extractor',
                desc: 'Download viral Shorts in full HD without watermarks and extract master 1280x720 HD thumbnails.',
              },
              {
                title: 'Full Global Accessibility',
                desc: 'Localized into Urdu, Hindi, Spanish, Arabic (with RTL), French, German, Portuguese, and Chinese.',
              },
              {
                title: 'Zero Bloat & AdSense Safe',
                desc: 'Compliant with Google AdSense standards, providing clean, respectful advertising without intrusive redirects.',
              },
            ].map((feat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{feat.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-10 border-t border-white/10">
          <h3 className="text-xl font-bold font-syne text-white mb-2">Ready to download at lightning speed?</h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6">Paste any YouTube URL and experience true high-definition streaming.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all"
          >
            <span>Launch YT1s</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

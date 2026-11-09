import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, Mail, ArrowLeft, CheckCircle2, AlertTriangle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'DMCA Copyright Disclaimer & Notice Policy | YT1s',
  },
  description: 'YT1s DMCA copyright policy, safe harbor compliance, and takedown notice procedures. Learn how we respect creator rights and intellectual property.',
  alternates: {
    canonical: 'https://yt1s.club/dmca',
  },
  openGraph: {
    title: 'DMCA Copyright Disclaimer & Notice Policy | YT1s',
    description: 'YT1s DMCA copyright policy, safe harbor compliance, and takedown notice procedures. Learn how we respect creator rights and intellectual property.',
    url: 'https://yt1s.club/dmca',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'YT1s DMCA Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Copyright Disclaimer & Notice Policy | YT1s',
    description: 'YT1s DMCA copyright policy, safe harbor compliance, and takedown notice procedures. Learn how we respect creator rights and intellectual property.',
    images: ['/opengraph-image'],
  },
};

export default function DmcaPage() {
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

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
            <span>Digital Millennium Copyright Act Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-syne mb-3">
            DMCA <span className="text-red-700">Disclaimer</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Safe Harbor Statement & Notice of Intellectual Property Rights
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-10 text-sm text-zinc-300 leading-relaxed">
          <strong>YT1s (yt1s.club)</strong> respects the intellectual property rights of creators and copyright holders and complies with the Digital Millennium Copyright Act of 1998 (17 U.S.C. § 512). As an automated web utility, we do not host, store, broadcast, or replicate any multimedia content on our own server drives.
        </div>

        {/* Body sections */}
        <div className="space-y-10 text-sm text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">1.</span> Technical Nature of the Service
            </h2>
            <p>
              YT1s functions strictly as a client-side conduit and format-negotiating proxy. When a user requests a file:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400">
              <li>The user specifies an externally accessible YouTube video URL.</li>
              <li>Our software connects to the public manifest and parses the available CDN stream links.</li>
              <li>The media data is streamed on-the-fly through RAM memory directly to the user&apos;s browser download manager.</li>
              <li><strong>Zero video or audio data is ever written to disk or permanently archived on YT1s servers.</strong></li>
            </ul>
            <p>
              Because no content is permanently hosted on YT1s, copyright holders are strongly encouraged to contact YouTube directly to remove the underlying master video from YouTube&apos;s CDN servers, which permanently disables access across all third-party platforms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">2.</span> How to File a DMCA Takedown Notice
            </h2>
            <p>
              If you are a copyright owner or an agent thereof and believe that any link, tool, or preview on <code>yt1s.club</code> infringes upon your copyright, you may submit a formal notification pursuant to 17 U.S.C. § 512(c)(3).
            </p>
            <p>Your notification must include the following information in writing:</p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>Identification of the copyrighted work claimed to have been infringed, or, if multiple works at a single site are covered, a representative list of such works.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material (including specific URLs on YT1s).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>Information reasonably sufficient to permit YT1s to contact you, such as an address, telephone number, and email address.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">3.</span> Designated Copyright Agent
            </h2>
            <p>
              Please send all formal notifications to our Designated Agent at:
            </p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-white font-semibold">YT1s DMCA Agent & Compliance Team</div>
                <div className="text-xs text-zinc-400">Lead Developer: Jahangir</div>
                <div className="text-xs text-zinc-400">Domain: yt1s.club</div>
              </div>
              <a
                href="mailto:support@yt1s.club?subject=DMCA%20Notice%20Takedown"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-lg shadow-red-600/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>support@yt1s.club</span>
              </a>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">4.</span> Counter-Notification Procedures
            </h2>
            <p>
              If you believe that your content was removed or disabled by mistake or misidentification, you may send a counter-notification containing:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400">
              <li>Your physical or electronic signature.</li>
              <li>Identification of the material that has been removed or disabled.</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed as a result of mistake or misidentification.</li>
              <li>Your name, address, telephone number, and consent to jurisdiction of the federal court for your judicial district.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

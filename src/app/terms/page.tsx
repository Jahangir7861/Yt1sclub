import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, ArrowLeft, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service & User Guidelines | YT1s',
  },
  description: 'Review the YT1s Terms of Service, fair use guidelines, copyright disclaimers, and user terms for personal non-commercial media conversion.',
  alternates: {
    canonical: 'https://yt1s.club/terms',
  },
  openGraph: {
    title: 'Terms of Service & User Guidelines | YT1s',
    description: 'Review the YT1s Terms of Service, fair use guidelines, copyright disclaimers, and user terms for personal non-commercial media conversion.',
    url: 'https://yt1s.club/terms',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'YT1s Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & User Guidelines | YT1s',
    description: 'Review the YT1s Terms of Service, fair use guidelines, copyright disclaimers, and user terms for personal non-commercial media conversion.',
    images: ['/opengraph-image'],
  },
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white min-h-screen text-gray-900 py-16 md:py-24">
      <div className="w-[92%] md:w-[85%] max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#e91700] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home Downloader</span>
        </Link>

        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-[#e91700] border border-red-200 mb-4">
            <FileText className="w-3.5 h-3.5 text-[#e91700]" />
            <span>Legal Agreement & Fair Use Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-syne mb-3">
            Terms of <span className="text-[#e91700]">Service</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Effective Date: September 18, 2026 | YT1s (yt1s.club)
          </p>
        </div>

        {/* Overview banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10 text-sm text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-900 mb-2">Welcome to YT1s</p>
          By accessing or using <strong>YT1s (yt1s.club)</strong>, designed & developed by Jahangir, you certify that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, please discontinue using this website immediately.
        </div>

        {/* Body content */}
        <div className="space-y-10 text-sm text-gray-600 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">1.</span> Permitted Fair Use & Purpose
            </h2>
            <p>
              YT1s provides web-based utilities engineered for content creators, researchers, teachers, students, and digital archivists to extract publicly accessible multimedia files (such as high-definition MP4 videos, MP3 audio, and thumbnail image files).
            </p>
            <p>
              You agree to use this platform strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-500">
              <li>Personal, private, non-commercial offline playback.</li>
              <li>Academic research, study, commentary, parody, and fair use under applicable copyright laws.</li>
              <li>Archiving your own original multimedia productions, creative commons works, or public domain clips.</li>
            </ul>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-xs flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Strict Prohibition:</strong> You may not use YT1s to pirate, illegally distribute, monetize, or republish copyrighted media content without the explicit written permission of the respective copyright owner.
              </span>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">2.</span> Non-Affiliation with YouTube or Google LLC
            </h2>
            <p>
              YouTube™ is a registered trademark of Google LLC. <strong>YT1s (yt1s.club)</strong> is an independent software tool and web service created by Jahangir. YT1s is not affiliated with, authorized, maintained, sponsored, or in any way officially connected with YouTube, Google LLC, or any of their affiliates or subsidiaries.
            </p>
            <p>
              All video titles, channel names, trademarks, logos, and brand names displayed on this website are the property of their respective owners. Their display on YT1s is purely for descriptive, demonstrative, and identification purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">3.</span> Zero-Retention Server Architecture
            </h2>
            <p>
              YT1s does not host, store, catalog, or archive media files on its servers. When a user requests a download, our server acts purely as an ephemeral proxy/pipe, streaming bits directly in system memory from public content distribution networks to the user&apos;s browser. Once the download session completes, all buffered bytes in RAM are instantly flushed.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">4.</span> Acceptable Use & User Conduct
            </h2>
            <p>When interacting with YT1s, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-500">
              <li>Launch automated scrapers, denial-of-service (DoS) attacks, or excessive high-frequency script requests that degrade service availability for other creators.</li>
              <li>Attempt to reverse-engineer, bypass rate limits, or exploit the platform&apos;s streaming infrastructure.</li>
              <li>Inject malicious payloads, viruses, or Trojan codes into input parameters.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">5.</span> DMCA & Copyright Compliance
            </h2>
            <p>
              We honor intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you are a copyright owner and believe that content accessible via our platform infringes on your rights, please review our formal{' '}
              <Link href="/dmca" className="text-[#e91700] underline hover:text-red-300">
                DMCA Disclaimer & Safe Harbor Notice
              </Link>{' '}
              to submit an official notification to our Designated Agent.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">6.</span> Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. YT1s EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-xs text-gray-500">
              In no event shall YT1s, its developer Jahangir, or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">7.</span> Changes to Terms
            </h2>
            <p>
              We reserve the right to revise or update these Terms of Service at any time without prior notice. Any changes will be posted on this page with an updated revision date. Your continued use of the site signifies your agreement to the modified terms.
            </p>
          </section>

          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-8 mt-12 space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne">8. Inquiries & Legal Contact</h2>
            <p>
              For legal inquiries, partnership discussions, or questions regarding these terms, please contact:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-gray-900 font-semibold">YT1s Legal Department</div>
                <div className="text-xs text-gray-500">Designed & Developed by Jahangir</div>
                <div className="text-xs text-gray-500">yt1s.club</div>
              </div>
              <a
                href="mailto:support@yt1s.club"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-gray-900 text-xs font-semibold shadow-lg shadow-red-600/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>support@yt1s.club</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

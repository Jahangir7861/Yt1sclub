import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, ArrowLeft, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | YT1s - YT1s.club',
  description: 'Terms of Service and Conditions for YT1s. Understand fair use guidelines, intellectual property notices, and disclaimer of warranties.',
  alternates: {
    canonical: 'https://yt1s.club/terms',
  },
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5 text-red-700" />
            <span>Legal Agreement & Fair Use Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-syne mb-3">
            Terms of <span className="text-red-700">Service</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Effective Date: September 18, 2026 | YT1s (yt1s.club)
          </p>
        </div>

        {/* Overview banner */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-10 text-sm text-zinc-300 leading-relaxed">
          <p className="font-semibold text-white mb-2">Welcome to YT1s</p>
          By accessing or using <strong>YT1s (yt1s.club)</strong>, designed & developed by Jahangir, you certify that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, please discontinue using this website immediately.
        </div>

        {/* Body content */}
        <div className="space-y-10 text-sm text-zinc-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">1.</span> Permitted Fair Use & Purpose
            </h2>
            <p>
              YT1s provides web-based utilities engineered for content creators, researchers, teachers, students, and digital archivists to extract publicly accessible multimedia files (such as high-definition MP4 videos, MP3 audio, and thumbnail image files).
            </p>
            <p>
              You agree to use this platform strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400">
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
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">2.</span> Non-Affiliation with YouTube or Google LLC
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
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">3.</span> Zero-Retention Server Architecture
            </h2>
            <p>
              YT1s does not host, store, catalog, or archive media files on its servers. When a user requests a download, our server acts purely as an ephemeral proxy/pipe, streaming bits directly in system memory from public content distribution networks to the user&apos;s browser. Once the download session completes, all buffered bytes in RAM are instantly flushed.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">4.</span> Acceptable Use & User Conduct
            </h2>
            <p>When interacting with YT1s, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400">
              <li>Launch automated scrapers, denial-of-service (DoS) attacks, or excessive high-frequency script requests that degrade service availability for other creators.</li>
              <li>Attempt to reverse-engineer, bypass rate limits, or exploit the platform&apos;s streaming infrastructure.</li>
              <li>Inject malicious payloads, viruses, or Trojan codes into input parameters.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">5.</span> DMCA & Copyright Compliance
            </h2>
            <p>
              We honor intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you are a copyright owner and believe that content accessible via our platform infringes on your rights, please review our formal{' '}
              <Link href="/dmca" className="text-red-400 underline hover:text-red-300">
                DMCA Disclaimer & Safe Harbor Notice
              </Link>{' '}
              to submit an official notification to our Designated Agent.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">6.</span> Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. YT1s EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-xs text-zinc-400">
              In no event shall YT1s, its developer Jahangir, or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-syne flex items-center gap-2">
              <span className="text-red-700">7.</span> Changes to Terms
            </h2>
            <p>
              We reserve the right to revise or update these Terms of Service at any time without prior notice. Any changes will be posted on this page with an updated revision date. Your continued use of the site signifies your agreement to the modified terms.
            </p>
          </section>

          {/* Contact Section */}
          <section className="border-t border-white/10 pt-8 mt-12 space-y-3">
            <h2 className="text-xl font-bold text-white font-syne">8. Inquiries & Legal Contact</h2>
            <p>
              For legal inquiries, partnership discussions, or questions regarding these terms, please contact:
            </p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-white font-semibold">YT1s Legal Department</div>
                <div className="text-xs text-zinc-400">Designed & Developed by Jahangir</div>
                <div className="text-xs text-zinc-400">yt1s.club</div>
              </div>
              <a
                href="mailto:support@yt1s.club"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-lg shadow-red-600/20 transition-all"
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

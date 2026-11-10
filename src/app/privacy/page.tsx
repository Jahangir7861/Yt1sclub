import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, CheckCircle2, AlertCircle, Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy — Zero Log & In-Memory Streaming | YT1s',
  },
  description: 'Read the YT1s Privacy Policy. Learn about our zero-retention architecture, Google AdSense cookie compliance, and GDPR & CCPA privacy rights.',
  alternates: {
    canonical: 'https://yt1s.club/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Zero Log & In-Memory Streaming | YT1s',
    description: 'Read the YT1s Privacy Policy. Learn about our zero-retention architecture, Google AdSense cookie compliance, and GDPR & CCPA privacy rights.',
    url: 'https://yt1s.club/privacy',
    siteName: 'YT1s - yt1s.club',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'YT1s Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Zero Log & In-Memory Streaming | YT1s',
    description: 'Read the YT1s Privacy Policy. Learn about our zero-retention architecture, Google AdSense cookie compliance, and GDPR & CCPA privacy rights.',
    images: ['/opengraph-image'],
  },
};

export default function PrivacyPolicyPage() {
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

        {/* Page Header */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-[#e91700] border border-red-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e91700]" />
            <span>Google AdSense, GDPR & CCPA Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-syne mb-3">
            Privacy <span className="text-[#e91700]">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Effective Date: September 18, 2026 | Last Updated: September 2026
          </p>
        </div>

        {/* Introduction Callout */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 text-sm text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-900 mb-2">Our Core Privacy Commitment:</p>
          At <strong>YT1s (yt1s.club)</strong>, designed & developed by Jahangir, we operate on a strict <em>Zero Local Storage & Zero User Profile Tracking</em> architecture. We do not require accounts, we do not store your downloaded video files on our server disks, and we never sell your personal browsing history.
        </div>

        {/* Sections */}
        <div className="space-y-10 text-sm text-gray-600 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">1.</span> Information We Collect (Or Do Not Collect)
            </h2>
            <p>
              When you visit YT1s, you are able to use all our YouTube video downloaders, MP3 converters, thumbnail extractors, and creator analytics without any user registration. We do not ask for your name, phone number, home address, credit card numbers, or email credentials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                <div className="text-gray-900 font-semibold flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Account Required
                </div>
                <p className="text-xs text-gray-500">You can download files 100% anonymously without logging in or verifying an email.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
                <div className="text-gray-900 font-semibold flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Media Storage
                </div>
                <p className="text-xs text-gray-500">Media streams are buffered dynamically in RAM memory only and discarded instantly once delivered.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">2.</span> Video URLs and Processing Data
            </h2>
            <p>
              When you submit a YouTube URL (e.g., <code>https://youtube.com/watch?v=...</code> or <code>https://youtu.be/...</code>), our backend server receives this link purely to inspect publicly available video manifest streams (MP4 video, WebM, audio tracks, and thumbnail image URLs).
            </p>
            <p>
              We do not associate submitted video URLs with individual IP addresses in long-term databases. Stream links are generated ephemerally to facilitate direct browser downloading.
            </p>
          </section>

          {/* Section 3 - Google AdSense & DART Cookies */}
          <section className="space-y-4 bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">3.</span> Google AdSense & Third-Party Advertising
            </h2>
            <p>
              We partner with Google AdSense and third-party advertising networks to serve advertisements when you visit our website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
            <div className="space-y-2 text-xs text-gray-600">
              <p>
                <strong>Google DoubleClick DART Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on <code>yt1s.club</code>. Google&apos;s use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.
              </p>
              <p>
                <strong>Opt-Out Policy:</strong> Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network Privacy Policy at{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e91700] underline hover:text-red-300"
                >
                  https://policies.google.com/technologies/ads
                </a>{' '}
                or via the Network Advertising Initiative opt-out page at{' '}
                <a
                  href="https://optout.networkadvertising.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e91700] underline hover:text-red-300"
                >
                  optout.networkadvertising.org
                </a>.
              </p>
            </div>
          </section>

          {/* Section 4 - Log Files */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">4.</span> Standard Log Files and Web Analytics
            </h2>
            <p>
              Like almost all web servers, YT1s follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>
            <p>
              These logs are not linked to any information that is personally identifiable. The sole purpose of the information is for analyzing server uptime, administering the site, tracking user movement across our tool directory, and gathering broad demographic information for infrastructure scaling.
            </p>
          </section>

          {/* Section 5 - GDPR Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">5.</span> GDPR Data Protection Rights (EEA & UK Users)
            </h2>
            <p>
              If you are a resident of the European Economic Area (EEA) or the United Kingdom, you are entitled to the full scope of data protection rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-500">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request correction of inaccurate data.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request restriction of personal data processing.</li>
              <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data.</li>
              <li><strong>The right to data portability:</strong> You have the right to request transfer of your data to another organization.</li>
            </ul>
            <p className="text-xs text-gray-500">
              Because YT1s does not retain user databases, user accounts, or personal profiles, there is generally zero persistent identifiable data stored. If you make a request, we have one month to respond to you. Please reach out to us at{' '}
              <a href="mailto:support@yt1s.club" className="text-[#e91700] underline">support@yt1s.club</a>.
            </p>
          </section>

          {/* Section 6 - CCPA Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">6.</span> California Privacy Rights (CCPA / CPRA)
            </h2>
            <p>
              Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California consumers have specific rights:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-500">
              <li>The right to request that a business disclose the categories and specific pieces of personal data collected.</li>
              <li>The right to request deletion of personal data collected by the business.</li>
              <li><strong>Do Not Sell My Personal Information:</strong> YT1s does not sell personal information to data brokers or third parties.</li>
            </ul>
          </section>

          {/* Section 7 - COPPA */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">7.</span> Children&apos;s Online Privacy Protection Act (COPPA)
            </h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              YT1s does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* Section 8 - Cookies & Consent Management */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne flex items-center gap-2">
              <span className="text-[#e91700]">8.</span> Cookies and Browser Storage
            </h2>
            <p>
              YT1s uses browser local storage (<code>localStorage</code>) strictly to save your preferred UI language (Urdu, Spanish, Hindi, English, etc.) and your cookie consent preference choice. We do not use persistent tracking identifiers or device fingerprinting.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective official websites.
            </p>
          </section>

          {/* Section 9 - Contact & Governance */}
          <section className="border-t border-gray-200 pt-8 mt-12 space-y-3">
            <h2 className="text-xl font-bold text-gray-900 font-syne">9. Contact Data Controller</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-gray-900 font-semibold">YT1s Legal & Privacy Team</div>
                <div className="text-xs text-gray-500">Lead Architect: Jahangir</div>
                <div className="text-xs text-gray-500">Domain: yt1s.club</div>
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

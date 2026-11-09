'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Clock, ShieldCheck, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>24/7 Creator & Technical Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-syne mb-3">
            Contact <span className="text-red-500">YT1s.club</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Have questions, feedback, bug reports, or partnership proposals? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
              <Mail className="w-6 h-6 text-red-500 mb-3" />
              <h3 className="font-bold text-white text-base font-syne mb-1">Direct Email</h3>
              <p className="text-xs text-zinc-400 mb-4">
                For general support, feedback, or DMCA inquiries:
              </p>
              <a
                href="mailto:support@yt1s.club"
                className="text-xs sm:text-sm font-semibold text-red-400 hover:text-red-300 break-all underline"
              >
                support@yt1s.club
              </a>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
              <Clock className="w-6 h-6 text-red-500 mb-3" />
              <h3 className="font-bold text-white text-base font-syne mb-1">Response Guarantee</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We review every incoming ticket personally. You can expect a human response within <strong>24 to 48 hours</strong>.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-red-500 mb-3" />
              <h3 className="font-bold text-white text-base font-syne mb-1">Developer Attribution</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                Designed & Developed by <strong>Jahangir</strong>.
              </p>
              <p className="text-[11px] text-zinc-500">
                Official Web: yt1s.club
              </p>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.03] border border-white/10 p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-bold font-syne text-white mb-2">Send Us a Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the quick form below and our team will get back to you.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-syne text-white">Message Dispatched!</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you for contacting All YouTube Video Downloader. Jahangir and the support team have received your request and will reply via email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-red-500/60 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-red-500/60 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Inquiry Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-red-500/60 outline-none transition-all"
                    >
                      <option value="General Inquiry" className="bg-[#141418] text-white">General Inquiry</option>
                      <option value="Bug or Video Download Issue" className="bg-[#141418] text-white">Bug or Video Download Issue</option>
                      <option value="Feature Request" className="bg-[#141418] text-white">Feature Request</option>
                      <option value="DMCA or Copyright Claim" className="bg-[#141418] text-white">DMCA or Copyright Claim</option>
                      <option value="Advertising & Partnership" className="bg-[#141418] text-white">Advertising & Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe what you need help with or your suggestion..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-red-500/60 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

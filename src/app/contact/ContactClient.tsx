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
    <div className="w-full bg-white min-h-screen text-[#4a474c] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#e91700] border border-red-200 mb-4">
            <Mail className="w-3.5 h-3.5 text-[#e91700]" />
            <span>24/7 Creator & Technical Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-syne text-gray-900 mb-3">
            Contact <span className="text-[#e91700]">YT1s.club</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-normal">
            Have questions, feedback, bug reports, or partnership proposals? We would love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
              <Mail className="w-6 h-6 text-[#e91700] mb-3" />
              <h3 className="font-bold text-gray-900 text-base font-syne mb-1">Direct Email</h3>
              <p className="text-xs text-gray-500 mb-4">
                For general support, feedback, or inquiries:
              </p>
              <a
                href="mailto:support@yt1s.club"
                className="text-xs sm:text-sm font-semibold text-[#e91700] hover:text-black break-all underline"
              >
                support@yt1s.club
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
              <Clock className="w-6 h-6 text-[#e91700] mb-3" />
              <h3 className="font-bold text-gray-900 text-base font-syne mb-1">Response Guarantee</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We review every incoming ticket personally. You can expect a human response within <strong>24 to 48 hours</strong>.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#e91700] mb-3" />
              <h3 className="font-bold text-gray-900 text-base font-syne mb-1">Developer Attribution</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-1">
                Designed & Developed by <strong>Jahangir</strong>.
              </p>
              <p className="text-[11px] text-gray-400">
                Official Web: yt1s.club
              </p>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold font-syne text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the quick form below and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 font-syne mb-2">Message Received!</h4>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. We have received your inquiry and will respond to <strong>{formData.email}</strong> within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full bg-white border border-gray-300 focus:border-[#e91700] rounded-xl px-4 py-2.5 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-gray-300 focus:border-[#e91700] rounded-xl px-4 py-2.5 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#e91700] rounded-xl px-4 py-2.5 text-xs text-gray-900 outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="DMCA & Copyright">DMCA & Copyright Notice</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe how we can assist you..."
                      className="w-full bg-white border border-gray-300 focus:border-[#e91700] rounded-xl p-4 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#e91700] hover:bg-[#4a474c] text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
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

'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, ExternalLink, Loader2, AlertCircle, Play, Music, Sparkles, Eye, EyeOff, Shield } from 'lucide-react';
import { ToolData } from '@/lib/tools-data';
import { useLanguage } from '@/context/LanguageContext';
import { extractVideoId, parseStreamData } from '@/lib/stream-parser';

interface Props {
  tool: ToolData;
}

export default function ToolInterface({ tool }: Props) {
  const { t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video');
  const [showPreview, setShowPreview] = useState(false);

  const handleAction = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) {
      setError('Please enter a valid YouTube link or keywords.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);
    setShowPreview(false);

    try {
      const action = 'download';
      let data: any = null;

      const videoId = extractVideoId(inputVal);
      const targetUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : inputVal;

      // 1. Direct fetch to streaming resolver
      try {
        const clientRes = await fetch('https://api.ytultra.com/ikool/youtube/download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: targetUrl }),
        });
        const clientJson = await clientRes.json();
        if (clientRes.ok && clientJson.code === '0000' && clientJson.data) {
          data = {
            ok: true,
            data: parseStreamData(clientJson.data, videoId || undefined),
          };
        }
      } catch (clientErr) {
        console.warn('Direct stream resolution fallback to backend:', clientErr);
      }

      // 2. Backend API fallback
      if (!data || !data.ok) {
        try {
          const res = await fetch('/api/youtube', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, url: inputVal, topic: inputVal }),
          });
          const resJson = await res.json();
          if (res.ok && resJson.ok) {
            data = resJson;
          } else if (resJson && resJson.error) {
            data = resJson;
          }
        } catch (serverErr) {
          console.warn('Backend API call failed:', serverErr);
        }
      }

      if (!data || !data.ok) {
        setError(data?.error || 'Unable to fetch video formats. Please verify the URL and try again.');
        setLoading(false);
        return;
      }

      setResult({ mode: tool.toolMode, ...data.data });
      if (tool.toolMode === 'audio') {
        setActiveTab('audio');
      }
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Input Box Section matching reference site style */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleAction} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <input
              id="youtube-url-input"
              type="search"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                if (error) setError('');
              }}
              placeholder="Search or paste Youtube link here"
              className="w-full h-14 px-5 text-sm text-gray-900 placeholder:text-gray-400 bg-white border-2 border-[#ffc4c4] focus:border-[#e91700] rounded-xl outline-none shadow-sm transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto shrink-0 h-14 px-10 text-base font-semibold text-white bg-[#e91700] hover:bg-[#4a474c] rounded-xl shadow-[0_4px_10px_rgba(255,86,63,0.4)] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Converting...</span>
              </>
            ) : (
              <span>Convert</span>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-3.5 flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Results Drawer */}
      {result && (
        <div className="mt-8 max-w-3xl mx-auto bg-white border border-[#dfdfdf] rounded-2xl p-5 sm:p-6 shadow-[0_13px_30px_rgba(0,0,0,0.11)] text-left animate-in fade-in slide-in-from-bottom-2">
          {/* Header with thumbnail & title */}
          <div className="flex flex-col sm:flex-row gap-4 pb-5 border-b border-gray-100">
            {result.thumbnail && (
              <div className="relative w-full sm:w-44 h-28 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-black">
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
                {result.durationFormatted && (
                  <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white font-semibold">
                    {result.durationFormatted}
                  </span>
                )}
              </div>
            )}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="text-gray-900 font-bold text-base leading-snug line-clamp-2 font-syne mb-1.5">
                {result.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {result.durationFormatted && <span>Duration: {result.durationFormatted}</span>}
                {result.id && (
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="inline-flex items-center gap-1 text-[#e91700] hover:underline font-medium"
                  >
                    {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPreview ? 'Close Preview' : 'Watch Preview'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Preview */}
          {showPreview && result.id && (
            <div className="my-4 aspect-video w-full rounded-xl overflow-hidden border border-gray-200 bg-black shadow-md">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${result.id}?autoplay=1`}
                title={result.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Format Switcher Tabs */}
          <div className="flex items-center gap-2 mt-4 mb-4">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'video'
                  ? 'bg-[#e91700] text-white shadow-md shadow-red-500/30'
                  : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
            >
              <Play className="w-3.5 h-3.5" /> Video (MP4 / 4K / HD)
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'audio'
                  ? 'bg-[#e91700] text-white shadow-md shadow-red-500/30'
                  : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
            >
              <Music className="w-3.5 h-3.5" /> Audio (MP3 / 320kbps)
            </button>
          </div>

          {/* Streams Table List */}
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {(activeTab === 'video' ? result.videos : result.audios)?.length > 0 ? (
              (activeTab === 'video' ? result.videos : result.audios).map((item: any, idx: number) => {
                const is4K = /4k|2160|4320|8k/i.test(item.quality);
                const is2K = /2k|1440/i.test(item.quality);
                const is1080 = /1080/i.test(item.quality);

                const badgeClass = is4K
                  ? 'bg-purple-100 text-purple-700 border border-purple-300 font-extrabold'
                  : is2K
                  ? 'bg-cyan-100 text-cyan-800 border border-cyan-300 font-bold'
                  : is1080
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 font-medium';

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2 py-0.5 rounded text-[11px] ${badgeClass}`}>
                        {item.quality}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        {item.extension}
                      </span>
                      {item.sizeText && (
                        <span className="text-xs text-gray-400 font-mono">
                          • {item.sizeText}
                        </span>
                      )}
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#e91700] hover:bg-[#4a474c] text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-gray-500">
                No streams found for this selection.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

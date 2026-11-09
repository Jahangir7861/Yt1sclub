'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, ExternalLink, Loader2, AlertCircle, Play, Music, Sparkles, CheckCircle2, Clipboard, Eye, EyeOff, Shield } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video');
  const [showPreview, setShowPreview] = useState(false);

  const isGenerator = ['tag-gen', 'title-gen', 'desc-gen', 'script-gen'].includes(tool.toolMode);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setInputVal(text);
        if (error) setError('');
      }
    } catch {
      // ignore
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyStreamLink = (url: string, idx: number) => {
    navigator.clipboard.writeText(url);
    setCopiedLinkIndex(idx);
    setTimeout(() => setCopiedLinkIndex(null), 2000);
  };

  const handleAction = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) {
      setError(isGenerator ? 'Please enter a topic or concept.' : 'Please enter a valid YouTube URL, video ID, or channel.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);
    setShowPreview(false);

    try {
      let action = 'download';
      let type: string | undefined = undefined;

      switch (tool.toolMode) {
        case 'video':
        case 'shorts':
          action = 'download';
          break;
        case 'audio':
          action = 'download';
          setActiveTab('audio');
          break;
        case 'thumbnail':
          const vidMatch = inputVal.match(/(?:v=|\/shorts\/|\/embed\/|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          const videoId = vidMatch ? vidMatch[1] : (inputVal.trim().length === 11 ? inputVal.trim() : null);
          if (!videoId) {
            setError('Please enter a valid YouTube video link or 11-character video ID.');
            setLoading(false);
            return;
          }
          setResult({
            mode: 'thumbnail',
            videoId,
            items: [
              { label: 'Max Resolution (1080p)', dimensions: '1280 × 720', quality: 'maxresdefault' },
              { label: 'Standard Definition', dimensions: '640 × 480', quality: 'sddefault' },
              { label: 'High Quality', dimensions: '480 × 360', quality: 'hqdefault' },
              { label: 'Medium Quality', dimensions: '320 × 180', quality: 'mqdefault' },
              { label: 'Default Preview', dimensions: '120 × 90', quality: 'default' },
            ],
          });
          setLoading(false);
          return;

        case 'profile':
        case 'banner':
          action = 'profile';
          break;
        case 'tag-extract':
          action = 'tags';
          break;
        case 'tag-gen':
          action = 'generate';
          type = 'tag';
          break;
        case 'title-gen':
          action = 'generate';
          type = 'title';
          break;
        case 'desc-gen':
          action = 'generate';
          type = 'description';
          break;
        case 'desc-extract':
          action = 'description';
          break;
        case 'transcript':
          action = 'transcript';
          break;
        case 'monetization':
          action = 'monetization';
          break;
        case 'channel-id':
          action = 'channelId';
          break;
        case 'playlist-length':
          action = 'playlistLength';
          break;
        case 'engagement':
          action = 'engagement';
          break;
        case 'timestamp':
          const tsMatch = inputVal.match(/(?:v=|\/shorts\/|\/embed\/|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          const tsVid = tsMatch ? tsMatch[1] : (inputVal.trim().length === 11 ? inputVal.trim() : null);
          if (!tsVid) {
            setError('Please enter a valid YouTube video link.');
            setLoading(false);
            return;
          }
          setResult({
            mode: 'timestamp',
            videoId: tsVid,
            url: `https://youtu.be/${tsVid}?t=120s`,
            timeStr: '2:00',
            seconds: 120,
          });
          setLoading(false);
          return;

        case 'summary':
          action = 'generate';
          type = 'summary';
          break;
        case 'script-gen':
          action = 'generate';
          type = 'script';
          break;
        default:
          action = 'download';
      }

      let data: any = null;
      const isMediaDownload = ['download', 'video', 'shorts', 'audio'].includes(action) || ['video', 'shorts', 'audio'].includes(tool.toolMode);

      // 1. DIRECT CLIENT-SIDE RESOLUTION (High Speed, Full 4K/2K Options, Zero Vercel Restrictions)
      // Browsers call directly from the user's residential IP with CORS *, completely bypassing Vercel datacenter limits.
      if (isMediaDownload) {
        const videoId = extractVideoId(inputVal);
        const targetUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : inputVal;

        try {
          const clientRes = await fetch('https://api.ytultra.com/ikool/youtube/download', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
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
          console.warn('Browser direct fetch fallback failed or blocked by adblocker, falling back to backend:', clientErr);
        }
      }

      // 2. BACKEND API FALLBACK (Or primary handler for non-download creator tools)
      if (!data || !data.ok) {
        try {
          const res = await fetch('/api/youtube', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, url: inputVal, topic: inputVal, type }),
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
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Input Box Section with Glassmorphism */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleAction} className="relative group">
          <label htmlFor="youtube-url-input" className="sr-only">
            {tool.inputPlaceholder || t('placeholder') || 'YouTube Video URL or Keywords'}
          </label>
          <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-white/[0.06] border border-white/20 focus-within:border-red-500/80 focus-within:ring-2 focus-within:ring-red-500/20 shadow-2xl backdrop-blur-md transition-all">
            <div className="flex-1 flex items-center gap-2.5 px-3.5 py-1">
              <input
                id="youtube-url-input"
                type="text"
                value={inputVal}
                aria-label={tool.inputPlaceholder || t('placeholder') || 'YouTube Video URL or Keywords'}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  if (error) setError('');
                }}
                placeholder={tool.inputPlaceholder || t('placeholder')}
                className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none py-2.5"
              />

              {/* Paste Button */}
              <button
                type="button"
                onClick={handlePaste}
                title="Paste from clipboard"
                aria-label="Paste URL from clipboard"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white font-medium transition-colors shrink-0"
              >
                <Clipboard className="w-3 h-3" />
                <span>{t('pasteBtn')}</span>
              </button>

              {inputVal && (
                <button
                  type="button"
                  onClick={() => setInputVal('')}
                  aria-label="Clear input text"
                  className="text-xs text-zinc-400 hover:text-zinc-200 p-1 rounded-md"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="shrink-0 px-7 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl shadow-lg shadow-red-500/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap hover:scale-[1.01] active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('processing')}</span>
                </>
              ) : (
                <span>{tool.buttonText || t('downloadNow')}</span>
              )}
            </button>
          </div>
        </form>

        {/* Server storage assurance badge */}
        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t('cloudStreamNotice')}</span>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5 text-left animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Results Drawer */}
      {result && (
        <div className="mt-8 max-w-2xl mx-auto bg-gradient-to-b from-[#16161c] to-[#121217] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-xl text-left animate-in fade-in slide-in-from-bottom-2">
          {/* 1. VIDEO / SHORTS / AUDIO DOWNLOAD DISPLAY */}
          {(tool.toolMode === 'video' || tool.toolMode === 'shorts' || tool.toolMode === 'audio') && (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 pb-5 border-b border-white/10">
                {result.thumbnail && (
                  <div className="relative group/thumb w-full sm:w-44 h-28 shrink-0 overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={result.thumbnail}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    {result.durationFormatted && (
                      <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white font-semibold">
                        {result.durationFormatted}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-white font-bold text-base leading-snug line-clamp-2 font-syne mb-1.5">
                    {result.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    {result.durationFormatted && <span>{t('duration')}: {result.durationFormatted}</span>}
                    {result.id && (
                      <button
                        type="button"
                        aria-expanded={showPreview}
                        onClick={() => setShowPreview(!showPreview)}
                        className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-medium transition-colors"
                      >
                        {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{showPreview ? t('closePreview') : t('watchPreview')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Inline Embedded Preview Player (Watch without downloading!) */}
              {showPreview && result.id && (
                <div className="my-4 aspect-video w-full rounded-xl overflow-hidden border border-white/15 bg-black shadow-lg">
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
                      ? 'bg-red-500 text-white shadow-md shadow-red-500/30'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" /> {t('videoTab')}
                </button>
                <button
                  onClick={() => setActiveTab('audio')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeTab === 'audio'
                      ? 'bg-red-500 text-white shadow-md shadow-red-500/30'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Music className="w-3.5 h-3.5" /> {t('audioTab')}
                </button>
              </div>

              {/* Streams List */}
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {(activeTab === 'video' ? result.videos : result.audios)?.length > 0 ? (
                  (activeTab === 'video' ? result.videos : result.audios).map((item: any, idx: number) => {
                    const is4K = /4k|2160|4320|8k/i.test(item.quality);
                    const is2K = /2k|1440/i.test(item.quality);
                    const is1080 = /1080/i.test(item.quality);
                    const is720 = /720/i.test(item.quality);

                    const badgeClass = is4K
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-300 border border-pink-500/40 shadow-sm shadow-pink-500/10 font-extrabold'
                      : is2K
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/35 font-bold'
                      : is1080
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                      : is720
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/25 font-semibold'
                      : 'bg-white/10 text-white border border-white/10';

                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-syne flex items-center gap-1 ${badgeClass}`}
                          >
                            {is4K && <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />}
                            {item.quality}
                          </span>
                          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            {item.extension}
                          </span>
                          {item.sizeText && (
                            <span className="text-xs text-zinc-500 hidden sm:inline-block">({item.sizeText})</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Copy Direct Link Button */}
                          <button
                            type="button"
                            onClick={() => handleCopyStreamLink(item.url, idx)}
                            title="Copy direct CDN link"
                            aria-label="Copy direct CDN link"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white text-xs transition-colors"
                          >
                            {copiedLinkIndex === idx ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Direct Streaming Download */}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={`${(result.title || 'video').replace(/[^a-zA-Z0-9_\-\s]/g, '').trim().slice(0, 60)}.${item.extension.toLowerCase()}`}
                            className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{t('directDownload')}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-xs text-zinc-500 py-6 text-center">{t('noStreams')}</p>
                )}
              </div>

              {/* Direct CDN Stream Fast Download Note */}
              <div className="mt-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-zinc-400">
                <span className="text-amber-400 font-bold shrink-0 mt-0.5">⚡ Fast Download:</span>
                <span className="leading-relaxed">
                  Downloads stream directly from YouTube's CDN at full speed with <strong>no size limits or cutoffs</strong>. If the stream opens in your browser player, press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">Ctrl + S</kbd> or tap the player menu (⋮) &rarr; <strong>Download</strong> to save the complete video file.
                </span>
              </div>
            </div>
          )}

          {/* 2. THUMBNAIL DOWNLOADER DISPLAY */}
          {tool.toolMode === 'thumbnail' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm font-syne mb-2">
                {t('availableResolutions') || 'Available Thumbnail Resolutions:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {result.items.map((item: any) => {
                  const thumbUrl = `https://img.youtube.com/vi/${result.videoId}/${item.quality}.jpg`;
                  return (
                    <div
                      key={item.quality}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2"
                    >
                      <img
                        src={thumbUrl}
                        alt={item.label}
                        className="w-full h-32 object-cover rounded-lg bg-black/40"
                      />
                      <div className="flex items-center justify-between mt-1">
                        <div>
                          <div className="text-xs text-white font-semibold">{item.label}</div>
                          <div className="text-[11px] text-zinc-500">{item.dimensions}</div>
                        </div>
                        <a
                          href={thumbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={`thumbnail-${result.videoId}-${item.quality}.jpg`}
                          className="px-3.5 py-1.5 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                        >
                          <Download className="w-3 h-3" /> {t('saveThumbnail') || 'Save'}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. CHANNEL PROFILE & BANNER DISPLAY */}
          {(tool.toolMode === 'profile' || tool.toolMode === 'banner') && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                {result.profileUrl && (
                  <img
                    src={result.profileUrl}
                    alt={result.channelName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-500 shadow-md"
                  />
                )}
                <div>
                  <h3 className="text-white font-bold text-lg font-syne">{result.channelName}</h3>
                  <p className="text-xs text-zinc-400">Official Channel Assets</p>
                </div>
              </div>

              {tool.toolMode === 'profile' && result.profileUrl && (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-zinc-200">Full Resolution Profile Avatar (1280px)</span>
                  <a
                    href={result.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="channel-avatar.jpg"
                    className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md shadow-red-500/20"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              )}

              {tool.toolMode === 'banner' && result.logoUrl && (
                <div className="space-y-3">
                  <img
                    src={result.logoUrl}
                    alt="Channel Banner"
                    className="w-full h-36 object-cover rounded-xl border border-white/10 shadow-md"
                  />
                  <div className="flex justify-end">
                    <a
                      href={result.logoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="channel-banner.jpg"
                      className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md shadow-red-500/20"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Full Banner
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. TAGS EXTRACTOR / GENERATOR DISPLAY */}
          {(tool.toolMode === 'tag-extract' || tool.toolMode === 'tag-gen') && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-white font-syne">
                  {result.tags?.length || result.items?.length || 0} Tags Ready
                </span>
                <button
                  onClick={() => handleCopy((result.tags || result.items || []).join(', '))}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('copied') : t('copyAll')}</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1">
                {(result.tags || result.items || []).map((tag: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleCopy(tag)}
                    title="Click to copy single tag"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-red-500/20 hover:border-red-500/40 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 5. TITLE GENERATOR DISPLAY */}
          {tool.toolMode === 'title-gen' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-white font-syne">10 High-CTR Title Formulas:</span>
                <button
                  onClick={() => handleCopy((result.items || []).join('\n'))}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('copied') : t('copyAll')}</span>
                </button>
              </div>
              <div className="space-y-2">
                {result.items?.map((title: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      <span className="text-xs text-zinc-400 font-mono">{idx + 1}.</span>
                      <span className="text-xs sm:text-sm text-zinc-200 font-medium truncate">{title}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(title)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 hover:bg-white/15 transition-colors shrink-0"
                      title="Copy title"
                      aria-label={`Copy title: ${title}`}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. DESCRIPTION / SCRIPT / SUMMARY DISPLAY */}
          {(tool.toolMode === 'desc-gen' ||
            tool.toolMode === 'desc-extract' ||
            tool.toolMode === 'script-gen' ||
            tool.toolMode === 'summary') && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white font-syne">Generated Content:</span>
                <button
                  onClick={() => handleCopy(result.text || result.description || '')}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('copied') : 'Copy'}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed max-h-96 overflow-y-auto whitespace-pre-wrap font-mono">
                {result.text || result.description}
              </div>
            </div>
          )}

          {/* 7. TRANSCRIPT GENERATOR DISPLAY */}
          {tool.toolMode === 'transcript' && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white font-syne">Video Transcript & Timestamps:</span>
                <button
                  onClick={() =>
                    handleCopy(
                      (result.subtitles || result.transcripts || [])
                        .map((chunk: any) => `[${chunk.start}] ${chunk.text}`)
                        .join('\n')
                    )
                  }
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('copied') : 'Copy Transcript'}</span>
                </button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {(result.subtitles || result.transcripts || []).map((chunk: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] flex items-start gap-3 text-xs border border-white/5"
                  >
                    <span className="text-red-400 font-mono shrink-0 select-none font-semibold">[{chunk.start}]</span>
                    <span className="text-zinc-300 flex-1 leading-relaxed">{chunk.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. MONETIZATION CHECKER DISPLAY */}
          {tool.toolMode === 'monetization' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                {result.channelLogo && (
                  <img
                    src={result.channelLogo}
                    alt={result.channelName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-md"
                  />
                )}
                <div>
                  <h3 className="text-white font-bold text-lg font-syne flex items-center gap-2">
                    {result.channelName}
                    {result.monetized && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        result.monetized
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-zinc-700/50 text-zinc-300'
                      }`}
                    >
                      {result.monetized ? '✓ Monetized with AdSense' : 'Not Monetized'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-zinc-500 block mb-1">AdSense Status</span>
                  <span className="text-sm font-semibold text-white">
                    {result.monetized ? 'Active Partner (YPP)' : 'Standard'}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-zinc-500 block mb-1">Estimated RPM Range</span>
                  <span className="text-sm font-semibold text-emerald-400">$2.50 – $8.00 / 1k views</span>
                </div>
              </div>
            </div>
          )}

          {/* 9. CHANNEL ID FINDER DISPLAY */}
          {tool.toolMode === 'channel-id' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 block mb-1">Canonical Channel ID (UC...)</span>
                  <span className="text-sm sm:text-base font-mono text-white font-bold">{result.channelId}</span>
                </div>
                <button
                  onClick={() => handleCopy(result.channelId)}
                  className="px-3.5 py-2 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-xl flex items-center gap-1 shadow-md shadow-red-500/20"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
              <div className="text-xs text-zinc-400 space-y-1">
                <p>Channel Name: <span className="text-white font-medium">{result.channelTitle}</span></p>
                <p>Handle: <span className="text-white font-medium">{result.channelHandle}</span></p>
                {result.country && <p>Country: <span className="text-white font-medium">{result.country}</span></p>}
              </div>
            </div>
          )}

          {/* 10. TIMESTAMP LINK GENERATOR DISPLAY */}
          {tool.toolMode === 'timestamp' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div className="min-w-0 pr-3">
                  <span className="text-xs text-zinc-500 block mb-1">Shareable Timestamp Link</span>
                  <span className="text-sm font-mono text-red-400 truncate block">{result.url}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(result.url)}
                    className="px-3.5 py-2 bg-red-500 hover:bg-red-400 text-white text-xs font-semibold rounded-xl flex items-center gap-1 shrink-0 shadow-md shadow-red-500/20"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </button>
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

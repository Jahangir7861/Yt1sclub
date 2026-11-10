'use client';

import React from 'react';
import Link from 'next/link';
import ToolInterface from '@/components/ToolInterface';
import { TOOLS_DATA } from '@/lib/tools-data';
import {
  Download,
  CheckCircle,
  Monitor,
  Smartphone,
  Shield,
  Zap,
  Sliders,
  FileVideo,
  Music,
  Film,
  Sparkles,
  ArrowUp
} from 'lucide-react';

export default function HomePage() {
  const videoDownloader = TOOLS_DATA['youtube-video-downloader'];

  const scrollToTop = () => {
    const input = document.getElementById('youtube-url-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const featureCards = [
    {
      title: 'Efficient Video Downloads',
      desc: 'YT1s enables quick and efficient downloading of YouTube videos, allowing users to save their favorite content for offline viewing hassle-free. Its streamlined process ensures prompt access to videos, enhancing user convenience and satisfaction.',
      headerBg: '#fad2cf',
      icon: Download,
      iconColor: '#e91700',
    },
    {
      title: 'User-Friendly Interface',
      desc: 'With its simple and intuitive interface, YT1s makes the video downloading process accessible to users of all technical levels. Clear instructions and easy navigation contribute to a seamless experience, enabling even novice users to download videos effortlessly.',
      headerBg: '#ceead6',
      icon: Sliders,
      iconColor: '#1e8e3e',
    },
    {
      title: 'Cross-Platform Compatibility',
      desc: 'YT1s is compatible with various devices and operating systems, including desktop computers, laptops, smartphones, and tablets. This broad compatibility ensures users can access the platform and download videos regardless of their preferred device, enhancing accessibility and convenience.',
      headerBg: '#feefc3',
      icon: Monitor,
      iconColor: '#f9ab00',
    },
    {
      title: 'High-Quality Downloads',
      desc: 'YT1s maintains high standards for downloaded video quality, ensuring users enjoy a crisp and clear viewing experience. By preserving the integrity of the original video content, YT1s enhances user satisfaction and ensures downloaded videos meet expectations in terms of visual clarity.',
      headerBg: '#ffd5ec',
      icon: CheckCircle,
      iconColor: '#d93025',
    },
    {
      title: 'Fast Download Speeds',
      desc: 'YT1s prioritizes speed, delivering swift download times to users seeking to save YouTube videos quickly. With its efficient downloading mechanism, YT1s minimizes wait times and maximizes user convenience, allowing users to access downloaded videos promptly for offline viewing.',
      headerBg: '#d1f4ff',
      icon: Zap,
      iconColor: '#1a73e8',
    },
    {
      title: 'Security and Privacy Measures',
      desc: 'YT1s implements robust security measures to protect user data and ensure a safe browsing environment. By prioritizing user privacy and data security, YT1s instills confidence in its users, fostering trust and reliability in its platform for YouTube video downloads.',
      headerBg: '#fad2cf',
      icon: Shield,
      iconColor: '#e91700',
    },
  ];

  const faqs = [
    {
      q: 'How can I download YouTube videos quickly using YT1s?',
      a: 'Downloading videos from YouTube using YT1s YouTube Downloader is a fast and straightforward process. No additional software installation is required. Enjoy the convenience of our free YouTube downloader, which works seamlessly on all devices.',
      steps: [
        'Copy the URL of the YouTube video you want to download.',
        'Paste the link into the search box and click the convert button.',
        'Choose your preferred MP3 or MP4 format and click download.',
      ],
    },
    {
      q: 'Can I use YT1s on my Android phone to download YouTube videos?',
      a: 'Absolutely! Our YouTube video downloader is compatible with all devices, including Android mobile phones. Downloading YouTube videos is just as easy on mobile as it is on any other device.',
    },
    {
      q: 'Is YT1s compatible with all devices and operating systems?',
      a: 'Yes, YT1s is an online YouTube downloader that works seamlessly on all devices, including computers, mobile phones, and tablets, regardless of the operating system. All you need is a web browser and an internet connection.',
    },
    {
      q: 'Can I download YouTube videos for free and without limitations using YT1s?',
      a: 'Absolutely! YT1s YouTube downloader allows unlimited free downloads of YouTube videos and audio files. There are no restrictions or hidden fees.',
    },
    {
      q: 'Is it safe to download videos from YouTube using YT1s?',
      a: 'Yes, YT1s is completely safe and secure. We prioritize user privacy and security. Our downloader is free from malware and viruses, and we do not collect any user data.',
    },
    {
      q: 'What formats does YT1s support for downloading YouTube videos?',
      a: 'YT1s supports multiple formats, including MP4, 3GP, and MP3. You can also choose from various qualities, such as 720p, 1080p, 2k, 4k, and different audio bitrates.',
    },
  ];

  return (
    <div className="w-full bg-white text-[#4a474c] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-14 pb-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2 font-syne">
            YT1s: YouTube Video Downloader
          </h1>
          <p className="text-base sm:text-lg text-[#4a474c] mb-8 font-normal">
            Convert and Download Youtube Video Online Free
          </p>

          {/* Converter Tool */}
          <ToolInterface tool={videoDownloader} />
        </div>
      </section>

      {/* 2. BEST YOUTUBE VIDEO DOWNLOADER SECTION */}
      <section className="py-12 px-4 border-t border-[#dfdfdf]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-syne">
            Best Youtube Video Downloader
          </h2>

          <div className="space-y-4 text-justify sm:text-center text-sm sm:text-base leading-relaxed text-[#4a474c] max-w-3xl mx-auto">
            <p>
              <Link href="/" className="font-semibold text-gray-900 hover:text-[#e91700]">
                YT1s
              </Link>{' '}
              offers a convenient solution for downloading YouTube videos effortlessly. As an increasingly popular YouTube downloader, YT1s provides users with a seamless experience to access their favorite content offline. With its user-friendly interface and efficient functionality, YT1s has become a go-to choice for individuals seeking to save videos for later viewing without internet connectivity.
            </p>
            <p>
              One of the key advantages of YT1s is its compatibility with various devices and operating systems, making it accessible to a broad audience. Whether you&#x27;re using a desktop computer, laptop, smartphone, or tablet, YT1s ensures a smooth downloading process, catering to diverse user preferences and needs.
            </p>
            <p>
              Moreover,{' '}
              <Link href="/" className="font-semibold text-gray-900 hover:text-[#e91700]">
                YT1s
              </Link>{' '}
              prioritizes user satisfaction by continually optimizing its platform for performance and reliability. With fast download speeds and high-quality output, users can enjoy their downloaded videos without compromising on viewing experience. Additionally, YT1s adheres to strict security measures to safeguard user data and ensure a safe browsing environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURES LIST (6 CARDS) */}
      <section className="py-10 px-4 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[17px] shadow-[0_13px_30px_rgba(0,0,0,0.11)] overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1 transition-transform duration-200"
                >
                  {/* Card Header Illustration Box */}
                  <div
                    style={{ backgroundColor: card.headerBg }}
                    className="h-44 sm:h-48 flex items-center justify-center relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon style={{ color: card.iconColor }} className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 text-left flex-1 flex flex-col justify-start">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 font-syne">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a474c] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD YOUTUBE VIDEOS FOR FREE USING YT1S */}
      <section className="py-14 px-4 border-t border-[#dfdfdf] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-syne">
            Download YouTube Videos for Free using YT1s
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[#4a474c] text-justify sm:text-center max-w-3xl mx-auto mb-8">
            <Link href="/" className="font-semibold text-gray-900 hover:text-[#e91700]">
              YT1s
            </Link>{' '}
            offers users the ability to download YouTube videos in various qualities, including standard definition (SD), high definition (HD), and even 4K resolution, depending on the original video&#x27;s quality on YouTube. This versatility empowers users to choose the quality that best suits their preferences and device capabilities. One of the key advantages of YT1s&#x27; diverse quality options is the flexibility it provides to users with varying internet speeds and storage capacities. Users can opt for lower quality to conserve data or disk space, while those with high-speed connections or devices capable of displaying crisp visuals can enjoy videos in the highest resolution available. This flexibility ensures an optimal viewing experience for every user, regardless of their device or internet connection, making YT1s a versatile and user-centric platform for downloading YouTube videos.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-8">
            {['MP4', '3GP', 'MP3', 'WEBM', 'M4A'].map((fmt) => (
              <div
                key={fmt}
                className="px-5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm font-bold shadow-sm"
              >
                {fmt}
              </div>
            ))}
          </div>

          {/* Convert Now Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e91700] hover:bg-[#4a474c] text-white font-semibold text-base rounded-xl shadow-[0_4px_10px_rgba(255,86,63,0.4)] hover:shadow-none transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Convert Now</span>
          </button>
        </div>
      </section>

      {/* 5. 3 SIMPLE STEPS SECTION */}
      <section className="py-14 px-4 bg-[#fafafa] border-t border-[#dfdfdf] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10 font-syne">
            Download YouTube Videos Online in 3 Simple Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-20 h-20 rounded-full bg-[#d2e3fc] text-[#4285f4] flex items-center justify-center text-3xl font-extrabold mb-4 shadow-sm">
                1
              </div>
              <p className="text-sm sm:text-base text-[#4a474c] leading-relaxed max-w-xs">
                Enter the keyword or paste the link to the YouTube video into the input box.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-20 h-20 rounded-full bg-[#d2e3fc] text-[#4285f4] flex items-center justify-center text-3xl font-extrabold mb-4 shadow-sm">
                2
              </div>
              <p className="text-sm sm:text-base text-[#4a474c] leading-relaxed max-w-xs">
                Choose the desired MP4 or MP3 format and click the Download button.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-20 h-20 rounded-full bg-[#d2e3fc] text-[#4285f4] flex items-center justify-center text-3xl font-extrabold mb-4 shadow-sm">
                3
              </div>
              <p className="text-sm sm:text-base text-[#4a474c] leading-relaxed max-w-xs">
                Wait briefly for the conversion to complete, then download. It&#x27;s quick, simple, and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-14 px-4 border-t border-[#dfdfdf]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10 font-syne">
            FAQ - YT1s: Your Ultimate YouTube Video Downloader
          </h2>

          <div className="space-y-6 text-left max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2.5 font-syne">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-[#4a474c] leading-relaxed">
                  {faq.a}
                </p>
                {faq.steps && (
                  <ol className="list-decimal pl-5 mt-3 space-y-1.5 text-sm sm:text-base text-[#4a474c]">
                    {faq.steps.map((s, sIdx) => (
                      <li key={sIdx}>{s}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

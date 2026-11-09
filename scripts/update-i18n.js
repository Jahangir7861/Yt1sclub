const fs = require('fs');
const path = require('path');

const targetDomain = process.argv[2] || 'yt1s.tech';
const isClub = targetDomain.includes('yt1s.club');
const domainName = isClub ? 'yt1s.club' : 'yt1s.tech';
const siteBrand = isClub ? 'YT1s.club' : 'YT1s.tech';

const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
let content = fs.readFileSync(i18nPath, 'utf8');

// Replace general brand names
content = content.replace(/All YouTube Video Downloader \(Allyoutubevideodownloader\.com\)/g, `YT1s (${domainName})`);
content = content.replace(/All YouTube Video Downloader/g, 'YT1s');
content = content.replace(/allyoutubevideodownloader\.com/g, domainName);
content = content.replace(/allyoutubevideodownloader/g, 'yt1s');

// Update English hero strings & FAQs
content = content.replace(
  /heroBadge: 'AI-powered tools for YouTube creators',/,
  "heroBadge: '⚡ Free Online YouTube Video Downloader',"
);
content = content.replace(
  /heroTitle1: 'Turn Viral Videos Into',/,
  "heroTitle1: 'YT1s - YouTube Video Downloader',"
);
content = content.replace(
  /heroTitle2: 'Your Next Winning Script',/,
  "heroTitle2: 'Fast, Free & Unlimited MP4 & MP3',"
);
content = content.replace(
  /heroSubtitle: 'Paste any YouTube URL\. Download HD\/4K videos & audio, extract tags, decode hooks, structure, and pacing in seconds\.',/,
  "heroSubtitle: 'Convert and download YouTube videos in 1080p Full HD, 4K Ultra HD, and 320kbps MP3 audio for free. No software, no registration required, 100% safe & secure.',"
);

content = content.replace(
  /creatorsLove: 'Creators love All YouTube Video Downloader',/,
  "creatorsLove: 'Creators love YT1s YouTube Downloader',"
);

content = content.replace(
  /editorialTitle: 'The YouTube toolkit built for serious creators & digital marketers',/,
  "editorialTitle: 'YT1s — The Modern Standard in Free Online YouTube Downloading',"
);

content = content.replace(
  /homeFaq1Q: 'How does script analysis work\?',\s*homeFaq1A: '[^']+',/,
  "homeFaq1Q: 'Is YT1s completely free to use?',\n    homeFaq1A: 'Yes! YT1s is 100% free with no hidden charges, subscription fees, or account registration required. Enjoy unlimited downloads across all your devices.',"
);

content = content.replace(
  /homeFaq2Q: 'How do multiple AI agents collaborate to generate a script\?',\s*homeFaq2A: '[^']+',/,
  "homeFaq2Q: 'How do I download 1080p or 4K YouTube videos with sound?',\n    homeFaq2A: 'Paste your YouTube link into YT1s. Our in-memory stream multiplexer merges video and audio tracks in real-time, delivering a complete MP4 container with crisp synchronized audio.',"
);

content = content.replace(
  /homeFaq3Q: 'Can I analyze a competitor\\'s channel or videos\?',\s*homeFaq3A: '[^']+',/,
  "homeFaq3Q: 'Can I convert YouTube videos to 320kbps MP3 on YT1s?',\n    homeFaq3A: 'Yes! Switch to the Audio tab and select 320kbps. YT1s extracts the source audio stream and encodes it with high-grade LAME compression for studio-quality stereo sound.',"
);

content = content.replace(
  /homeFaq4Q: 'What video types and lengths are supported\?',\s*homeFaq4A: '[^']+',/,
  "homeFaq4Q: 'Does YT1s work on Android, iPhone, and Mac?',\n    homeFaq4A: 'Absolutely. YT1s is a browser-based web application optimized for Google Chrome, Safari, Firefox, and Edge across Windows, macOS, Android, and iOS devices.',"
);

fs.writeFileSync(i18nPath, content, 'utf8');
console.log(`Updated i18n.ts for ${domainName}`);

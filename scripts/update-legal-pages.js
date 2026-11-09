const fs = require('fs');
const path = require('path');

const targetDomain = process.argv[2] || 'yt1s.tech';
const isClub = targetDomain.includes('yt1s.club');
const domainName = isClub ? 'yt1s.club' : 'yt1s.tech';
const siteBrand = isClub ? 'YT1s.club' : 'YT1s.tech';

const pages = [
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/dmca/page.tsx',
  'src/app/admin/page.tsx',
];

for (const p of pages) {
  const fullPath = path.join(__dirname, '..', p);
  if (!fs.existsSync(fullPath)) continue;
  let content = fs.readFileSync(fullPath, 'utf8');

  content = content.replace(/All YouTube Video Downloader \(Allyoutubevideodownloader\.com\)/g, `YT1s (${domainName})`);
  content = content.replace(/All YouTube Video Downloader/g, 'YT1s');
  content = content.replace(/allyoutubevideodownloader\.com/g, domainName);
  content = content.replace(/support@allyoutubevideodownloader\.com/g, `support@${domainName}`);
  content = content.replace(/contact@allyoutubevideodownloader\.com/g, `contact@${domainName}`);
  content = content.replace(/dmca@allyoutubevideodownloader\.com/g, `dmca@${domainName}`);
  content = content.replace(/privacy@allyoutubevideodownloader\.com/g, `privacy@${domainName}`);
  content = content.replace(/https:\/\/allyoutubevideodownloader\.com/g, `https://${domainName}`);

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${p}`);
}

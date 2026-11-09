const fs = require('fs');
const path = require('path');

const targetDomain = process.argv[2] || 'yt1s.tech';
const isClub = targetDomain.includes('yt1s.club');
const domainName = isClub ? 'yt1s.club' : 'yt1s.tech';

const toolsDataPath = path.join(__dirname, '../src/lib/tools-data.ts');
let content = fs.readFileSync(toolsDataPath, 'utf8');

content = content.replace(/All YouTube Video Downloader/g, 'YT1s');
content = content.replace(/allyoutubevideodownloader\.com/g, domainName);
content = content.replace(/allyoutubevideodownloader/g, 'yt1s');

fs.writeFileSync(toolsDataPath, content, 'utf8');
console.log(`Updated tools-data.ts for ${domainName}`);

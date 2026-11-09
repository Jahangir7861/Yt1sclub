import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'YT1s - YouTube Video Downloader (yt1s.club)';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0e0e12 0%, #1f0808 50%, #0e0e12 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            ▶
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff' }}>
              YT1s
            </span>
            <span style={{ fontSize: '18px', color: '#ef4444', fontWeight: 600 }}>
              yt1s.club
            </span>
          </div>
        </div>

        <div
          style={{
            fontSize: '50px',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '1000px',
            marginBottom: '20px',
          }}
        >
          Download YouTube Videos in 4K, 1080p HD & MP3
        </div>

        <div
          style={{
            fontSize: '22px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '850px',
            marginBottom: '40px',
          }}
        >
          Zero Disk Storage • In-Memory High-Speed Streaming • No Sign-up Required
        </div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {['4K Ultra HD', '1080p 60fps', '320kbps MP3', 'Shorts & Thumbnails'].map((item) => (
            <div
              key={item}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

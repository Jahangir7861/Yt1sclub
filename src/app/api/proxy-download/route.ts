import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mediaUrl = searchParams.get('url');

    if (!mediaUrl) {
      return new NextResponse('Missing url parameter', { status: 400 });
    }

    // On Vercel / serverless platforms, streaming large videos through a Lambda function
    // hits the strict 10s execution limit and 4.5MB payload limit, truncating downloads.
    // An HTTP 307 redirect immediately forwards the browser directly to Google's CDN stream,
    // allowing the client to download the 100% full file at maximum connection bandwidth.
    return NextResponse.redirect(mediaUrl, 307);
  } catch (err: any) {
    return new NextResponse(err?.message || 'Redirect failed', { status: 500 });
  }
}

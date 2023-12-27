import { NextResponse } from 'next/server';

const endpoint = '/trends';

export async function GET(request: Request) {
  const url = process.env.BACKEND_URL || 'error';
  const res = await fetch(url + endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return NextResponse.json(data.data);
}

export async function POST(request: Request) {
  const { article } = await request.json();

  const url = process.env.BACKEND_URL || 'error';

  const res = await fetch(url + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: article.title,
      text: article.text,
      video: article.video,
      image: article.image,
      sound: article.sound,
      youtube: article.youtube,
    }),
  });
}

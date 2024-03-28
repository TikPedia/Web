const endpoint = '/articles';

export async function GET() {
  const url = process.env.BACKEND_URL || 'error';
  const res = await fetch(url + endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  // @ts-ignore
  return Response.json(data.data);
}

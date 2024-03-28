import generator from 'generate-password';

const PASSKEY_LENGTH = 10;

async function createPassKey(): Promise<string> {
  return generator.generate({
    length: PASSKEY_LENGTH,
    numbers: true,
  });
}
async function getUserData(token: string) {
  const res = await fetch('https://api.supabase.co/rest/v1/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function GET(request: Request) {
  const token = request.headers.get('Authorization');

  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  // check if user is logged in or not
  // get all data from the database
  const user = await getUserData(token);

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  // create a secret password
  const passKey = await createPassKey();

  const userDataText = JSON.stringify(user);

  // save the data in a file
  // zip the file protected with the secret password
  // store in the database the secret password
  // send the file to the user
  // delete the file from the server
}

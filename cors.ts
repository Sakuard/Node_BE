console.log(`import cors.js`)

import { IncomingMessage, ServerResponse } from 'http';

const whiteLists: string[] = [
  // 'http://127.0.0.1:5173',
  // 'http://localhost:5173'
]

const handleCors = (req: IncomingMessage, res: ServerResponse, whiteLists: string[]) => {
  console.log(`Executing handleCors()...`)
  const origin = req.headers.origin;
  if (whiteLists.includes(origin ?? '')) {
    res.setHeader('Access-Control-Allow-Origin', origin ?? '');
  }
  res.setHeader('Access-Control-Allow-Origin', origin ?? '');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
}

export default { whiteLists, handleCors };

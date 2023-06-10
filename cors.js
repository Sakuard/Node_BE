console.log(`import cors.js`)

const whiteLists = [
  // 'http://127.0.0.1:5173',
  // 'http://localhost:5173'
]
exports.whiteLists = whiteLists;

exports.handleCors = function (req, res, whiteLists) {
  console.log(`Executing handleCors()...`)
  const origin = req.headers.origin;
  if (whiteLists.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  // Handle Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
}

// module.exports = { whiteLists, handleCors };
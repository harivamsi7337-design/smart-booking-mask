export default async function handler(req, res) {
  const id = req.query.id;

  const html = `
  <html>
  <head><title>Form Loaded</title></head>
  <body>
    <h1>Form Loaded</h1>
    <p>Your Form ID: <b>${id}</b></p>
  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(html);
}

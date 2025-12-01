export async function GET(req, { params }) {
  const id = params.id;

  const html = `
    <html>
    <head><title>Form Loaded</title></head>
    <body>
      <h1>Form Loaded</h1>
      <p>Your Form ID: <b>${id}</b></p>
    </body>
    </html>
  `;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html" }
  });
}

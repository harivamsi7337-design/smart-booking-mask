// api/form/[id].js
// Simple Vercel Serverless Function that renders a tiny HTML page
// showing the form ID from the URL:  /form/S12345

export default function handler(req, res) {
  // Vercel parses the dynamic part [id] into req.query.id
  const { id } = req.query || {};

  const safeId = typeof id === "string" ? id : "UNKNOWN";

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Form Loaded</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        margin: 0;
        padding: 2rem;
        background: #f5f5f5;
      }
      .card {
        max-width: 640px;
        margin: 2rem auto;
        padding: 2rem 2.5rem;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      }
      h1 {
        margin-top: 0;
        font-size: 1.75rem;
      }
      p {
        font-size: 1rem;
        margin: 0.25rem 0;
      }
      .id {
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Form Loaded</h1>
      <p>Your Form ID: <span class="id">${safeId}</span></p>
    </div>
  </body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(html);
}

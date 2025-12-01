export async function GET(request, { params }) {
  const id = params.id;

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Form Loaded</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #f5f5f5;
        }
        .wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          background: #ffffff;
          padding: 24px 20px;
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
          width: 100%;
          max-width: 420px;
        }
        h1 {
          margin: 0 0 8px;
          font-size: 22px;
        }
        p {
          margin: 4px 0;
          font-size: 14px;
        }
        .id {
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="wrap">
        <div class="card">
          <h1>Form Loaded ✅</h1>
          <p>Your Form ID:</p>
          <p class="id">${id}</p>
          <p style="margin-top:12px;font-size:13px;color:#64748b;">
            This HTML is coming from <code>/api/form/${id}</code> on Vercel.
          </p>
        </div>
      </div>
    </body>
  </html>
  `;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

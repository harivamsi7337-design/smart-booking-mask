async function fetchFormHtml(id) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window === "undefined"
      ? process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : ""
      : "");

  const apiUrl = baseUrl
    ? `${baseUrl}/api/form/${id}`
    : `/api/form/${id}`;

  const res = await fetch(apiUrl, {
    cache: "no-store"
  });

  if (!res.ok) {
    return `<html><body><h1>Form error</h1><p>Could not load form for ID: ${id}</p></body></html>`;
  }

  return res.text();
}

export default async function FormPage({ params }) {
  const { id } = params;
  const html = await fetchFormHtml(id);

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: 0
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

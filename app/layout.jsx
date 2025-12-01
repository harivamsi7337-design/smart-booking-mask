export const metadata = {
  title: "Smart Booking Mask",
  description: "Test form mask UI"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "#f5f5f5"
        }}
      >
        {children}
      </body>
    </html>
  );
}

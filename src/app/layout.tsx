import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hande Naz Kavas",
  description: "Portfolio of Hande Naz Kavas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="google-sans antialiased">
        {children}
      </body>
    </html>
  );
}
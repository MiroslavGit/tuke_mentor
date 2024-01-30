import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUKE mentor",
  description: "Pre TUKE študentov od TUKE študenta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Include your meta tags, stylesheets, and other head elements here */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

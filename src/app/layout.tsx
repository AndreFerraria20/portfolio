import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const miloner = localFont({
  src: [
    {
      path: "./fonts/Miloner.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/MilonerBold.woff2",
      weight: "700",
      style: "normal"
    }
  ], variable: "--font-miloner",
});


const sequelSans = localFont({
  src: [
    {
      path: "./fonts/SequelSans.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/SequelSansBold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-sequel-sans",
});


export const metadata: Metadata = {
  title: "André Ferraria",
  description: "André Ferraria's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${sequelSans.variable} ${miloner.variable} antialiased bg-secundary w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

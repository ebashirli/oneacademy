import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/header";

const axiforma = localFont({
  src: [
    { path: "./fonts/Axiforma-Regular.woff", style: "normal", weight: "400" },
    { path: "./fonts/Axiforma-Bold.woff", style: "normal", weight: "700" },
    { path: "./fonts/Axiforma-Italic.woff", style: "italic", weight: "400" },
    { path: "./fonts/Axiforma-Black.woff", style: "normal", weight: "900" },
    {
      path: "./fonts/Axiforma-BlackItalic.woff",
      style: "italic",
      weight: "900",
    },
    {
      path: "./fonts/Axiforma-BoldItalic.woff",
      style: "italic",
      weight: "700",
    },
    { path: "./fonts/Axiforma-Book.woff", style: "normal", weight: "300" },
    {
      path: "./fonts/Axiforma-BookItalic.woff",
      style: "italic",
      weight: "300",
    },
    { path: "./fonts/Axiforma-ExtraBold.woff", style: "normal", weight: "800" },
    {
      path: "./fonts/Axiforma-ExtraBoldItalic.woff",
      style: "italic",
      weight: "800",
    },
    { path: "./fonts/Axiforma-Heavy.woff", style: "normal", weight: "600" },
    {
      path: "./fonts/Axiforma-HeavyItalic.woff",
      style: "italic",
      weight: "600",
    },
    { path: "./fonts/Axiforma-Light.woff", style: "normal", weight: "200" },
    {
      path: "./fonts/Axiforma-LightItalic.woff",
      style: "italic",
      weight: "200",
    },
    { path: "./fonts/Axiforma-Medium.woff", style: "normal", weight: "500" },
    {
      path: "./fonts/Axiforma-MediumItalic.woff",
      style: "italic",
      weight: "500",
    },
    { path: "./fonts/Axiforma-SemiBold.woff", style: "normal", weight: "600" },
    {
      path: "./fonts/Axiforma-SemiBoldItalic.woff",
      style: "italic",
      weight: "600",
    },
  ],
  variable: "--font-axiforma",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${axiforma.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

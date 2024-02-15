import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/(website)/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReachOut Starter Kit",
  description: "Next.js starter kit for content and marketing websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}

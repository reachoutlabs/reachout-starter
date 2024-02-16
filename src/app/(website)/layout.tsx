import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provides';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Header />
        <body className={inter.className}>{children}</body>
        <Footer />
      </Providers>
    </html>
  );
}

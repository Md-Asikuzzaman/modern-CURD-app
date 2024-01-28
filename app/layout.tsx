import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import StackProvider from './components/StackProvider';
import ToasterProvider from './components/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern CURD Application',
  description: 'Read, Write, Update & Delete | by using Next.js and Prisma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={inter.className}>
        <StackProvider>
          <ToasterProvider>
            <Navbar />
            <div className='container w-full pt-12'>{children}</div>
          </ToasterProvider>
        </StackProvider>
      </body>
    </html>
  );
}

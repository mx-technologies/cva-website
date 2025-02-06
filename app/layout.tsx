import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import ReduxProvider from '@/redux/store/redux-provider';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Christ's Victorious Army",
  description: 'Transforming Lives Through God’s Word',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <head>
          <link rel='icon' href='/logo.png' sizes='any' />
        </head>
        <body className={`${playfairDisplay.variable} antialiased`}>
          {children}
          <ToastContainer />
        </body>
      </html>
    </ReduxProvider>
  );
}

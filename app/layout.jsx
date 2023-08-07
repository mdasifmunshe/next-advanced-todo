import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import AuthProvider from './AuthProvider';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Advanced Todo',
  description: 'Created by Asif Munshi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <Providers>
            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/*  Header */}
                <Header />
                <main>
                  <div className="max-w-9xl mx-auto w-full px-2 pb-8 pt-4 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

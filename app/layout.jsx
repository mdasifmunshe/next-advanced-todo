import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Advanced Todo',
  description: 'Created by Asif Munshi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/*  Header */}
              <Header />
              <main>
                <div className="mx-auto w-full max-w-9xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

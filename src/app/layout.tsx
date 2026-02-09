import type { Metadata } from 'next';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link'
import Navbar from './components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { ptBR } from '@clerk/localizations';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SE7- App',
  description: 'Next.js 13.4.4 + TypeScript + Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <main className='bg-slate-700 h-screen p-16'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>

  )
}

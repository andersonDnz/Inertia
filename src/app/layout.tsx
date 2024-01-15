
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Navbar from '../app/components/layout/navbar'
import Footer from './components/layout/footer'

import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inertia',
  description: 'Site Informativo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Navbar />
        <main className='min-h-screen flex flex-col'>
          {children}

        </main>
        <Footer />
      </body>
    </html>
  )
}

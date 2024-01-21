
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'


import './globals.css'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

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
        <main className='min-h-screen flex-1 flex-col w-full items-center justify-center  text-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

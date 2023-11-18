import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import '@/styles/main.css';
import '@/styles/fonts/fontawesome-free-6.4.2/fontawesome-free-6.4.2-web/css/all.min.css';
import Image from 'next/image';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CAKES-SHOP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

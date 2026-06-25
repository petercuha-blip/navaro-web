import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Navaro – profesionálne cenové ponuky s AI',
  description:
    'Vytvárajte profesionálne cenové ponuky s pomocou AI za pár minút. Exportujte ako PDF, odošlite zákazníkovi a sledujte jeho rozhodnutie v reálnom čase.',
  openGraph: {
    title: 'Navaro – profesionálne cenové ponuky s AI',
    description:
      'Vytvárajte profesionálne cenové ponuky s pomocou AI za pár minút. Exportujte ako PDF, odošlite zákazníkovi a sledujte jeho rozhodnutie v reálnom čase.',
    url: 'https://navaro.pro',
    siteName: 'Navaro',
    locale: 'sk_SK',
    type: 'website',
  },
  alternates: {
    canonical: 'https://navaro.pro',
    languages: {
      'sk': 'https://navaro.pro',
      'en': 'https://navaro.pro/en',
      'pl': 'https://navaro.pro/pl',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

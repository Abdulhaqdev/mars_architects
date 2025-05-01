import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})



export const metadata: Metadata = {
  title: "MARS Architects",
  description: "Design and Architecture Studio",
}
interface ChildPops {
  children: React.ReactNode
}

interface Props  {
  params: {
    lng: string
  }
}
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
export default function RootLayout({
  children, params: { lng },
}: ChildPops & Props) {
  return (
    <html lang={lng} dir={dir(lng)} className={inter.variable}>
      <body className="antialiased bg-[#101420]">{children}</body>
    </html>
  )
}


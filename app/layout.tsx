import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gloria Li',
  description: 'Welcome to my personal website!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

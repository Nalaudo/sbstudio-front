import React from 'react'
import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>SB Estudio Contable</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

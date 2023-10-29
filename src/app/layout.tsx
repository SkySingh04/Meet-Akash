import './globals.css'
import { AOSInit } from './components/aos'
import type { Metadata } from 'next'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Roboto } from 'next/font/google'

const roboto =  Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sky Singh',
  description: 'Just A Healthy Dose Of Akash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  data-theme="dark" lang="en">
      <AOSInit />
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          
      </head>
      <body className={` ${roboto.className}`}>{children}
      </body>
    </html>
  )
}

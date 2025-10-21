import './globals.css';
import { AOSInit } from './components/aos';
import type { Metadata } from 'next';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sky Singh',
  description: "DevOps @FinalRoundAI | LFX’25 LitmusChaos | GSoC’24 Keploy | LIFT ’25 | KCNA | Finalist HackGlobal 🇸🇬 | Lead at Point Blank | 6x Hackathon Winner | Ex-Aspora, CloudSek, Embeddings Co, BoleSale, SwipeGen, CodingZen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" className="dark" lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vSNm_GBL-Y_66iyZPuuihkLBKHwYQEPEfrnW_w80dXE"
        />        
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="DevOps @FinalRoundAI | LFX’25 LitmusChaos | GSoC’24 Keploy | LIFT ’25 | KCNA | Finalist HackGlobal 🇸🇬 | Lead at Point Blank | 6x Hackathon Winner | Ex-Aspora, CloudSek, Embeddings Co, BoleSale, SwipeGen, CodingZen" />
        <meta name="author" content="Sky Singh" />

        {/* Open Graph Meta Tags (for Social Sharing) */}
        <meta property="og:title" content="Sky Singh" />
        <meta
          property="og:description"
          content="DevOps @FinalRoundAI | LFX’25 LitmusChaos | GSoC’24 Keploy | LIFT ’25 | KCNA | Finalist HackGlobal 🇸🇬 | Lead at Point Blank | 6x Hackathon Winner | Ex-Aspora, CloudSek, Embeddings Co, BoleSale, SwipeGen, CodingZen"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skysingh04.vercel.app/" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D5603AQHX_oacQxs4hQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732515806365?e=1740009600&v=beta&t=lEDC6fNA7X7fZlDQp7mD8FISxaDCU-9m2biTPiP52S8"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={`${roboto.className}`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}

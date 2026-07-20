import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_TC, Lora, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientProviders from "./components/ClientProviders";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

// Hero「Lily Wang」專用品牌字，僅載 600 一個字重
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_URL = 'https://lily-portfolio-895d4.web.app';
const OG_IMAGE = `${SITE_URL}/ProfilePic.jpg`;
const TITLE = "Lily Wang | Product Builder";
const DESCRIPTION = "Portfolio of Lily Wang, a Product Manager with 5+ years building AI/ML-powered SaaS and mobile products. View case studies, work experience, and skills.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    images: [{ url: OG_IMAGE }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem('portfolio-color-mode');var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-joy-color-scheme',d?'dark':'light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${notoSansTC.variable} ${lora.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ClientProviders>
          <div id="scroll-sentinel" aria-hidden="true" style={{ height: '1px', pointerEvents: 'none' }} />
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

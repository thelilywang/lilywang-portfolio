import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientProviders from "./components/ClientProviders";

export const metadata: Metadata = {
  title: "Lily Wang | Product Manager",
  description: "Portfolio of Lily Wang, a Product Manager with 5+ years building AI/ML-powered SaaS and mobile products. View case studies, work experience, and skills.",
};

const THEME_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem('portfolio-color-mode');var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-joy-color-scheme',d?'dark':'light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ClientProviders>
          <div id="scroll-sentinel" aria-hidden="true" style={{ height: '1px', pointerEvents: 'none' }} />
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

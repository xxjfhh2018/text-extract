import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation'; // 使用新版的 usePathname 钩子监听路由变化

const GA_TRACKING_ID = 'G-X5RR5RRQB2'; // 替换为你的 Google Analytics 跟踪 ID



export const metadata = {
  title: {
    default: 'Accurate Text Extraction from Images in 2024 | Textract.tools',
    template: '%s | Textract.tools',
  },
  description: 'Textract.tools provides tools to extract text from images or OCR documents or images,Helps you convert images to text.',
  keywords: 'Text extraction from images',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return (
    <html lang="en">
           <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
                <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />

      </body>
      
    </html>
  );
}

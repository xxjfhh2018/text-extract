import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: {
    default: 'Accurate Text Extraction from Images in 2024 | Textract.tools',
    template: '%s | Textract.tools',
  },
  description: 'Textract.tools provides tools to extract text from images or OCR documents or images,Helps you convert images to text.',
  keywords: 'Text extraction from images',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-6ZHK5PTNQX" />
    </html>
  );
}

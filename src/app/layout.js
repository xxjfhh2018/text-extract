import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from 'next/navigation'; // 使用新版的 usePathname 钩子监听路由变化
import GoogleAnalytics from '../components/GoogleAnalytics.js';

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
  const google_tag = `${process.env.GOOGLE_ANLYTICS_ID}`;
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        {/* 添加 Google Analytics 客户端组件 */}
        <GoogleAnalytics trackingId="google_tag" />
        <Header />
        <main>{children}</main>
        <Footer />

      </body>
      
    </html>
  );
}

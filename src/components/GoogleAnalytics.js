// components/GoogleAnalytics.js
'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics({ trackingId }) {
  useEffect(() => {
    // 如果页面加载时 trackingId 存在，则初始化 Google Analytics
    if (window && trackingId) {
      window.gtag('config', trackingId, {
        page_path: window.location.pathname,
      });
    }
  }, [trackingId]);

  return (
    <>
      {/* 插入 Google Analytics 的 script 标签 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

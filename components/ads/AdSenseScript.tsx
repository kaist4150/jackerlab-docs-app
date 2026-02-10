'use client';

import Script from 'next/script';

export default function AdSenseScript() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4828862970866548"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="adsense-auto-ads-config" strategy="afterInteractive">
        {`(window.adsbygoogle = window.adsbygoogle || []).push({ overlays: {bottom: true} });`}
      </Script>
    </>
  );
}

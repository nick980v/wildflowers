import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata = {
  title: "Wild flowers Community",
  description: "Wild flowers community",
  icons: {
    icon: "/White_flower.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://use.typekit.net/tav0gkp.css"
          as="style"
        />
        <link rel="stylesheet" href="https://use.typekit.net/tav0gkp.css" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17139336367"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17139336367');
          `}
        </Script>
      </head>
      <Analytics />
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}

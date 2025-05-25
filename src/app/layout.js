import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      </head>
      <Analytics />
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}

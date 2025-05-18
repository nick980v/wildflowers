import "./globals.css";

export const metadata = {
  title: "Wild flowers",
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
      <body>{children}</body>
    </html>
  );
}

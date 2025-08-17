import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Script from "next/script"

export const metadata = {
  title: "Download All GitHub Repos - Bulk Repository Downloader Tool",
  description:
    "Free tool to download all public GitHub repositories at once. Bulk download GitHub repos with one click. Includes CLI instructions for private repositories.",
  keywords:
    "download all github repos, bulk download github repositories, github repo downloader, download multiple github repos, github bulk download tool",
  openGraph: {
    title: "Download All GitHub Repos - Bulk Repository Downloader",
    description:
      "Free tool to download all public GitHub repositories at once. Bulk download GitHub repos with one click.",
    url: "https://ezzcodeezzlife.github.io/download-all-github-repos/",
    siteName: "GitHub Repo Downloader",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download All GitHub Repos - Bulk Repository Downloader",
    description: "Free tool to download all public GitHub repositories at once.",
  },
  robots: "index, follow",
  generator: "Next.js",
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"
          strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>)
  );
}

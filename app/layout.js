import "./globals.css";
import NavBar from "./components/navigation";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SpeedInsights />
        <title>WayForward</title>
        <Script src="/snippets/nav.js" type="text/javascript" />
          <meta property="og:title" content="WayForward" />
          <meta property="og:description" content="Description Here" />
          <meta property="og:image" content="image_url_here" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

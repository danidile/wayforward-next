import "./globals.css";
import NavBar from "./components/navigation";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <SpeedInsights/>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />
      <link href='https://fonts.googleapis.com/css2?family=Montserrat' rel='stylesheet' type='text/css'/>

      </head>

      <body >
      <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
    
  );
}

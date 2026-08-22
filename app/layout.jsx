import "./globals.css"
import Nav from "./components/nav"
import Footer from "./components/footer"
import Backdrop from "./components/backdrop"
import { Eczar, Mukta } from "next/font/google"

const eczar = Eczar({ subsets: ["latin"], weight: "400", variable: "--font-eczar" })
const mukta = Mukta({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-mukta" })

export const metadata = {
  title: "ubiquitous",
  description: "Welcome to my portfolio",
  icons: {
    icon: [{ url: "Logo Files/For Web/Favicons/browser.png", type:"image/png" }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${eczar.variable} ${mukta.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        <Backdrop>{children}</Backdrop>

        <Footer />
      </body>
    </html>
  )
}

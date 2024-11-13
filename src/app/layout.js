import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://virtualxcel.in"),
  title: {
    default: "Virtualxcel",
    template: "%s | Virtualxcel",
  },
  description: "Discover the ultimate coworking experience at Virtualxcel.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="#fcab14" showSpinner={false} />
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}

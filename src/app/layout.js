import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import TawkToChat from "@/components/TalkToChat";

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
      <head>
        <meta
          name="google-site-verification"
          content="4QP5sU8e94-iZECe8pfBrj__ums-nt3y-9LELy8GVOA"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16609409855"
          strategy="afterInteractive"
        />
        <Script id="google-conversion-gtag" strategy="lazyOnLoad">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16609409855');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KQWV7CENMY"
          strategy="lazyOnLoad"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQWV7CENMY');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T55KLQJJ');
          `}
        </Script>
        {/* clarity script*/}
        <Script
          id="text-script"
          type="text/javascript"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ngvpjxtrl3");  
        `}
        </Script>
      </head>
      <body className={poppins.className}>
        <NextTopLoader color="#fcab14" showSpinner={false} />
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
        <TawkToChat />
      </body>
    </html>
  );
}

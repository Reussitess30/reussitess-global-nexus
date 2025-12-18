import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RÉUSSITESS Global Nexus - 26 Boutiques Amazon • 14 Pays",
  description:
    "Guadeloupe → France USA Brésil Canada UK - Vos Boutiques Amazon personnelles",
  openGraph: {
    title: "REUSSITESS Global Nexus",
    description: "26 Boutiques Amazon Guadeloupe 14 Pays",
    images: "/guadeloupe-26-boutiques.jpg",
    url: "https://reussitess-global-nexus-jfgk.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* PIXEL 14 PAYS INVISIBLE */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            // Track Guadeloupe → 14 pays
            gtag('event', 'guadeloupe_14pays', {
              countries: ['FR','GP','US','BR','CA','GB','DE','ES','IT','PT','MX','AR','CO','PE','CL']
            });
          `,
          }}
        />

        {/* Schema.org Amazon IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OnlineStore",
              name: "REUSSITESS Global Nexus",
              url: "https://reussitess-global-nexus-jfgk.vercel.app/",
              areaServed: [
                "FR",
                "GP",
                "US",
                "BR",
                "CA",
                "GB",
                "DE",
                "ES",
                "IT",
                "PT",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "26 Boutiques Amazon Guadeloupe",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

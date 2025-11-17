import './globals.css';
import AutoUpdate from './components/AutoUpdate';

export const metadata = {
  title: 'Reussitess® Global Nexus | 26 Boutiques Amazon dans 14 Pays',
  description: 'Hub central connectant 26 boutiques Amazon à travers 14 pays',
  manifest: '/manifest.json',
  themeColor: '#5b21b6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Reussitess Global',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">
          {children}
          <AutoUpdate />
      </body>
    </html>
  );
}

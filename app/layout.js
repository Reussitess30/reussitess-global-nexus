import './globals.css';

export const metadata = {
  title: 'Reussitess Global Nexus',
  description: 'Hub Central du Réseau Mondial Reussitess.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

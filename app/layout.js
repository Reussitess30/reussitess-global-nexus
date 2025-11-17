import './globals.css';

export const metadata = {
  title: 'Reussitess Global Nexus',
  description: 'Hub Central du Réseau Mondial Reussitess.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Le contenu de app/page.js (NexusDashboard) sera affiché ici grâce à la prop {children} */}
        {children}
      </body>
    </html>
  );
}

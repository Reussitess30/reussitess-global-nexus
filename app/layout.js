import '../styles/globals.css';

export const metadata = {
  title: 'Reussitess',
  description: 'Reussitess Global Nexus'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import {Links, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import appStyles from './styles/app.css?url';

/**
 * Racine Remix / Hydrogen — landing KYRO (pas de données Shopify requises).
 * Charge les polices Google + la feuille de style de la landing.
 */
export const links = () => [
  {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
  {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'},
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=Jost:wght@300;400&family=Newsreader:ital,opsz@1,6..72&display=swap',
  },
  {rel: 'stylesheet', href: appStyles},
];

export default function App() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

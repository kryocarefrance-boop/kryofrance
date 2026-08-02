import {useEffect} from 'react';
// Vite importe le HTML de la landing comme chaîne brute (?raw).
import landing from '../landing.html?raw';

export const meta = () => [
  {title: 'KYRO — Réveillez le muscle profond que vos traitements ont oublié'},
  {
    name: 'description',
    content:
      "KYRO est un appareil d'électrostimulation profonde (NMES) conçu pour réactiver le muscle stabilisateur du bas du dos, à domicile, 15 minutes par jour. Garantie 90 jours.",
  },
];

export default function Index() {
  // Le HTML est statique ; on ré-attache ici le JS d'origine (compte à rebours,
  // année, boutons d'achat) côté client, après le montage.
  useEffect(() => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    let timer;
    const cd = document.getElementById('countdown');
    if (cd) {
      const cells = {
        h: cd.querySelector('[data-cd="h"]'),
        m: cd.querySelector('[data-cd="m"]'),
        s: cd.querySelector('[data-cd="s"]'),
      };
      const pad = (n) => String(n).padStart(2, '0');
      const tick = () => {
        const now = new Date();
        const end = new Date(now);
        end.setHours(24, 0, 0, 0); // prochain minuit
        const s = Math.max(0, Math.floor((end - now) / 1000));
        cells.h.textContent = pad(Math.floor(s / 3600));
        cells.m.textContent = pad(Math.floor((s % 3600) / 60));
        cells.s.textContent = pad(s % 60);
      };
      tick();
      timer = setInterval(tick, 1000);
    }

    const onBuy = (e) => {
      e.preventDefault();
      // À brancher sur le vrai tunnel (Shopify cart / Stripe) lors de l'intégration.
      window.alert('Maquette : brancher ici le tunnel de commande (Shopify / Stripe).');
    };
    const buys = Array.from(document.querySelectorAll('[data-buy]'));
    buys.forEach((b) => b.addEventListener('click', onBuy));

    return () => {
      if (timer) clearInterval(timer);
      buys.forEach((b) => b.removeEventListener('click', onBuy));
    };
  }, []);

  return <div dangerouslySetInnerHTML={{__html: landing}} />;
}

/* KYRO — interactions légères (exercice marketing) */
(function () {
  'use strict';

  // Année courante dans le footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Compte à rebours jusqu'à minuit (urgence "fin de l'offre ce soir")
  var cd = document.getElementById('countdown');
  if (cd) {
    var cells = {
      h: cd.querySelector('[data-cd="h"]'),
      m: cd.querySelector('[data-cd="m"]'),
      s: cd.querySelector('[data-cd="s"]')
    };
    var pad = function (n) { return String(n).padStart(2, '0'); };

    var tick = function () {
      var now = new Date();
      var end = new Date(now);
      end.setHours(24, 0, 0, 0);           // prochain minuit
      var diff = Math.max(0, end - now);
      var s = Math.floor(diff / 1000);
      cells.h.textContent = pad(Math.floor(s / 3600));
      cells.m.textContent = pad(Math.floor((s % 3600) / 60));
      cells.s.textContent = pad(s % 60);
    };
    tick();
    setInterval(tick, 1000);
  }

  // Boutons d'achat (maquette — pas de vrai panier dans l'exercice)
  document.querySelectorAll('[data-buy]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // À brancher sur le vrai tunnel (Shopify, Stripe, etc.) lors de l'intégration.
      window.alert('Maquette : brancher ici le tunnel de commande (Shopify / Stripe).');
    });
  });
})();

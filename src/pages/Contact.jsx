import { useState } from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/site';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setMessage(`${label} copié !`);
      setTimeout(() => setMessage(''), 2000);
    } catch (error) {
      setMessage('Copie impossible sur ce navigateur.');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez BE WEB pour un site vitrine sur mesure : téléphone, email, adresse à Tournai."
      />
      <section className="bg-gray-50 py-16">
        <div className="container-base">
          <span className="badge">Contact</span>
          <h1 className="mt-3 text-4xl font-semibold text-dark">Parlons de votre projet</h1>
          <p className="section-subtitle">
            Disponible du lundi au dimanche de 7h à 20h pour vous accompagner rapidement.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-base grid gap-8 lg:grid-cols-2">
          <div className="card space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Nos coordonnées</h2>
            <p className="text-sm text-gray-600">{siteConfig.address}</p>
            <div className="space-y-2 text-sm">
              <a className="link-underline" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                {siteConfig.phone}
              </a>
              <a className="link-underline block" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="secondary-button"
                onClick={() => handleCopy(siteConfig.email, "L'email")}
              >
                Copier l’email
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={() => handleCopy(siteConfig.phone, 'Le numéro')}
              >
                Copier le numéro
              </button>
            </div>
            {message && <p className="text-sm text-primary">{message}</p>}
            <div className="pt-4 text-sm text-gray-600">
              Horaires : <span className="font-semibold text-dark">{siteConfig.hours}</span>
            </div>
            <div className="flex gap-4 text-sm">
              <a className="link-underline" href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="link-underline" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <div className="card space-y-4">
            <h2 className="text-2xl font-semibold text-dark">Pourquoi nous contacter ?</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>✔ Devis rapide et transparent.</li>
              <li>✔ Conseils personnalisés selon votre métier.</li>
              <li>✔ Disponibilité et accompagnement humain.</li>
              <li>✔ Aucune formule d’abonnement imposée.</li>
            </ul>
            <a className="primary-button" href={`mailto:${siteConfig.email}`}>
              Écrire un email
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

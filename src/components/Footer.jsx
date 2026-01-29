import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site';

const Footer = () => (
  <footer className="border-t border-gray-100 bg-white">
    <div className="container-base grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
      <div className="space-y-4">
        <div className="flex items-center gap-3 font-semibold">
          <img src="/assets/img/icon/logo.webp" alt="Logo BE WEB" className="h-10 w-10 rounded-full" />
          <span>{siteConfig.name}</span>
        </div>
        <p className="text-sm text-gray-600">
          Création de sites web 100% sur mesure pour les artisans et indépendants en Belgique. Sans abonnement,
          accompagnement complet et prix compétitif.
        </p>
      </div>
      <div className="space-y-3 text-sm">
        <p className="font-semibold text-dark">Navigation</p>
        <ul className="space-y-2">
          <li>
            <Link className="link-underline" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="link-underline" to="/realisations">
              Réalisations
            </Link>
          </li>
          <li>
            <Link className="link-underline" to="/a-propos">
              À propos
            </Link>
          </li>
          <li>
            <Link className="link-underline" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3 text-sm">
        <p className="font-semibold text-dark">Nous contacter</p>
        <ul className="space-y-2 text-gray-600">
          <li>{siteConfig.address}</li>
          <li>
            <a className="link-underline" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
              {siteConfig.phone}
            </a>
          </li>
          <li>
            <a className="link-underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </li>
          <li>Horaires : {siteConfig.hours}</li>
        </ul>
        <div className="flex gap-3">
          <a className="link-underline" href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="link-underline" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      <div className="mt-2 flex justify-center gap-4">
        <Link className="link-underline" to="/mentions-legales">
          Mentions légales
        </Link>
        <Link className="link-underline" to="/confidentialite">
          Confidentialité
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

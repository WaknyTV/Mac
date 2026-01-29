import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../data/site';

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="container-base flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 font-semibold text-dark">
          <img src="/assets/img/icon/logo.webp" alt="Logo BE WEB" className="h-10 w-10 rounded-full" />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="primary-button">
            Contactez-nous
          </Link>
        </nav>
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container-base flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="primary-button" onClick={() => setIsOpen(false)}>
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

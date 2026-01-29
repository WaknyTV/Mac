import { siteConfig } from '../data/site';

const FloatingCallButton = () => (
  <a
    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90"
    aria-label="Appeler BE WEB"
  >
    Appeler
  </a>
);

export default FloatingCallButton;

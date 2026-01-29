import { useState } from 'react';

const PortfolioGrid = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ouvrir la réalisation ${index + 1}`}
          >
            <img
              src={src}
              alt={`Réalisation ${index + 1}`}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="max-h-[90vh] max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={images[activeIndex]}
              alt={`Réalisation ${activeIndex + 1}`}
              className="max-h-[90vh] w-full rounded-2xl object-contain"
            />
            <button
              type="button"
              className="mt-4 w-full rounded-full border border-white/70 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setActiveIndex(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;

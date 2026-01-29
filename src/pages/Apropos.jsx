import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Apropos = () => (
  <>
    <SEO
      title="À propos"
      description="Jeune équipe belge, dynamique et à l’écoute, disponible dans toute la Belgique pour vos projets web."
    />
    <section className="bg-gray-50 py-16">
      <div className="container-base">
        <span className="badge">À propos</span>
        <h1 className="mt-3 text-4xl font-semibold text-dark">Une équipe belge proche de ses clients</h1>
        <p className="section-subtitle">
          Jeune équipe belge, dynamique et à l'écoute du client. Disponible dans toute la Belgique et plus.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <img
          src="/assets/img/apropos/apropos.webp"
          alt="L'équipe BE WEB à votre écoute"
          className="h-[420px] w-full rounded-3xl object-cover shadow-soft"
          loading="lazy"
        />
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold text-dark">Notre histoire</h2>
            <p className="mt-3 text-sm text-gray-600">
              BE WEB accompagne les artisans et indépendants avec des sites vitrines 100% sur mesure. Nous privilégions
              la simplicité, la transparence et la proximité pour construire une présence en ligne qui vous ressemble.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-dark">Notre équipe</h3>
            <p className="mt-3 text-sm text-gray-600">
              Une équipe à taille humaine, disponible et réactive, qui prend le temps d’expliquer chaque étape et de
              répondre à vos questions.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-dark">Labels & confiance</h3>
            <p className="mt-3 text-sm text-gray-600">
              Nos clients nous choisissent pour notre engagement sans abonnement, notre prix compétitif et notre
              accompagnement complet.
            </p>
          </div>
          <Link to="/contact" className="primary-button">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Apropos;

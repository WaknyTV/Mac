import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/site';

const Services = () => (
  <>
    <SEO
      title="Services"
      description="Création de site internet, gestion des réseaux sociaux, support technique et stratégies digitales pour artisans en Belgique."
    />
    <section className="bg-gray-50 py-16">
      <div className="container-base">
        <span className="badge">Nos services</span>
        <h1 className="mt-3 text-4xl font-semibold text-dark">Un partenaire digital complet</h1>
        <p className="section-subtitle">
          BE WEB accompagne les artisans et indépendants avec une offre claire : site vitrine, visibilité locale et
          soutien marketing.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base grid gap-8">
        {services.map((service) => (
          <div key={service.title} className="card grid gap-6 md:grid-cols-[0.4fr_0.6fr]">
            <img
              src={service.image}
              alt={service.title}
              className="h-56 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div>
              <h2 className="text-2xl font-semibold text-dark">{service.title}</h2>
              <p className="mt-4 text-sm text-gray-600">{service.text}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                Discuter de ce service →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-primary py-16 text-white">
      <div className="container-base flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Une offre claire, sans abonnement</h2>
          <p className="mt-3 text-white/90">
            Vous gardez la main sur votre site et votre communication. Nous restons disponibles pour vous accompagner.
          </p>
        </div>
        <Link to="/contact" className="secondary-button border-white text-white hover:bg-white hover:text-primary">
          Contactez-nous
        </Link>
      </div>
    </section>
  </>
);

export default Services;

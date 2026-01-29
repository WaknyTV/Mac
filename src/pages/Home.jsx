import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PortfolioGrid from '../components/PortfolioGrid';
import { faqs, heroContent, portfolio, services, testimonials } from '../data/site';

const processSteps = [
  {
    title: 'Écoute & cadrage',
    text: 'Nous analysons vos objectifs, votre activité et votre zone géographique pour poser une stratégie claire.',
  },
  {
    title: 'Création sur mesure',
    text: 'Design premium, contenu optimisé et structure simple pour convertir vos visiteurs en contacts.',
  },
  {
    title: 'Mise en ligne & suivi',
    text: 'Déploiement rapide, tests de performance et accompagnement continu sans jargon technique.',
  },
];

const Home = () => (
  <>
    <SEO
      title="Création de sites web sur mesure"
      description="Création de sites web sur mesure pour artisans et indépendants en Belgique. Sans abonnement, simple, rapide et efficace."
    />
    <section className="bg-gradient-to-br from-white via-white to-primary/5">
      <div className="container-base grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="badge">Sites vitrine premium</span>
          <h1 className="text-4xl font-semibold text-dark sm:text-5xl">{heroContent.title}</h1>
          <p className="text-lg text-gray-600">{heroContent.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="primary-button">
              {heroContent.cta}
            </Link>
            <Link to="/services" className="secondary-button">
              Voir nos services
            </Link>
          </div>
          <div className="grid gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
            {heroContent.description.map((item) => (
              <p key={item} className="text-sm text-gray-700">
                ✔ {item}
              </p>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/img/services/siteweb.jpg"
            alt="Création de site internet sur mesure"
            className="h-[420px] w-full rounded-3xl object-cover shadow-soft"
            loading="lazy"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-dark">Sans abonnement</p>
            <p className="text-xs text-gray-500">Vous êtes propriétaire à 100 %.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="badge">Preuves & retours</span>
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-subtitle">
              Des avis authentiques et un accompagnement complet pour vous aider à gagner en visibilité locale.
            </p>
          </div>
          <Link to="/contact" className="secondary-button">
            Obtenir un devis
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.quote} className="card">
              <p className="text-sm text-gray-700">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold text-primary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16">
      <div className="container-base">
        <span className="badge">Services</span>
        <h2 className="section-title">Un accompagnement complet pour votre activité</h2>
        <p className="section-subtitle">
          Nous concevons des solutions simples, rapides et efficaces pour vous permettre de décrocher plus de contacts.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card flex flex-col gap-6 md:flex-row">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full rounded-2xl object-cover md:h-40 md:w-48"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-semibold text-dark">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="primary-button">
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base">
        <span className="badge">Réalisations</span>
        <h2 className="section-title">Un aperçu de nos réalisations</h2>
        <p className="section-subtitle">Des sites vitrine pensés pour valoriser chaque métier et chaque chantier.</p>
        <div className="mt-10">
          <PortfolioGrid images={portfolio.slice(0, 3)} />
        </div>
        <div className="mt-8">
          <Link to="/realisations" className="secondary-button">
            Voir toutes les réalisations
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16">
      <div className="container-base">
        <span className="badge">Process</span>
        <h2 className="section-title">Une méthode simple et efficace</h2>
        <p className="section-subtitle">Nous vous guidons à chaque étape pour un lancement rapide.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="card">
              <p className="text-xs font-semibold text-primary">Étape {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-dark">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base">
        <span className="badge">FAQ</span>
        <h2 className="section-title">Questions fréquentes</h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card">
              <summary className="cursor-pointer text-base font-semibold text-dark">{faq.question}</summary>
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16 text-white">
      <div className="container-base flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Prêt à lancer votre site vitrine ?</h2>
          <p className="mt-3 text-white/90">
            Contactez-nous dès aujourd’hui pour recevoir un devis clair, rapide et adapté à votre activité.
          </p>
        </div>
        <Link to="/contact" className="secondary-button border-white text-white hover:bg-white hover:text-primary">
          Contactez-nous
        </Link>
      </div>
    </section>
  </>
);

export default Home;

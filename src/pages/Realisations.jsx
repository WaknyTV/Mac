import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PortfolioGrid from '../components/PortfolioGrid';
import { portfolio } from '../data/site';

const Realisations = () => (
  <>
    <SEO
      title="Réalisations"
      description="Découvrez nos réalisations de sites vitrines pour artisans et indépendants en Belgique."
    />
    <section className="bg-gray-50 py-16">
      <div className="container-base">
        <span className="badge">Réalisations</span>
        <h1 className="mt-3 text-4xl font-semibold text-dark">Des sites vitrines qui convertissent</h1>
        <p className="section-subtitle">
          Un aperçu de projets réalisés pour des artisans belges : design moderne, navigation intuitive et efficacité
          commerciale.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container-base">
        <PortfolioGrid images={portfolio} />
      </div>
    </section>

    <section className="bg-primary py-16 text-white">
      <div className="container-base flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Vous avez un projet en tête ?</h2>
          <p className="mt-3 text-white/90">
            Nous pouvons créer le site qui mettra en valeur votre activité et générera plus d’appels.
          </p>
        </div>
        <Link to="/contact" className="secondary-button border-white text-white hover:bg-white hover:text-primary">
          Contactez-nous
        </Link>
      </div>
    </section>
  </>
);

export default Realisations;

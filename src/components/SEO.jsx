import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/site';

const defaultDescription =
  'Création de sites internet sur mesure pour artisans et indépendants en Belgique. Sans abonnement, prix compétitif et accompagnement complet.';

const SEO = ({ title, description = defaultDescription, image = '/assets/img/icon/logo.webp' }) => {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;

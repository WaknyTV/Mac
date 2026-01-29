import SEO from '../components/SEO';
import MarkdownIt from 'markdown-it';
import confidentialiteMarkdown from '../../public/content/confidentialite.md?raw';

const md = new MarkdownIt();

const Confidentialite = () => {
  const html = md.render(confidentialiteMarkdown);

  return (
    <>
      <SEO title="Confidentialité" description="Politique de confidentialité BE WEB." />
      <section className="bg-gray-50 py-16">
        <div className="container-base">
          <span className="badge">Informations légales</span>
          <h1 className="mt-3 text-4xl font-semibold text-dark">Politique de confidentialité</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container-base">
          <article
            className="prose max-w-none prose-headings:text-dark prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </>
  );
};

export default Confidentialite;

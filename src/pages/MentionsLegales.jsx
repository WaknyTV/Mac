import SEO from '../components/SEO';
import { marked } from 'marked';
import mentionsMarkdown from '../../public/content/Mentions-legales.md?raw';

const MentionsLegales = () => {
  const html = marked.parse(mentionsMarkdown);

  return (
    <>
      <SEO title="Mentions légales" description="Mentions légales du site BE WEB." />
      <section className="bg-gray-50 py-16">
        <div className="container-base">
          <span className="badge">Informations légales</span>
          <h1 className="mt-3 text-4xl font-semibold text-dark">Mentions légales</h1>
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

export default MentionsLegales;

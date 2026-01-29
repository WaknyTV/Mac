import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
    </Routes>
  </Layout>
);

export default App;

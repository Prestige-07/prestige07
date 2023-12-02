import { Header } from 'components/HomePage/Header/Header';
import { Hero } from 'components/HomePage/Hero/Hero';
import { Contacts } from 'components/HomePage/Contacts/Contacts';
import { Services } from 'components/HomePage/Services/Services';
import { Gallery } from 'components/HomePage/Gallery/Gallery';
import { Reserve } from 'components/HomePage/Reserve/Reserve';
import { About } from 'components/HomePage/About/About';
import { Footer } from 'components/HomePage/Footer/Footer';

import { ContactButton } from 'components/HomePage/ContactButton/ContactButton';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contacts />
      <Reserve />
      <Footer />

      <ContactButton />
    </>
  );
};

export default Home;

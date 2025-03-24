import AppCard from 'components/app-card';
import 'aos/dist/aos.css';
import HomeMetadata from 'components/meta/home';
import Partnership from './partnership';
import Personalized from './personalized';
import Providers from './providers';
import Testimonial from './testimonial';
import Impact from './impact';
import Investors from './investors';
import QRCode from './qrCode';
import Hero from './hero';

const Home = () => {
  return (
    <div>
      <HomeMetadata />
      <Hero />
      <Partnership />
      <Personalized />
      <Providers />
      <Testimonial />
      <Impact />
      <AppCard />
      <QRCode />
      <Investors />
    </div>
  );
};

export default Home;

import Hero from '../components/Hero';
import Services from '../components/Services';
import VastuSection from '../components/VastuSection';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <VastuSection />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}

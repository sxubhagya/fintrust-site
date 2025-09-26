import type { NextPage } from 'next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { services } from '../lib/content';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} title={s.title} description={s.description ?? s.short} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
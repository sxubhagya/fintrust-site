import type { NextPage } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../lib/content';

const ServicesPage: NextPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} description={s.description ?? s.short} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
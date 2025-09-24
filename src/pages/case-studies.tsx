import type { NextPage } from 'next';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../lib/content';

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <CaseStudyCard key={c.id} title={c.title} summary={c.summary} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;

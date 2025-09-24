import React from 'react';

type Props = {
  title: string;
  summary?: string;
};

const CaseStudyCard: React.FC<Props> = ({ title, summary }) => {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{summary || 'Case study placeholder.'}</p>
    </div>
  );
};

export default CaseStudyCard;

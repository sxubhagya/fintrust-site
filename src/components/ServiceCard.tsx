import React from 'react';

type Props = {
  title: string;
  description?: string;
};

const ServiceCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description ?? 'Service details coming soon.'}</p>
    </div>
  );
};

export default ServiceCard;
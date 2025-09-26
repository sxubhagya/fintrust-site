import React from 'react';

export type ServiceCardProps = {
  title: string;
  short: string;
  bullets: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, short, bullets }) => {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-card text-card-foreground">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{short}</p>
      {bullets?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
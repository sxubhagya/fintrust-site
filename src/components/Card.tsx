import React from 'react';

export type CardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, footer, className }) => {
  return (
    <div className={`bg-card text-card-foreground rounded-lg border shadow-lg ${className || ''}`}>
      {title ? <div className="p-6 pb-3 font-semibold text-xl">{title}</div> : null}
      <div className="p-6 pt-0">{children}</div>
      {footer ? <div className="p-6 pt-0">{footer}</div> : null}
    </div>
  );
};

export default Card;

import React from 'react';

type LogoSize = 'sm' | 'md' | 'lg';

export type LogoProps = {
  size?: LogoSize;
};

const sizeMap: Record<LogoSize, string> = {
  sm: 'text-xl h-10',
  md: 'text-2xl h-12',
  lg: 'text-4xl h-18',
};

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return (
    <span className={`${sizeMap[size]} text-financial-blue-700 font-bold inline-flex items-center`}>
      FinTrust Advisors
    </span>
  );
};

export default Logo;

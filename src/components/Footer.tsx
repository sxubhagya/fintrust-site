import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} FinTrust. Placeholder footer.</p>
      </div>
    </footer>
  );
};

export default Footer;

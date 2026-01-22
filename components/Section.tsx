
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white whitespace-nowrap">{title}</h2>
        <div className="h-px w-full bg-slate-800"></div>
      </div>
      {children}
    </section>
  );
};

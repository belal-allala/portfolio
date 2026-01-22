
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors">
      {name}
    </span>
  );
};

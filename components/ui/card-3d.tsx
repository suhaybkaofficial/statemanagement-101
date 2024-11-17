'use client';

import { cn } from '@/lib/utils';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const Card3D = ({ children, className, glowColor = '#4f46e5' }: Card3DProps) => {
  return (
    <div
      className={cn(
        'relative bg-black/80 backdrop-blur-xl rounded-xl p-6 border border-white/10',
        'hover:shadow-2xl hover:shadow-indigo-500/20',
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${glowColor}15, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}; 
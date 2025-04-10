'use client';

import { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ChartContainer({ title, children, className = '' }: ChartContainerProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-[300px]">
        {children}
      </div>
    </div>
  );
} 
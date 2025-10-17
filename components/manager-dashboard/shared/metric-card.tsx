'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  valueSize?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  subtitle,
  iconSize = 'md',
  valueSize = 'xl',
  bgColor = '#003286',
}: MetricCardProps) {
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const valueSizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-4xl',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-6',
  };

  return (
    <Card
      className="border-0 shadow-sm hover:shadow-md transition-shadow"
      style={{ backgroundColor: bgColor }}
    >
      <CardContent
        className={`${paddingClasses[valueSize]} space-y-2 md:space-y-4`}
      >
        {subtitle ? (
          <>
            <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wide">
              {title}
            </h3>
            <div
              className={`${valueSizeClasses[valueSize]} font-bold text-white pb-2`}
            >
              {value}
            </div>
            <p className="text-xs text-white/80">{subtitle}</p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wide">
                {title}
              </h3>
              <Icon className={`${iconSizeClasses[iconSize]} text-white`} />
            </div>
            <div
              className={`${valueSizeClasses[valueSize]} font-bold text-white`}
            >
              {value}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

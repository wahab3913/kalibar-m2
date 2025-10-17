import { Users, Clock, Truck, Package, TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface MetricConfig {
  title: string;
  key: string;
  icon: LucideIcon;
  iconSize?: 'sm' | 'md' | 'lg';
  valueSize?: 'sm' | 'md' | 'lg' | 'xl';
  formatter?: (value: number) => string;
  subtitle?: (value: number, avgValue?: number) => string;
}

// Daily/Weekly Report Metrics
export const weeklyMetrics: MetricConfig[] = [
  {
    title: '# of Drivers',
    key: 'uniqueDrivers',
    icon: Users,
    iconSize: 'sm',
    valueSize: 'md',
  },
  {
    title: '# of Shifts',
    key: 'totalShifts',
    icon: Clock,
    iconSize: 'sm',
    valueSize: 'md',
  },
  {
    title: '# of Trucks',
    key: 'totalTrucks',
    icon: Truck,
    iconSize: 'sm',
    valueSize: 'md',
  },
  {
    title: 'Total Gallons Delivered',
    key: 'totalGallons',
    icon: Package,
    iconSize: 'sm',
    valueSize: 'md',
    formatter: (value: number) => `${(value / 1000).toFixed(1)}k`,
  },
  {
    title: 'Total # of Deliveries',
    key: 'totalDeliveries',
    icon: TrendingUp,
    iconSize: 'sm',
    valueSize: 'md',
  },
  {
    title: 'Avg Shift Length',
    key: 'avgShiftLength',
    icon: Clock,
    iconSize: 'sm',
    valueSize: 'md',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Total Yard Time',
    key: 'totalYardTime',
    icon: Clock,
    iconSize: 'sm',
    valueSize: 'md',
    formatter: (value: number) => `${value.toFixed(1)}h`,
    subtitle: (value: number, avgValue?: number) =>
      avgValue ? `Avg: ${avgValue.toFixed(2)}h` : '',
  },
  {
    title: 'Total Other Time',
    key: 'totalOtherTime',
    icon: Clock,
    iconSize: 'sm',
    valueSize: 'md',
    formatter: (value: number) => `${value.toFixed(1)}h`,
    subtitle: (value: number, avgValue?: number) =>
      avgValue ? `Avg: ${avgValue.toFixed(2)}h` : '',
  },
];

// Monthly Review Metrics - Row 1
export const monthlyMetricsRow1: MetricConfig[] = [
  {
    title: 'Drivers',
    key: 'totalDrivers',
    icon: Users,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Shifts',
    key: 'totalShifts',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Trucks',
    key: 'totalTrucks',
    icon: Truck,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Total Gallons',
    key: 'totalGallons',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${(value / 1000).toFixed(1)}K`,
  },
  {
    title: 'Avg Monthly Gallons',
    key: 'avgWeeklyGallons',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${(value / 1000).toFixed(1)}K`,
  },
];

// Monthly Review Metrics - Row 2
export const monthlyMetricsRow2: MetricConfig[] = [
  {
    title: 'Total Deliveries',
    key: 'totalDeliveries',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Avg Shift Length',
    key: 'avgShiftLength',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Avg Mins (Warehouse)',
    key: 'avgMinsWarehouse',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'sm',
    formatter: (value: number) => value.toFixed(1),
    subtitle: () => 'Avg fuel / bulk / bulk DEF / package / combo',
  },
  {
    title: 'Avg Stops/Shift',
    key: 'avgStopsPerShift',
    icon: Package,
    iconSize: 'md',
    valueSize: 'sm',
    formatter: (value: number) => value.toFixed(1),
    subtitle: () => 'Avg fuel / bulk / bulk DEF / package / combo',
  },
];

// Monthly Review Metrics - Row 3
export const monthlyMetricsRow3: MetricConfig[] = [
  {
    title: 'Total Yard Time',
    key: 'totalYardTime',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Avg Yard Time/Week',
    key: 'avgYardTimePerWeek',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Total Other Time',
    key: 'totalOtherTime',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Avg Other Time/Week',
    key: 'avgOtherTimePerWeek',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
];

// Quarterly Metrics - Row 1
export const quarterlyMetricsRow1: MetricConfig[] = [
  {
    title: 'Drivers',
    key: 'totalDrivers',
    icon: Users,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Shifts',
    key: 'totalShifts',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Trucks',
    key: 'totalTrucks',
    icon: Truck,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Total Gallons',
    key: 'totalGallons',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${(value / 1000).toFixed(1)}K`,
  },
  {
    title: 'Avg Monthly Gallons',
    key: 'avgMonthlyGallons',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${(value / 1000).toFixed(1)}K`,
  },
];

// Quarterly Metrics - Row 2
export const quarterlyMetricsRow2: MetricConfig[] = [
  {
    title: 'Total Deliveries',
    key: 'totalDeliveries',
    icon: Package,
    iconSize: 'md',
    valueSize: 'lg',
  },
  {
    title: 'Avg Shift Length',
    key: 'avgShiftLength',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'lg',
    formatter: (value: number) => `${value.toFixed(1)}h`,
  },
  {
    title: 'Total Yard Time',
    key: 'totalYardTime',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'sm',
    formatter: (value: number) => `${value.toFixed(1)}h`,
    subtitle: (value: number, avgValue?: number) =>
      avgValue ? `Avg: ${avgValue.toFixed(1)}h` : '',
  },
  {
    title: 'Total Other Time',
    key: 'totalOtherTime',
    icon: Clock,
    iconSize: 'md',
    valueSize: 'sm',
    formatter: (value: number) => `${value.toFixed(1)}h`,
    subtitle: (value: number, avgValue?: number) =>
      avgValue ? `Avg: ${avgValue.toFixed(1)}h` : '',
  },
];

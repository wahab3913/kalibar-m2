'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { MonthlyKeyInsightsTab } from '@/components/manager-dashboard/tabs';

export default function MonthlyKeyInsightsPage() {
  return (
    <DashboardLayout>
      <MonthlyKeyInsightsTab />
    </DashboardLayout>
  );
}

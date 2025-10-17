'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { WeeklyKeyInsightsTab } from '@/components/manager-dashboard/tabs';

export default function WeeklyKeyInsightsPage() {
  return (
    <DashboardLayout>
      <WeeklyKeyInsightsTab />
    </DashboardLayout>
  );
}

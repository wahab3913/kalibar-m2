'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { QuarterlyKeyInsightsTab } from '@/components/manager-dashboard/tabs';

export default function QuarterlyKeyInsightsPage() {
  return (
    <DashboardLayout>
      <QuarterlyKeyInsightsTab />
    </DashboardLayout>
  );
}

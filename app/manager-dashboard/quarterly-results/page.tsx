'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { QuarterlyResultsTab } from '@/components/manager-dashboard/tabs';

export default function QuarterlyResultsPage() {
  return (
    <DashboardLayout>
      <QuarterlyResultsTab />
    </DashboardLayout>
  );
}

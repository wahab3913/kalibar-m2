'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { MonthlyReviewTab } from '@/components/manager-dashboard/tabs';

export default function MonthlyReviewPage() {
  return (
    <DashboardLayout>
      <MonthlyReviewTab />
    </DashboardLayout>
  );
}

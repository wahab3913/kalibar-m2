'use client';

import { DashboardLayout } from '@/components/manager-dashboard/dashboard-layout';
import { DailyReportTab } from '@/components/manager-dashboard/tabs';

export default function WeeklyRecapPage() {
  return (
    <DashboardLayout>
      <DailyReportTab />
    </DashboardLayout>
  );
}

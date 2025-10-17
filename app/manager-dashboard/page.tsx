'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ManagerDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to weekly-recap as the default page
    router.push('/manager-dashboard/weekly-recap');
  }, [router]);

  return null;
}

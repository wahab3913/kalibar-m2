'use client';

import { useState, useEffect } from 'react';
import { ManagerSidebar } from './manager-sidebar';
import { ManagerHeader } from './manager-header';
import { FloatingChatbot } from '@/components/floating-chatbot';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'manager') {
      window.location.href = '/login'; // Redirect if not manager
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      <ManagerSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 lg:pl-72">
        <ManagerHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto">
          <div className="px-4 md:px-6 py-6 md:py-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <FloatingChatbot />
    </div>
  );
}

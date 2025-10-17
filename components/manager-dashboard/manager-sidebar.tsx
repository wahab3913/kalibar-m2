'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, BarChart3, X } from 'lucide-react';

interface ManagerSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const managerPages = [
  {
    href: '/manager-dashboard/weekly-recap',
    name: 'Weekly Recap',
    icon: FileText,
  },
  {
    href: '/manager-dashboard/weekly-key-insights',
    name: 'WEEKLY KEY INSIGHTS',
    icon: TrendingUp,
  },
  {
    href: '/manager-dashboard/monthly-review',
    name: 'MONTHLY REVIEW',
    icon: BarChart3,
  },
  {
    href: '/manager-dashboard/monthly-key-insights',
    name: 'MONTHLY KEY INSIGHTS',
    icon: TrendingUp,
  },
  {
    href: '/manager-dashboard/quarterly-results',
    name: 'QUARTERLY RESULTS',
    icon: BarChart3,
  },
  {
    href: '/manager-dashboard/quarterly-key-insights',
    name: 'QUARTERLY KEY INSIGHTS',
    icon: TrendingUp,
  },
];

export function ManagerSidebar({
  sidebarOpen,
  setSidebarOpen,
}: ManagerSidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed inset-y-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-sidebar-border px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg"
              style={{ backgroundColor: '#003286' }}
            >
              <BarChart3 className="h-6 w-6 text-white m-auto mt-2" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">
              Kalibur
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/10 lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-2">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {managerPages.map((page) => {
                  const isActive = pathname === page.href;
                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          'group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-semibold transition-all',
                          isActive
                            ? 'text-white shadow-sm'
                            : 'text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/10'
                        )}
                        style={
                          isActive ? { backgroundColor: '#003286' } : undefined
                        }
                      >
                        <page.icon
                          className={cn(
                            isActive
                              ? 'text-white'
                              : 'text-sidebar-foreground group-hover:text-sidebar-foreground',
                            'h-5 w-5 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {page.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, FileText, BarChart, Clock, TrendingUp, X, ChevronLeft, ChevronRight } from "lucide-react"

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
  isCollapsed?: boolean
  onToggle?: () => void
  activeTab: string
  onTabChange: (tab: string) => void
}

const adminTabs = [
  { id: "manage-users", name: "Manage Users", icon: Users },
  { id: "daily-report", name: "Daily Report", icon: FileText },
  { id: "summary-report", name: "Summary Report", icon: BarChart },
  { id: "kpi-process", name: "KPI - Process Adherence", icon: TrendingUp },
  { id: "kpi-shift", name: "KPI - Shift Statistics", icon: Clock },
  { id: "overview-insights", name: "Overview & Insights", icon: BarChart3 },
]

export function AdminSidebar({
  isOpen,
  onClose,
  isCollapsed = false,
  onToggle,
  activeTab,
  onTabChange,
}: AdminSidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ease-in-out",
          isCollapsed ? "lg:w-16" : "lg:w-72",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary border-r border-primary/20 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
              <BarChart3 className="h-8 w-8 text-white" />
              {!isCollapsed && <span className="ml-3 text-xl font-bold text-white">Admin Dashboard</span>}
            </div>
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className={cn("text-white/80 hover:text-white hover:bg-black/10 h-6 w-6", isCollapsed && "hidden")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
          </div>

          {isCollapsed && onToggle && (
            <div className="flex justify-center -mt-2 mb-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="text-white/80 hover:text-white hover:bg-black/10 h-6 w-6"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {adminTabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <li key={tab.id}>
                        <button
                          onClick={() => onTabChange(tab.id)}
                          className={cn(
                            isActive
                              ? "bg-black/20 text-white border border-white/30"
                              : "text-white/80 hover:text-white hover:bg-black/10",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors w-full text-left",
                            isCollapsed && "justify-center",
                          )}
                          title={isCollapsed ? tab.name : undefined}
                        >
                          <tab.icon
                            className={cn(
                              isActive ? "text-white" : "text-white/80 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {!isCollapsed && tab.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary border-r border-primary/20 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-white" />
              <span className="ml-3 text-xl font-bold text-white">Admin Dashboard</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-black/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {adminTabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <li key={tab.id}>
                        <button
                          onClick={() => {
                            onTabChange(tab.id)
                            onClose()
                          }}
                          className={cn(
                            isActive
                              ? "bg-black/20 text-white border border-white/30"
                              : "text-white/80 hover:text-white hover:bg-black/10",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors w-full text-left",
                          )}
                        >
                          <tab.icon
                            className={cn(
                              isActive ? "text-white" : "text-white/80 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {tab.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
